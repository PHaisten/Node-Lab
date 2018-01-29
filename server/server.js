const tater = require("path");
const fs = require("fs");

let chirps = [
  {
    name: "Payton",
    message: "This is a chirp, bud."
  },
  {
    name: "Payton",
    message: "Woke up and chirped."
  },
  {
    name: "Payton",
    message: "Chirp town."
  },
  {
    name: "Payton",
    message: "Went to the chirp zone."
  },
  {
    name: "Payton",
    message: "Seems a bit chirpy outside today."
  }
];

let dataPath = tater.join(__dirname, "../chirps.json");

let sendChirps = JSON.stringify(chirps);

fs.writeFile(dataPath, sendChirps, err => {
  if (err) console.log("there was an err", err);
});

fs.readFile(dataPath, function read(err, data) {
  if (err) {
    console.log("This is an error");
  }
  let derp = JSON.parse(data);
  derp.forEach(item => {
    console.log(`${item.name} chirped ${item.message}`);
  });
});
