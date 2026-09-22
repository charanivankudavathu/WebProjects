const express = require("express");
const session = require("express-session");

const app = express();


app.use(
    express.urlencoded({
        extended: true
    })
);


app.use(
    session({
        secret: "protected-route-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 10 * 60 * 1000
        }
    })
);


function requireLogin(req, res, next) {

    if (!req.session.loggedIn) {

        return res.status(401).send(`
            <h1>Access Denied</h1>

            <p>
                Please login before accessing
                this protected route.
            </p>

            <a href="/">
                Go to Login
            </a>
        `);

    }

    next();

}


app.get("/", (req, res) => {

    if (req.session.loggedIn) {

        return res.send(`
            <h1>Home</h1>

            <p>
                Logged in as:
                ${req.session.username}
            </p>

            <a href="/dashboard">
                Open Protected Dashboard
            </a>

            <br><br>

            <a href="/logout">
                Logout
            </a>
        `);

    }


    res.send(`
        <h1>Login</h1>

        <form method="POST" action="/login">

            <label>
                Username:
            </label>

            <input
                type="text"
                name="username"
                required
            >

            <br><br>

            <label>
                Password:
            </label>

            <input
                type="password"
                name="password"
                required
            >

            <br><br>

            <button type="submit">
                Login
            </button>

        </form>
    `);

});


app.post("/login", (req, res) => {

    const username =
        req.body.username;

    const password =
        req.body.password;


    if (
        username === "student" &&
        password === "12345"
    ) {

        req.session.loggedIn = true;

        req.session.username = username;

        return res.redirect("/");

    }


    res.status(401).send(`
        <h1>Login Failed</h1>

        <p>
            Invalid username or password.
        </p>

        <a href="/">
            Try Again
        </a>
    `);

});


app.get(
    "/dashboard",
    requireLogin,
    (req, res) => {

        res.send(`
            <h1>Protected Dashboard</h1>

            <p>
                Welcome,
                ${req.session.username}.
            </p>

            <p>
                This route is protected by
                session authentication.
            </p>

            <a href="/">
                Home
            </a>

            <br><br>

            <a href="/logout">
                Logout
            </a>
        `);

    }
);


app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {

            return res.status(500).send(
                "Unable to logout."
            );

        }

        res.send(`
            <h1>Logged Out</h1>

            <p>
                Session destroyed successfully.
            </p>

            <a href="/">
                Login Again
            </a>
        `);

    });

});


app.listen(3035, () => {

    console.log(
        "Session 05 running at http://localhost:3035"
    );

});