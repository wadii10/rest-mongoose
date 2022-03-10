const express = require("express");
const app = express();

require("dotenv").config({ path: "./config/.env" });
const connectDb = require("./config/connectDb");
connectDb();

const user = require("./model/user");
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server run on ${PORT}`)
);

// add data
app.post("/post", async (req, res) => {
  const { fullName, email, phone } = req.body;
  try {
    const newUser = await user({ fullName, email, phone });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send(error.message);
  }
});

//get all users
app.get("/get", async(req, res) => {
    try {
        const allUsers = await user.find();
        res.send(allUsers);
    } catch (error) {
        res.send(error.message);
    }
})

//get one user
app.get("/get/:id", async(req, res) => {
    try {
        const oneUser = await user.findById(req.params.id);
        res.send(oneUser);
    } catch (error) {
        res.send(error.message);
    }
});

// delete one user
app.delete("/delete/:id", async(req, res) => {
    try {
        const userDeleted = await user.findByIdAndDelete(req.params.id);
        res.send("user deleted success");
    } catch (error) {
        res.send(error.message);
    }
});

// update user
app.put("/update/:id", async(req, res) => {
    try {
       const updateUser = await user.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
       res.send(updateUser); 
    } catch (error) {
        res.send(error.message);
    }
})