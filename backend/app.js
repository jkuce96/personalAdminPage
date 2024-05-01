const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const nodemailer = require("nodemailer")

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    port: "3306",
    password: "KoalaPanda96#",
    database: "adminlog"
});

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: 'jkuceradc@seznam.cz',
        pass: 'EmailTest',
    },
});

app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

pool.getConnection((err, connection) => {
    if (err) {
        console.log("Error connecting to database:", err); // Handle connection errdor
    } else {
        console.log("Connected to database");
        connection.release();
    }
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send("Token not found");
    }

    jwt.verify(token, "secret-key", (err, decoded) => {
        if (err) {
            return res.status(403).send("Invalid token");
        }
        // Token is valid, set user information in request object
        req.user = decoded;
        next();
    });
}

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

app.get("/authenticate", authenticateToken, (req, res) => {
    res.sendStatus(200);
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
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
