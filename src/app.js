const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "DevOps Node.js Application",
        version: "1.0.0"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        application: "DevOps CI/CD Demo",
        environment: process.env.NODE_ENV || "development",
        timestamp: new Date().toISOString()
    });
});

module.exports = app;