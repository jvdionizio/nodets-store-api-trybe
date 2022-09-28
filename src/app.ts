import express from 'express';
import ordersRoutes from './routes/ordersRoutes';
import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

export default app;
