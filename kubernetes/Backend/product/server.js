import express from express
import morgan from "morgan"
import axios from "axios"


const app = express();
app.use(morgan("dev"))


app.get("/", async (req, res) => {
   const response = await axios.get("http://main-server-service:3000")
   res.status(200).json({
    message: "ok from product server",
    data: response.data
   })
})


app.listen(8080, () => {
    console.log("Product server is running on port 8080");
})


export default app;
