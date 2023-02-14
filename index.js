// bzyn9vzwRiaN3Mas
const mongoose = require("mongoose");
const express = require("express");
const categoriesRoute = require("./routes/categories");


const app = express();
app.use(express.json());
app.use("/api/categories", categoriesRoute);
// mongoose.set("useFindAndModify", false);
mongoose.set('strictQuery', false);

mongoose
  .connect(
    "mongodb+srv://Dilshod:bzyn9vzwRiaN3Mas@backend.nf03kr9.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("mongo db connection on database");
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
