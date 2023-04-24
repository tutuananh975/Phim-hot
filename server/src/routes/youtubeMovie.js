import express from 'express';
import * as youtubeMovieController from '../app/controllers/youtubeMovieController.js';

const youtubeMovieRouter =  express.Router();

// youtubeMovieRouter.get('/hotMovies', youtubeMovieController.getHotMovies);
youtubeMovieRouter.put('/{id}/edit', youtubeMovieController.editOneEpisode)
youtubeMovieRouter.post('/', youtubeMovieController.createMovie);

export default youtubeMovieRouter;