const capivaraModel = require('../models/capivaraModel');

exports.getAllCapivaras = (req, res) => {
    capivaraModel.getAll((err, capivaras) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao buscar capivaras' });
        } else {
            res.status(200).json(capivaras);
        }
    });
};

