const path = require('path');
const fs = require('fs');

const usersBase = () => {
    const dataBase = path.resolve(__dirname, '../../', './data/users/test.json');
    return JSON.parse(fs.readFileSync(dataBase, 'utf8'));
};

module.exports = usersBase;