import express from 'express';
import * as youtubeMovieController from '../app/controllers/youtubeMovieController.js';

const youtubeMovieRouter =  express.Router();

// youtubeMovieRouter.get('/hotMovies', youtubeMovieController.getHotMovies);
youtubeMovieRouter.get('/hotMovies', youtubeMovieController.getHotMovies);
youtubeMovieRouter.get('/newSingleMoive', youtubeMovieController.getNewSingleMovie);
youtubeMovieRouter.get('/newSeriesMoive', youtubeMovieController.getNewSeriesMovie);
youtubeMovieRouter.put('/{id}/edit', youtubeMovieController.editOneEpisode);
youtubeMovieRouter.post('/', youtubeMovieController.createMovie);

export default youtubeMovieRouter;