const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers,
  getUser,
  updateUser,
  updateAvatar,
  currentUser,
  logout,
} = require('../controllers/users');
const auth = require('../middlewares/auth');
const { regExpUrl } = require('../utils/constants');

router.use(auth);
router.delete('/signout', logout);
router.get('/', getUsers);
router.get('/me', currentUser);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex(),
  }),
}), getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(regExpUrl),
  }),
}), updateAvatar);

module.exports = router;
