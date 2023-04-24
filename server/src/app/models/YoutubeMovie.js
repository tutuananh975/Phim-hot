import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const YoutubeMovie = new Schema({
    name: {type: String, required: true},
    englishName: {type: String, required: true},
    releaseAt : {type: String, required: true},
    long: {type: String},
    type: {type: String, required: true},
    category: {type: String, required: true},
    country: {type: String},
    videoId: {type: String, default: ""},
    director: {type: String},
    description: {type: String, required: true},
    performer: {type: String, required: true},
    evaluate: {type : Array, default: []},
    slug: {type: String, slug: 'name', unique: true},
    isHot: {type: Boolean, default: false},
    price: {type: Number, default: 0},
    episodes: {type: Number}
}, {
    timestamps: true
})

export default mongoose.model('YoutubeMovie', YoutubeMovie);