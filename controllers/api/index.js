const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require ('./comment-routes');
const voteRoutes = require('./vote-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/votes', voteRoutes);
router.use('/', homeRoutes);

module.exports = router;
