import express from "express";
import cors from "cors";

const app = express();
app.get('/', function(req, res) {
  console.log('app')
  res.json({test: 'tes2'})
});

app.listen(3333, function() {
  console.log(`running on http://localhost:3333`)
}) 


