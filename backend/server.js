import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/messages.routes.js"
import userRoutes from "./routes/user.routes.js"

import ConnectToMongoDB from "./db/ConnectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




app.listen(PORT, () => {
  ConnectToMongoDB()
  console.log(`Server listening on port ${PORT}`)
})