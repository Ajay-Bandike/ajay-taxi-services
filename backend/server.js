const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ajay Taxi API Running");
});

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql =
    "INSERT INTO contacts(name,email,phone,message) VALUES (?,?,?,?)";

  db.query(
    sql,
    [name, email, phone, message],
    (err, result) => {
      if (err) return res.send(err);

      res.send("Message Sent");
    }
  );
});

app.listen(5000, () => {
  console.log("Server Running");
});

app.post("/booking", (req, res) => {
  const {
    name,
    phone,
    pickup,
    destination,
    date
  } = req.body;

  const sql = `
    INSERT INTO bookings
    (name, phone, pickup_location, destination, travel_date)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, phone, pickup, destination, date],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Booking Failed"
        });
      }

      res.status(200).json({
        message: "Booking Saved Successfully"
      });
    }
  );
});


app.get("/vehicles", (req, res) => {

  const sql = "SELECT * FROM vehicle_pricing";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });
});


app.get("/tours", (req, res) => {

  const sql = "SELECT * FROM tour_packages";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });
});