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

const Api = fs.readFileSync(`${__dirname}/Api/header.json`, "utf-8");
const ApiData14 = JSON.parse(Api);

const ApiStack = fs.readFileSync(`${__dirname}/Api/Stack.json`, "utf-8");
const ApiData15 = JSON.parse(ApiStack);

const ApiImage = fs.readFileSync(`${__dirname}/Api/Image.json`, "utf-8");
const ApiData16 = JSON.parse(ApiImage);

const ApiClient = fs.readFileSync(`${__dirname}/Api/client.json`, "utf-8");
const ApiData17 = JSON.parse(ApiClient);

const ApiGame = fs.readFileSync(`${__dirname}/Api/games.json`, "utf-8");
const ApiData18 = JSON.parse(ApiGame);

const ApiPricing = fs.readFileSync(`${__dirname}/Api/pricing.json`, "utf-8");
const ApiData19 = JSON.parse(ApiPricing);

const ApiSolution = fs.readFileSync(`${__dirname}/Api/solution.json`, "utf-8");
const ApiData20 = JSON.parse(ApiSolution);

const GpiHeader = fs.readFileSync(`${__dirname}/GpiApi/header.json`, "utf-8");
const GpiData = JSON.parse(GpiHeader);
const GpiImage = fs.readFileSync(`${__dirname}/GpiApi/image.json`, "utf-8");
const GpiData1 = JSON.parse(GpiImage);
const GpiWalfred = fs.readFileSync(
  `${__dirname}/GpiApi/wwalfred.json`,
  "utf-8"
);
const GpiData2 = JSON.parse(GpiWalfred);
const GpiPower = fs.readFileSync(`${__dirname}/GpiApi/power.json`, "utf-8");
const GpiData3 = JSON.parse(GpiPower);
const GpiFeature = fs.readFileSync(`${__dirname}/GpiApi/feature.json`, "utf-8");
const GpiData4 = JSON.parse(GpiFeature);
const GpiOffer = fs.readFileSync(`${__dirname}/GpiApi/offer.json`, "utf-8");
const GpiData5 = JSON.parse(GpiOffer);
const GpiBrief = fs.readFileSync(`${__dirname}/GpiApi/brief.json`, "utf-8");
const GpiData6 = JSON.parse(GpiBrief);
const GpiLatest = fs.readFileSync(`${__dirname}/GpiApi/latest.json`, "utf-8");
const GpiData7 = JSON.parse(GpiLatest);
const GpiDataList = fs.readFileSync(`${__dirname}/GpiApi/data.json`, "utf-8");
const GpiData8 = JSON.parse(GpiDataList);

app.get("/gpiHeader", (req, res) => {
  res.send(GpiData);
});
app.get("/gpiImage", (req, res) => {
  res.send(GpiData1);
});
app.get("/gpiWalfred", (req, res) => {
  res.send(GpiData2);
});
app.get("/gpiPower", (req, res) => {
  res.send(GpiData3);
});
app.get("/gpiFeature", (req, res) => {
  res.send(GpiData4);
});
app.get("/gpiOffer", (req, res) => {
  res.send(GpiData5);
});
app.get("/gpiBrief", (req, res) => {
  res.send(GpiData6);
});
app.get("/gpiLatest", (req, res) => {
  res.send(GpiData7);
});

app.get("/gpiData", (req, res) => {
  res.send(GpiData8);
});

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
  res.send(ApiData11);
});
app.get("/cart", (req, res) => {
  res.send(ApiData12);
});

app.get("/marketTab", (req, res) => {
  res.send(ApiData13);
});

app.get("/apiHeader", (req, res) => {
  res.send(ApiData14);
});

app.get("/stack", (req, res) => {
  res.send(ApiData15);
});

app.get("/image", (req, res) => {
  res.send(ApiData16);
});

app.get("/client", (req, res) => {
  res.send(ApiData17);
});

app.get("/game", (req, res) => {
  res.send(ApiData18);
});

app.get("/pricing", (req, res) => {
  res.send(ApiData19);
});

app.get("/solution", (req, res) => {
  res.send(ApiData20);
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
