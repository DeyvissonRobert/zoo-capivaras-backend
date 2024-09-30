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

exports.createCapivara = (req, res) => {
    const newCapivara = req.body;
    capivaraModel.create(newCapivara, (err) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao adicionar capivara' });
        } else {
            res.status(201).json({ message: 'Capivara adicionada com sucesso' });
        }
    });
};

exports.updateCapivara = (req, res) => {
    const id = req.params.id;
    const updatedCapivara = req.body;
    capivaraModel.update(id, updatedCapivara, (err) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao atualizar capivara' });
        } else {
            res.status(200).json({ message: 'Capivara atualizada com sucesso' });
        }
    });
};


