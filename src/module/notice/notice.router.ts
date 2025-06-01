import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { noticeZodSchema } from './notice.validation';
import { NoticeController } from './notice.controller';

const noticeRouter = express.Router();

noticeRouter.post(
  '/notice',
  validateRequest(noticeZodSchema),
  NoticeController.createNotice
);

noticeRouter.get('/notice', NoticeController.getAllNotices);
noticeRouter.get('/notice/:id', NoticeController.getSingleNotice);
noticeRouter.patch('/notice/:id', NoticeController.updateNotice);
noticeRouter.delete('/notice/:id', NoticeController.deleteNotice);

export default noticeRouter;
