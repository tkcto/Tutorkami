import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import v1Route from './route/v1/route';
import express, { Request, Response } from 'express';

//@ts-ignore
import { handler } from '../../client/_client/handler';

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/v1', v1Route);
app.use(handler);

export default app;
