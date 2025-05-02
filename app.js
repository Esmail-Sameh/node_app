const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const userData = require("./model/myDataSchema");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});

mongoose
  .connect(
    "mongodb+srv://esmil_sameh:12a3HmyBKur48NKs@cluster0.ibg8pjp.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/", (req, res) => {
  const data = new userData(req.body);
  console.log(req.body);

  data.save().then(
    res.redirect("./view/index.html")
  ).catch(
    (error)=>{
      console.log(error);
    }
  );
});
