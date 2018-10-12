const fs = require('fs');
const path = require('path');
const url = require('url');

const usersFolder = path.resolve(__dirname, '../../', 'data/users');

const saveNewUser = (fileName, data, cb) => {
  const src = path.resolve(usersFolder, fileName + '.json');
  fs.writeFile(src, JSON.stringify(data), cb);

  // returning promise
  
};

const createUser = (request, response) => {
  let body = [];

  const handleDataLoad = () => {
    const data = Buffer.concat(body).toString();
    const userData = Object.assign({}, JSON.parse(data), { id: Date.now() });

    const fileName = userData.name.toLowerCase() + userData.id;

    saveNewUser(fileName, userData,() => {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.write(JSON.stringify({
        "status": "success",
                "user": {
                    "name": userData.name,
                    "phone": userData.phone
        }
      }));
      response.end();
  });
};

  request
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', handleDataLoad);
};

module.exports = createUser;



