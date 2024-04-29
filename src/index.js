import connectDB from "./db/index.js";
import { app } from "./app.js";



connectDB()
  .then(() => {
  
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection failed :`, error);
  });
