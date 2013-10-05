/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Tab = mongoose.model('Tab'),
    _ = require('underscore');


/**
 * Find tab by id
 */
exports.tab = function(req, res, next, id) {
    Tab.load(id, function(err, tab) {
        if (err) return next(err);
        if (!tab) return next(new Error('Failed to load tab ' + id));
        req.tab = tab;
        next();
    });
};

/**
 * Create a tab
 */
exports.create = function(req, res) {            
    var tab = new Tab(req.body);
    tab.user = req.user;

    tab.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                tab: tab
            });
        } 
        else {
            res.jsonp(tab);
        }
    });
};

/**
 * Update a tab
 */
exports.update = function(req, res) {
    var tab = req.tab;

    tab = _.extend(tab, req.body);

    tab.save(function(err) {
        res.jsonp(tab);
    });
};

/**
 * Delete an tab
 */
exports.destroy = function(req, res) {
    var tab = req.tab;

    tab.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tab);
        }
    });
};

/**
 * Show an tab
 */
exports.show = function(req, res) {
    res.jsonp(req.tab);
};

/**
 * List of Tabs
 */
exports.all = function(req, res) {
    Tab.find().sort({artist: 1}).populate('user').exec(function(err, tabs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tabs);
        }
    });
};
