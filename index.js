const express = require("express");
const fs = require("fs");
const app = express();
const port = 9000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const data = fs.readFileSync(`${__dirname}/data/header.json`, "utf-8");
const ApiData = JSON.parse(data);

const data1 = fs.readFileSync(`${__dirname}/data/about.json`, "utf-8");
const ApiData1 = JSON.parse(data1);

const data2 = fs.readFileSync(`${__dirname}/data/service.json`, "utf-8");
const ApiData2 = JSON.parse(data2);

const data3 = fs.readFileSync(`${__dirname}/data/postApi.json`, "utf-8");
const ApiData3 = JSON.parse(data3);

const data4 = fs.readFileSync(`${__dirname}/data/tab.json`, "utf-8");
const ApiData4 = JSON.parse(data4);

const data5 = fs.readFileSync(`${__dirname}/data/ReactHeader.json`, "utf-8");
const ApiData5 = JSON.parse(data5);

app.get("/", (req, res) => {
  res.send(ApiData);
});
app.get("/api", (req, res) => {
  res.send(ApiData1);
});
app.get("/service", (req, res) => {
  res.send(ApiData2);
});

app.get("/post", (req, res) => {
  res.send(ApiData3);
});

app.get("/data", (req, res) => {
  res.send(ApiData4);
});

app.get("/header", (req, res) => {
  res.send(ApiData5);
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
