import express from 'express';
import errorMiddleware from './middlewares/errormiddleware';
import loginRoutes from './routes/loginRoutes';
import ordersRoutes from './routes/ordersRoutes';
import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);
app.use(errorMiddleware);

export default app;
