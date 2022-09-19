const { Post } = require('../models');

const postData = [
    {
        title: "RUN-BUDDY IS LIVE!",
        post_content: "Are you lacking motivation? cmon in and meet our trainers and go for a run!.",
        user_id: 3
    },
    {
        title: "ROBOT GLADIATORS",
        post_content: "Are you in the mood for a little fight? if so cmon!",
        user_id: 1
    },
    {
        title: "BITCOIN! to the moon?",
        post_content: "Is bitcoin the future of finance? what do you think.",
        user_id: 2

    },
    {
        title: "TECH-TALKS",
        post_content: "Your favorite place to talk about tech! programming, hardware, crypto anything goes!.",
        user_id: 5
    },
    {
        title: "Game of Phones",
        post_content: "Samsung or Apple?",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;