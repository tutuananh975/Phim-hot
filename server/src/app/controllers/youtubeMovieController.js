import asyncHandler from 'express-async-handler';
import YoutubeMovie from '../models/YoutubeMovie.js';
import SeriesMovie from '../models/SeriesMovie.js';

// Get 8 phim lẻ mới cập nhật
const getNewSingleMovies = asyncHandler(async (req, res) => {
    res.json({
        status: 'ok'
    })
})

const createMovie = asyncHandler(async (req, res) => {
    const data = {
        ...req.body,
    };
    const newMovie = new YoutubeMovie(data);
    await newMovie.save();
    if(data.type === 'single') data = {
        ...data,
        thumbnail: `https://img.youtube.com/vi/${data.videoId}/default.jpg`,
        videoSrc: `https://www.youtube.com/watch?v=${data.videoId}`
    }; 
    else if(data.type ==='series') {
        let episodes = [];
        for(let i = 0; i < data.episodes; i++) {
            episodes = [
                ...episodes, 
                {
                    episodeNumber: i + 1,
                }
            ]
        }
        const newSeriesMovie = new SeriesMovie({
            movieId: newMovie._id,
            episodes
        })
        await newSeriesMovie.save();
    }
    res.status(201).json({
        status: 'ok',
        message: 'create new movie successfully!',
        data
    })
})

const editOneEpisode = asyncHandler(async (req, res) => {
    const idMovie = req.params;
})

export {
    createMovie,
    editOneEpisode
};