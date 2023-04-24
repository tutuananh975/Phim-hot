import handleErrorMiddleware from '../middlewares/handleErrorMiddleware.js';
import authRouter from './auth.js';
import youtubeMovieRouter from './youtubeMovie.js';

const route = (app) => {
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/youtubeMovie', youtubeMovieRouter);
    
    app.use(handleErrorMiddleware);
}

export default route;