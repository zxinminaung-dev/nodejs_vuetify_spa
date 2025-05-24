const express = require('express');
const router = express.Router();
const userRouter = require('../controller/user.controller');

router.get('/', userRouter.GetAll);
router.get('/getbyid', userRouter.GetById);
router.post('/', userRouter.Create);
router.put('/:id', userRouter.Update);
router.delete('/:id', userRouter.Delete);

module.exports = router;
