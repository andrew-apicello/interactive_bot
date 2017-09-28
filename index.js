var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  var dataArr = data.split(",");
  console.log(dataArr);

  module.exports = dataArr;

});