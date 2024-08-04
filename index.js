const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;
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

const data6 = fs.readFileSync(`${__dirname}/data/Imagebox.json`, "utf-8");
const ApiData6 = JSON.parse(data6);

const data7 = fs.readFileSync(`${__dirname}/data/banner.json`, "utf-8");
const ApiData7 = JSON.parse(data7);

const data8 = fs.readFileSync(`${__dirname}/data/feature.json`, "utf-8");
const ApiData8 = JSON.parse(data8);
const data9 = fs.readFileSync(`${__dirname}/data/footer.json`, "utf-8");
const ApiData9 = JSON.parse(data9);

const data10 = fs.readFileSync(`${__dirname}/data/form.json`, "utf-8");
const ApiData10 = JSON.parse(data10);

const data11 = fs.readFileSync(`${__dirname}/data/aboutData.json`, "utf-8");
const ApiData11 = JSON.parse(data11);

const data12 = fs.readFileSync(`${__dirname}/data/cart.json`, "utf-8");
const ApiData12 = JSON.parse(data12);

const data13 = fs.readFileSync(`${__dirname}/data/marketTab.json`, "utf-8");
const ApiData13 = JSON.parse(data13);

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

app.get("/image", (req, res) => {
  res.send(ApiData6);
});

app.get("/banner", (req, res) => {
  res.send(ApiData7);
});
app.get("/feature", (req, res) => {
  res.send(ApiData8);
});
app.get("/footer", (req, res) => {
  res.send(ApiData9);
});
app.get("/form", (req, res) => {
  res.send(ApiData10);
});

app.get("/about", (req, res) => {
  res.send(ApiData10);
});
app.get("/cart", (req, res) => {
  res.send(ApiData10);
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
