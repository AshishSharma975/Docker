import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/data", (req, res) => {
    const data = {
        message: 'this is some sample data from API',
        timestamp: new Date().toISOString(),
    }
    console.log("Sending data", data);
    res.json(data);
});

export default app;