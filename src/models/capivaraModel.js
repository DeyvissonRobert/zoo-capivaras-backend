const db = require('../../config/db');

exports.getAll = (callback) => {
    const sql = 'SELECT * FROM capivaras';
    db.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};

exports.create = (newCapivara, callback) => {
    const sql = 'INSERT INTO capivaras SET ?';
    db.query(sql, newCapivara, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
};




