import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { User } from './models/user.js';
import { Form } from './models/forms.js';
import bcrypt from 'bcrypt';


const app = express();
const port = process.env.PORT || 8000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/dynamic-db");

app.get('/', (req, res) => {
    res.status(200).json({ status: "ok" });
});


app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const formData = req.body;
        const user = await User.findOne({ email: formData.email });

        if (user) {
            return res.status(409).json({ error: "User already exists." });
        }
        bcrypt.hash(formData.password, saltRounds, async (err, hash) => {
            if (err) {
                return res.status(500).json({ error: "Please try again later." });
            }
            else {
                const newUser = await User({
                    name: formData.name,
                    email: formData.email,
                    password: hash
                });
                await newUser.save();
                return res.status(200).json({ id: newUser._id });
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Please try again later." });
    }
});

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(404).json({ error: "User does not exist." });
    }

    bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Please try again later." });
        }
        else {
            if (result) {
                return res.status(200).json({ id: user._id });
            }
            else {
                return res.status(401).json({ error: "Incorrect password." });
            }
        }
    })

});

app.post('/submit-form', (req, res) => {
    console.log(req.body);
    return res.status(200).json({ message: "ok" });
})

app.listen(port, function () {
    console.log(`Server started on port ${port}.`);
})



