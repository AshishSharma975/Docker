import express from "express";

const app = express();


app.get("/",(req,res) => {
    return res.send("Hello World");
})

app.get("/api/data",(req,res)=>{
    return res.json({message:"Hello from ash backend"})
})



export default app