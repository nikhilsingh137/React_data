const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
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

//flower //

const flowerList = fs.readFileSync(`${__dirname}/flower/header.json`, "utf-8");
const flowerData = JSON.parse(flowerList);
const flowerList1 = fs.readFileSync(`${__dirname}/flower/image.json`, "utf-8");
const flowerData1 = JSON.parse(flowerList1);
const flowerList2 = fs.readFileSync(`${__dirname}/flower/online.json`, "utf-8");
const flowerData2 = JSON.parse(flowerList2);
const flowerList3 = fs.readFileSync(
  `${__dirname}/flower/imagecontent.json`,
  "utf-8"
);
const flowerData3 = JSON.parse(flowerList3);
const flowerList4 = fs.readFileSync(`${__dirname}/flower/shop.json`, "utf-8");
const flowerData4 = JSON.parse(flowerList4);
const flowerList5 = fs.readFileSync(
  `${__dirname}/flower/special.json`,
  "utf-8"
);
const flowerData5 = JSON.parse(flowerList5);
const flowerList6 = fs.readFileSync(
  `${__dirname}/flower/customer.json`,
  "utf-8"
);
const flowerData6 = JSON.parse(flowerList6);
const flowerList7 = fs.readFileSync(`${__dirname}/flower/footer.json`, "utf-8");
const flowerData7 = JSON.parse(flowerList7);

const flowerList8 = fs.readFileSync(
  `${__dirname}/flower/journey.json`,
  "utf-8"
);
const flowerData8 = JSON.parse(flowerList8);

const choclateList = fs.readFileSync(
  `${__dirname}/choclate/header.json`,
  "utf-8"
);
const choclateData = JSON.parse(choclateList);

const choclateList1 = fs.readFileSync(
  `${__dirname}/choclate/shop.json`,
  "utf-8"
);
const choclateData1 = JSON.parse(choclateList1);

const choclateList2 = fs.readFileSync(
  `${__dirname}/choclate/image.json`,
  "utf-8"
);
const choclateData2 = JSON.parse(choclateList2);

const choclateList3 = fs.readFileSync(
  `${__dirname}/choclate/seller.json`,
  "utf-8"
);
const choclateData3 = JSON.parse(choclateList3);

const choclateList4 = fs.readFileSync(
  `${__dirname}/choclate/sally.json`,
  "utf-8"
);
const choclateData4 = JSON.parse(choclateList4);

const choclateList5 = fs.readFileSync(
  `${__dirname}/choclate/spred.json`,
  "utf-8"
);
const choclateData5 = JSON.parse(choclateList5);

const choclateList6 = fs.readFileSync(
  `${__dirname}/choclate/leder.json`,
  "utf-8"
);
const choclateData6 = JSON.parse(choclateList6);

const choclateList7 = fs.readFileSync(
  `${__dirname}/choclate/project.json`,
  "utf-8"
);
const choclateData7 = JSON.parse(choclateList7);

const choclateList8 = fs.readFileSync(
  `${__dirname}/choclate/footer.json`,
  "utf-8"
);
const choclateData8 = JSON.parse(choclateList8);

const choclateList9 = fs.readFileSync(
  `${__dirname}/choclate/product.json`,
  "utf-8"
);
const choclateData9 = JSON.parse(choclateList9);

const choclateList10 = fs.readFileSync(
  `${__dirname}/choclate/natural.json`,
  "utf-8"
);
const choclateData10 = JSON.parse(choclateList10);

const choclateList11 = fs.readFileSync(
  `${__dirname}/choclate/choclate.json`,
  "utf-8"
);
const choclateData11 = JSON.parse(choclateList11);

const choclateList12 = fs.readFileSync(
  `${__dirname}/choclate/care.json`,
  "utf-8"
);
const choclateData12 = JSON.parse(choclateList12);

const choclateList13 = fs.readFileSync(
  `${__dirname}/choclate/productseller.json`,
  "utf-8"
);
const choclateData13 = JSON.parse(choclateList13);

//locatose //
const LactoseHeader = fs.readFileSync(
  `${__dirname}/Lactose/Header.json`,
  "utf-8"
);
const lactoseData = JSON.parse(LactoseHeader);

// choclate //

app.get("/choclateHeader", (req, res) => {
  res.send(choclateData);
});

app.get("/choclateShop", (req, res) => {
  res.send(choclateData1);
});
app.get("/choclateImage", (req, res) => {
  res.send(choclateData2);
});
app.get("/choclateSeller", (req, res) => {
  res.send(choclateData3);
});
app.get("/choclateSally", (req, res) => {
  res.send(choclateData4);
});
app.get("/choclateSpred", (req, res) => {
  res.send(choclateData5);
});
app.get("/choclateLeder", (req, res) => {
  res.send(choclateData6);
});
app.get("/choclateProject", (req, res) => {
  res.send(choclateData7);
});
app.get("/choclateFooter", (req, res) => {
  res.send(choclateData8);
});
app.get("/choclateProduct", (req, res) => {
  res.send(choclateData9);
});
app.get("/choclateNatural", (req, res) => {
  res.send(choclateData10);
});
app.get("/choclateChoclate", (req, res) => {
  res.send(choclateData11);
});
app.get("/choclateCare", (req, res) => {
  res.send(choclateData12);
});
app.get("/choclateProductseller", (req, res) => {
  res.send(choclateData13);
});

app.get("/flowerHeader", (req, res) => {
  res.send(flowerData);
});

app.get("/flowerImage", (req, res) => {
  res.send(flowerData1);
});
app.get("/flowerOnline", (req, res) => {
  res.send(flowerData2);
});
app.get("/flowerImageContent", (req, res) => {
  res.send(flowerData3);
});
app.get("/flowerShop", (req, res) => {
  res.send(flowerData4);
});
app.get("/flowerSpecial", (req, res) => {
  res.send(flowerData5);
});
app.get("/flowerCustomer", (req, res) => {
  res.send(flowerData6);
});
app.get("/flowerFooter", (req, res) => {
  res.send(flowerData7);
});
app.get("/flowerJourney", (req, res) => {
  res.send(flowerData8);
});

//flower //

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
app.get("/lactoseHeader", (req, res) => {
  res.send(lactoseData);
});

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
