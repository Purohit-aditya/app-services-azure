const express = require("express");
const axios = require("axios");

const app = express();

const BACKEND_URL = "http://localhost:3000/api/message";

app.get("/", async (req, res) => {

    try {

        const response = await axios.get(BACKEND_URL);

        res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Azure Demo App</title>

            <style>

                body{
                    margin:0;
                    font-family: Arial, sans-serif;
                    background:#f4f6f8;
                    color:#333;
                }

                .container{
                    max-width:800px;
                    margin:80px auto;
                    background:white;
                    padding:40px;
                    border-radius:10px;
                    box-shadow:0 2px 10px rgba(0,0,0,0.08);
                }

                h1{
                    margin-top:0;
                    color:#1e293b;
                }

                p{
                    line-height:1.6;
                    color:#555;
                }

                .status{
                    margin-top:30px;
                    padding:18px;
                    background:#eef4ff;
                    border-left:4px solid #2563eb;
                    border-radius:6px;
                }

                .label{
                    font-size:14px;
                    color:#666;
                    margin-bottom:8px;
                }

                .message{
                    font-size:18px;
                    font-weight:bold;
                    color:#2563eb;
                }

            </style>
        </head>

        <body>

            <div class="container">

                <h1>Azure App Service Frontend</h1>

                <p>
                    This frontend application is running on Azure App Service
                    and communicating with a backend API hosted privately.
                </p>

                <div class="status">

                    <div class="label">
                        Backend Response
                    </div>

                    <div class="message">
                        ${response.data.message}
                    </div>

                </div>

            </div>

        </body>

        </html>
        `);

    } catch (err) {

        res.send(`
            <h1>Frontend Running</h1>
            <p>Backend connection failed</p>
            <pre>${err.message}</pre>
        `);
    }
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Frontend running on ${PORT}`);
});