const userBase = require('./userBase');

const getUser = (request, response) => {
const users = userBase();
    if(users){
        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(users));
        response.end();
    } else {
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.write('Server error');
        response.end();
    }
    
};
module.exports = getUser;


