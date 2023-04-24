import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const SeriesMovie = new Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'YoutubeMovie', required: true },
    episodes: [{
        episodeNumber: {type: Number, require: true},
        long: {type: String, default: ''},
        videoId: {type: String, default: ''},
        description: {type: String, default: ''},
        evaluate: {type : Array, default: []},
        isHot: {type: Boolean, default: false}
    }]
})

export default mongoose.model('SeriesMovie', SeriesMovie);

