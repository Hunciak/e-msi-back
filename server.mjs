import express from 'express';
const app = express();
import cors from 'cors';
import delegationsRouter from './routers/delegations.router.mjs';
import contractorsRouter from './routers/contractors.router.mjs';

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use('/delegations', delegationsRouter);
app.use('/contractors', contractorsRouter);



app.listen(3001, '0.0.0.0', () => {
    console.log('Backend is ready on http://localhost:3001');
})