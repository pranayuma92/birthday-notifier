import express, { Request, Response } from 'express';
import { User } from '../models';

const router = express.Router();

router.post('/user', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, birthday } = req.body;
    const timezone = 'Asia/Jakarta';
    const user = await User.create({ firstName, lastName, email, birthday, timezone });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/user/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).json({ message: 'Data deleted' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;