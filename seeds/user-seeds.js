const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// 11 base fake users
const userdata = [
    {
        username: 'jukeboxjunkie',
        email: 'blubbernubber@aol.com',
        password: 'pw123'
    },
    {
        username: 'bbabycakes57',
        email: 'rmebes1@sogou.com',
        password: 'pw123'
    },
    {
        username: 'descardi-b',
        email: 'googleit@last.fm',
        password: 'pw123'
    },
    {
        username: 'winniecwu',
        email: 'nwestnedge@cbc.ca',
        password: 'pw123'
    },
    {
        username: 'aaronleung',
        email: 'hahaha@gmail.com',
        password: 'pw123',
    },
    {
        username: 'anti-cheeese',
        email: 'nokinoki@gmail.com',
        password: 'magooby333'
    },
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        username: 'jwilloughway1',
        email: 'rmeeeebes1@sogou.com',
        password: 'password123'
    },
    {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123'
    },
    {
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
    },
    {
        username: 'djiri4',
        email: 'gmidgley4@weather.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;