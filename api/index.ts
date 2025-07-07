import express from 'express';
import cors from 'cors';
import { createUser, findUserByEmail } from './user.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/users', async (req, res) => {
  const user = req.body;
  const result = await createUser(user);
  res.json({ id: result.insertedId });
});

app.get('/api/users/:email', async (req, res) => {
  const user = await findUserByEmail(req.params.email);
  res.json(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));