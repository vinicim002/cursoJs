exports.index = (req, res) => {
    res.status(200).render("login");
}

exports.register = (req, res) => {
    res.status(200).send("Ola");
}