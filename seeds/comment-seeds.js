const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I could definitely use the help!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "quick and fun!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I think we are going to the moon brother!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "this talks are awesome keep it going"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Any know how to set up a RFID tag?"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "apple all the way"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "samsung!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "both work well tbh"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;