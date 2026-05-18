import express from "express";
import morgan from "morgan";

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the NodeJS + Docker Compose API" });
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/api/users", (req, res) => {
    const user = [
        { id: 1, name: "John" },
        { id: 2, name: "Doe" },
        { id: 3, name: "Alice" },
    ];
    res.json(user);
})
    

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
