const { User } = require('../models');

const userData = [
    {
        username: "michael_25",
        twitter: "mikej",
        github: "jmbg89",
        email: "drjpolanco25@yahoo.com",
        password: "getitdone25"
    },
    {
        username: "maury30",
        twitter: "dirtymaury",
        github: "dmb22",
        email: "mauriii@gmail.com",
        password: "geekedup12"
    },
    {
        username: "shawn20",
        twitter: "gordon5",
        github: "gdub33",
        email: "airupinthesky@aol.com",
        password: "gangup23"
    },
    {
        username: "jacboy",
        twitter: "jackedboiii",
        github: "jack12",
        email: "jacphillips@yahoo.com",
        password: "p@ssword4"
    },
    {
        username: "stephen2",
        twitter: "stephan11",
        github: "steph30",
        email: "bayarea23@gmail.com",
        password: "forthebay30"
    },
    {
        username: "kingoak",
        twitter: "kingdarious",
        github: "dareweus",
        email: "bigoak@gmail.com",
        password: "oaklandweup45"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;