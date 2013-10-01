/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Tab Schema
 */
var TabSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    artist: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
TabSchema.path('artist').validate(function(artist) {
    return artist.length;
}, 'Artist cannot be blank');

TabSchema.path('name').validate(function(name) {
    return name.length;
}, ' cannot be blank');

TabSchema.path('name').validate(function(name) {
    return name.length;
}, ' cannot be blank');
/**
 * Statics
 */
TabSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user').exec(cb);
    }
};

mongoose.model('Tab', TabSchema);