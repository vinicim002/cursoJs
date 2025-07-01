const mongoose = require('mongoose');

//Modelagem do dados
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

// module.exports = HomeModel;

class Home {

}

module.exports = Home;