import asyncHandler from 'express-async-handler';
import YoutubeMovie from '../models/YoutubeMovie.js';
import SeriesMovie from '../models/SeriesMovie.js';

// admin tạo phim mới
const createMovie = asyncHandler(async (req, res) => {
    let data = {
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
        let newSeriesMovie = new SeriesMovie({
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

// sửa + thêm một bộ phim
const editOneEpisode = asyncHandler(async (req, res) => {
    const idMovie = req.params;
})

// get các phim hot
const getHotMovies = asyncHandler(async (req, res) => {
    const data = await YoutubeMovie.find({isHot: true});
    res.status(200).json({
        status: 'ok',
        message: 'get hot movies success fully',
        data
    })
})

// get  8 phim lẻ mới nhất
const getNewSingleMovie = asyncHandler(async (req, res) => {
    const data = await YoutubeMovie.find({type: 'single'}).sort({_id: -1}).limit(8);
    res.status(200).json({
        status: 'ok',
        message: 'get new single movie successfully',
        data
    })
})

// get 8 phim bộ mới nhất
const getNewSeriesMovie = asyncHandler(async (req, res) => {
    const data = await YoutubeMovie.find({type: 'series'}).sort({_id: -1}).limit(8);
    res.status(200).json({
        status: 'ok',
        message: 'get new series movie successfully',
        data
    })
})

export {
    createMovie,
    editOneEpisode,
    getHotMovies,
    getNewSingleMovie,
    getNewSeriesMovie
};