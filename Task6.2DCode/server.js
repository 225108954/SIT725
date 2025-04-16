const express = require("express");
const path = require("path");
const calculator = require("./src/calculator");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Calculator endpoint
app.get("/calculator/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }

  const result = calculator.add(a, b);
  res.send(`The sum of ${a} and ${b} is: ${result}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
