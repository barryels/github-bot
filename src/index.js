'use strict';


var GitHubAPI = require('github')
var githubAPI = new GitHubAPI({});

var config = require('./config.js');


/**
githubAPI.authenticate({
    type: 'oauth',
    token: config.AUTH_TOKEN,
});
/**/


/**
githubAPI.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
    username: 'barryels'
}, function (err, res) {
    if (err) throw err
    console.log(JSON.stringify(res))
})
/**/


githubAPI.search.issues({
    q: 'performance&is=issue&repo=elm-lang/core'
}, function (err, res) {
    if (err) throw err;

    console.log(res.data.total_count);

    // console.log(JSON.stringify(res));
})


/*
githubAPI.issues.getForRepo({
    owner: 'elm-lang',
    repo: 'core'
}, function (err, res) {
    if (err) throw err
    console.log(JSON.stringify(res))
});
*/
