import morgan from 'morgan';
import helmet from 'helmet';
import bcrypt from 'bcrypt';
import express, { Request } from 'express';
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
            passReqToCallback: true,
        },
        async function (
            req: Request,
            email: string,
            password: string,
            done: any
        ) {
            const group = req.body.group;
            console.log(`Group is: ${group}`);
            const authModel = new AuthModel();
            const userData = await authModel.findUserLocal(email, group);

            if (userData.length <= 0) return done(null, false);

            const result = bcrypt.compareSync(password, userData[0].password);
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
