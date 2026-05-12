import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to CI/CD Pipeline Backend Server" });
});

app.get("/api/data", (req, res) => {
    const data = {
        id: 1,
        name: "Demo Item 1",
        description: "Item 1 description"
    }
    res.status(200).json({ data });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});