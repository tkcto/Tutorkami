import morgan from 'morgan';
import helmet from 'helmet';
import bcrypt from 'bcrypt';
import express from 'express';
import passport from 'passport';
import AuthModel from '@model/auth';
import compression from 'compression';
import v1Route from './route/v1/route';
import { Strategy as LocalStrategy } from 'passport-local';

//@ts-ignore
import { handler } from '@frontend/.build/frontend/handler';

const app = express();

app.use(
    helmet({
        contentSecurityPolicy: false, // handled by sveltekit
    })
);

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async function (email: string, password: string, done: any) {
            const authModel = new AuthModel();
            const userData = await authModel.findUserLocal(email);

            if (userData.length <= 0) return done(null, false);

            const user = userData[0];
            const result = bcrypt.compareSync(password, user.password);

            if (!result) return done(null, false);

            return done(null, userData);
        }
    )
);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/v1', v1Route);
app.use(handler);

export default app;
