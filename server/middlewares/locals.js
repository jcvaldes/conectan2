module.exports = function(req,res, next){
    res.locals.title = "Conectan2";
    next();
};