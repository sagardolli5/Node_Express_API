import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
//initialize express application
const app = express();
const PORT = 5000;

//Middleware
app.use(bodyParser.json());

//routes
app.use("/users", usersRoutes);

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
