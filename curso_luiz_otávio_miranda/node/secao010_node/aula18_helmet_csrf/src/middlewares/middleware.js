exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este eh o valor da variavel local.';
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code ) {
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}