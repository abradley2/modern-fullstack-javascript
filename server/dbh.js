var levelup = require('levelup'),
    dbh = levelup('./level');

module.exports = dbh;
