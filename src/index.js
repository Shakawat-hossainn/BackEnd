import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 5000

connectDB()
  .then(() => {
  
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection failed :`, error);
  });
