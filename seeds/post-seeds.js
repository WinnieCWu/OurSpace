const { Post } = require('../models');

const postdata = [
    {
        title: 'A little pick-me-up for a bad day',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 3
    },
    {
        title: 'Never stop believing in yourself!',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 10
    },
    {
        title: 'This is so sick!',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 4
    },
    {
        title: 'Wow, just goes to show that with a little faith and a little magic...',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 7
    },
    {
        title: 'Nothing like ice cream to cheer you up!',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 8
    },
    {
        title: `Wish my ex would've done this for me...`,
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 2
    },
    {
        title: 'Never',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 11
    },
    {
        title: 'Gonna',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 9
    },
    {
        title: 'Give',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 2,
    },
    {
        title: 'You',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 3
    },
    {
        title: 'Up',
        post_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;