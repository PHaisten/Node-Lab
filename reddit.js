const tater = require("path");
const fs = require("fs");
const rp = require("request-promise");

let dataPath = tater.join(__dirname, "./popular-articles.json");

let redditArray = [];

let options = {
  uri: "https://reddit.com/r/popular.json",
  encoding: null,
  json: true
};

rp(options).then(data => {
  data.data.children.forEach(item => {
    let title = item.data.title;
    let author = item.data.author;
    let url = item.data.url;
    redditArray.push(author + "\n   " + title + "\n   " + url + "\n");
  });
  redditArray.forEach(item => {
    fs.appendFileSync(dataPath, item);
  });
});
