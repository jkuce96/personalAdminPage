cd frontend => npm run dev

cd backend => npm start 


--- db je pouze localhost, login údaje username: "Foo", password: "Bar", simulují login z localhost mysql databáze (=> klient obdrží podepsaný jwt token do cookies)


--- newsletter email db také pouze localhost




--> 
Full page = plně responzivní layout skrze komponenty

KLIENTSIDE==
React.js, Axios, React-typed, icons, router

Homepage = 
1. React typed framework
2. left/right slider, registrace k newsletteru na backendu v MySQL + modal popup po úspěšné registraci s mail info, regex check
3. simple CRUD - save / delete data v localhost


/Bitcoin = 
1. API fetch coingecko, random CSS infinite loop animace onclick


/Fetch =
1. JWT protected route => pouze s podepsaným JWT v cookies lze zobrazit
2. Standard IPV4 + IPV6 check o uživateli, aktuální date+time + tooltip on click
3. Random krypto fetch from coingecko, Math.random ticker + cena + standard loader
4. Weather app + skeleton loader


/Log
1. check logged true /false
2. login form POST request na backend server - check data z localhost MySQL db (bez db stačí údaje Foo Bar)
3. check if username && pw match db - pool.query sanitized || match Foo Bar => podepsaný jwt s 1h expirací a status 2xx
4. Random simulated fetch loader po loginu, redirect na protected route po status 2xx
5. If logged => logout btn with simulated loader => logout = remove jwt token from cookies


SERVERSIDE==
Express.js, cookie-parser, cors, dotenv, jsonwebtoken, mysql, nodemon + (to be done nodemailer + bcrypt)

1. server config, routes
2. db connect to pool via dotenv + localhost port
3. nodemailer transporter (to be finished)
4. CORS for incoming req from 5173 frontend
5. authentication fc - check header from req., split, save into var and verify via """"secret key""""
6. POST for nodemailer (to be finished)
7. get for /authenticate - check if JWT in cookies
8. POST for /login = check db, assign token (db matches || Foo+Bar)
9. POST for /newsletter = ukládání mailu do MySQL db
10. 
