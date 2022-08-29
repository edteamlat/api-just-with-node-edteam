async function bodyParser(request) {
  return new Promise((resolve, reject) => {
    let totalData = "";
    request
      .on("error", (err) => {
        console.log(err);
        reject();
      })
      .on("data", (chunk) => {
        totalData += chunk;
      })
      .on("end", () => {
        request.body = JSON.parse(totalData);
        resolve();
      });
  });
}

module.exports = { bodyParser };
