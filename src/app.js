const express = require('express');
const cors = require('cors'); 
const capivaraController = require('./controllers/capivaraController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/capivaras', capivaraController.getAllCapivaras);
app.post('/capivaras', capivaraController.createCapivara);
app.put('/capivaras/:id', capivaraController.updateCapivara);
app.delete('/capivaras/:id', capivaraController.deleteCapivara);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
