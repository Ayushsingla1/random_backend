const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  for(let i = 0; i < 100000; i++){
    continue;
  }
  res.status(200).json({
    msg: "hi there"
  })
})

const PORT = 3000;

app.listen(PORT,() => {
  console.log(`server started on port: ${PORT}`)
})
