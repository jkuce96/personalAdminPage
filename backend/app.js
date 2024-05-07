const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const nodemailer = require("nodemailer")
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const mysql = require('mysql');


//connect na db
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    port: "3306",
    password: process.env.DBHESLO,
    database: "adminlog"
});

//nodemailer package (fixnout později)
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: 'jkuceradc@seznam.cz',
        pass: process.env.HESLO,
    },
});

// pro different origin (client je port 5xxx, server 3000)
app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());
//nepotřebuju prozatimn
app.use(bodyParser.urlencoded({ extended: true }));
//setting jwc v cookies
app.use(cookieParser());
//serving static files (not used rn)
app.use(express.static('public'));

//check DB connection (console logne připojenost)
pool.getConnection((err, connection) => {
    if (err) {
        console.log("Error connecting to database:", err); // Handle connection errdor
    } else {
        console.log("Connected to database");
        connection.release();
    }
});

//fce na autentikaci přijatého tokenu v headeru (jwt v cookies)
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send("Token nenalezen");
    }

    jwt.verify(token, "secret-key", (err, decoded) => {
        if (err) {
            return res.status(403).send("Špatný token");
        }
        req.user = decoded;
        next();
    });
}

//post sendmail routa, atm nefunkční
app.post("/send-email", (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        from: 'jkuceradc@seznam.cz',
        to: "jkuceradc@seznam.cz",
        subject: 'Test',
        text: `Email: ${email}, Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error sending email");
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send("Email sent");
        }
    });
});

//autentikační routa
app.get("/authenticate", authenticateToken, (req, res) => {
    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Hello world");
});


//login routa, sanitized data
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "Foo" && password === "Bar") {
        const token = jwt.sign({ username: req.body.username }, "secret-key", { expiresIn: "1h" });
        console.log("Login success");
        return res.status(200).json({ token: token, status: "success"});
        
    }

    pool.query(`SELECT * FROM users WHERE BINARY username = ? AND BINARY password = ?`,
    [username, password],
    (err, results) => {
    if (err) {
        console.log("Error in query", err);
        return res.status(500).send("Error in query");
    }
    if (results.length === 0) {
        console.log("Wrong ID or password");
        return res.status(401).send("Špatné ID nebo heslo");
    } else {
        const token = jwt.sign({ username: req.body.username }, "secret-key", { expiresIn: "1h" });
        console.log("Login success");
        return res.status(200).json({ token: token, status: "success"});
    }
}
    );
});

//uložení mailu v db z user inputu v clientu
app.post("/newsletter", (req, res) => {
    const { email } = req.body;
    pool.query(
        `INSERT INTO newsletter_users (email) VALUES (?)`,
        [email],
        (err, result) => {
            if (err) {
                console.error("Error in query", err);
                return res.status(500).send("Error in query");
            }
            console.log("Email added to newsletter");
            return res.status(200).send("Email added to newsletter");
        }
    );
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
