import connectDB from "./db/index.js";
import { app } from "./app.js";
import cors from 'cors'


app.use(cors({
    origin:process.env.CORS_URI,
    credentials:true
}

))


connectDB()
  .then(() => {
  
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection failed :`, error);
  });
