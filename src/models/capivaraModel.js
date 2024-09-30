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

