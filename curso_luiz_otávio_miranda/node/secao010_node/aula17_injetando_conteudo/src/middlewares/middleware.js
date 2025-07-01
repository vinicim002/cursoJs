exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este eh o valor da variavel local.';
    next();
}