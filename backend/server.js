const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from private backend VM 🚀"
    });
});

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Backend API is running");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});