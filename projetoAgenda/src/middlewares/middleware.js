exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este eh o valor da variavel local.';
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }

    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}