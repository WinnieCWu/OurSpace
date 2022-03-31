const router = require('express').Router();
const { Vote } = require('../../models');

router.get('/', (req, res) => {
    Vote.findAll({
        attributes: ["id", "post_url", "title", "created_at"],
        order: [["created_at", "DESC"]],
        include: [
        {
            model: User,
            attributes: ["username"],
        },
    ],
  })
    .then((dbVoteData) => res.json(dbVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Vote.create({
        //capture the vote on the post/comment****
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbVoteData => res.json(dbVoteData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Vote.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbVoteData) => {
        if (!dbVoteData) {
          res.status(404).json({ message: "No vote found with this id" });
          return;
        }
        res.json(dbVoteData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;