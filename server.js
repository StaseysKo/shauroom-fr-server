import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./sendEmail.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://194.67.109.224:3000"],
}));
const port = process.env.PORT || 5000;

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { services, firstName, lastName, email, phoneNumber, city, experience, budget, message } = req.body
    EmailSender({ services, firstName, lastName, email, phoneNumber, city, experience, budget, message })
    res.json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`server start`);
});
