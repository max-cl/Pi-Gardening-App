const dotenv = require("dotenv");
dotenv.config();
const { connectToDatabase } = require("../utils/mongodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* JWT secret key */
const KEY = process.env.JWT_KEY;

exports.signin = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: "error",
                error: "Request missing username or password",
            });
        }
        /* Check user email in database */
        const user = await db
            .collection("users")
            .find({
                email: email,
            })
            .toArray();

        /* Check if exists */
        if (!user[0]) {
            /* Send error with message */
            res.status(400).json({ status: "error", error: "User Not Found" });
        }
        /* Variables checking */
        if (user[0]) {
            const userId = user._id,
                userEmail = user[0].email,
                userPassword = user[0].password,
                userFirstname = user[0].firstname,
                userLastname = user[0].lastname,
                userFullname = `${user[0].firstname} ${user[0].lastname}`;

            /* Check and compare password */
            bcrypt.compare(password, userPassword).then((isMatch) => {
                /* User matched */
                if (isMatch) {
                    /* Create JWT Payload */
                    const payload = {
                        id: userId,
                        email: userEmail,
                        firstname: userFirstname,
                        lastname: userLastname,
                        fullname: userFullname,
                    };

                    /* Sign token */
                    jwt.sign(
                        payload,
                        KEY,
                        {
                            expiresIn: 31556926, // 1 year in seconds
                        },
                        (err, token) => {
                            /* Send succes with token */
                            res.status(200).json({
                                success: true,
                                token: "Bearer " + token,
                            });
                        }
                    );
                } else {
                    /* Send error with message */
                    res.status(400).json({
                        status: "error",
                        error: "Password incorrect",
                    });
                }
            });
        }
    } catch (e) {
        console.error(e);
    }
};

exports.signup = async (req, res, next) => {
    try {
        const { db } = await connectToDatabase();
        const { firstname, lastname, email, password } = req.body;

        // Validate user input
        if (!(email && password && firstname && lastname)) {
            res.status(400).json({
                status: "error",
                error: "All input is required",
            });
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await db
            .collection("users")
            .find({
                email: email,
            })
            .toArray();

        if (oldUser[0]) {
            return res.status(409).json({
                status: "error",
                error: "User Already Exist. Please Login",
            });
        }

        // Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await db.collection("users").insertOne({
            firstname,
            lastname,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        /* Create JWT Payload */
        const payload = {
            id: user.ops[0]._id,
            email: user.ops[0].email,
            firstname: user.ops[0].firstname,
            lastname: user.ops[0].lastname,
            fullname: `${user.ops[0].firstname} ${user.ops[0].lastname}`,
        };

        /* Sign token */
        jwt.sign(
            payload,
            KEY,
            {
                expiresIn: 31556926, // 1 year in seconds
            },
            (err, token) => {
                /* Send succes with token */
                res.status(201).json({
                    success: true,
                    token: "Bearer " + token,
                });
            }
        );
    } catch (e) {
        console.error(e);
    }
};
