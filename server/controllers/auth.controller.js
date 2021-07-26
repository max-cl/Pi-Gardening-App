const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../utils/mongodb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* JWT secret key */
const KEY = process.env.JWT_KEY;
/* Users collection sample */
const USERS = [
  {
    id: 1,
    email: 'example1@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 2,
    email: 'example2@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 3,
    email: 'example3@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 4,
    email: 'example4@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
];



exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Request missing username or password',
            });
        }
        /* Check user email in database */
        const user = await USERS.find(user => user.email === email);
        /* Check if exists */
        if (!user) {
            /* Send error with message */
            res.status(400).json({ status: 'error', error: 'User Not Found' });
        }
        /* Variables checking */
        if (user) {
            const userId = user.id,
                userEmail = user.email,
                userPassword = user.password,
                userCreated = user.createdAt;
            /* Check and compare password */
            bcrypt.compare(password, userPassword).then(isMatch => {
                /* User matched */
                if (isMatch) {
                /* Create JWT Payload */
                const payload = {
                    id: userId,
                    email: userEmail,
                    createdAt: userCreated,
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
                        token: 'Bearer ' + token,
                    });
                    },
                );
                } else {
                /* Send error with message */
                res
                    .status(400)
                    .json({ status: 'error', error: 'Password incorrect' });
                }
            });
        }
    } catch (e) {
        console.error(e);
    }
};
