const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Dumb, why did you post.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Omg I love this!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Call 888-888-888 for a good time...',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Super helpful.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Ehhh, I would do this a different way.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Love this site!',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'I cannot belive this.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Lmaaaaaaaaaoooooo.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: '笑死了哈哈哈哈',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: '请给我一个赞！',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Whoa, never thought of it this way!',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'I hate Java...',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Thank the heavens for Node.js!',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text:
      'Does this consider different screen sizes?',
    user_id: 5,
    post_id: 9
  },
  {
    comment_text: `You're still using var...?`,
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'I have no idea what this all means.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Life is meaningless. That could be a good thing or a bad thing.',
    user_id: 2,
    post_id: 10
  },
  {
    comment_text: 'Finally, a solution!',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text:
      'Never thought we would ge this far.',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;