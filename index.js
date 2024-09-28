const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Contoh data teh
const teas = [
    { id: 1, name: 'Green Tea', price: '12000' },
    { id: 2, name: 'Black Tea', price: '10000' },
    { id: 3, name: 'Herbal Tea', price: '13000' },
];

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk mendapatkan semua teh
app.get('/teas', (req, res) => {
    res.json(teas);
});

// Endpoint untuk mendapatkan teh berdasarkan ID
app.get('/teas/:id', (req, res) => {
    const tea = teas.find(t => t.id === parseInt(req.params.id));
    if (!tea) return res.status(404).send('Tea not found');
    res.json(tea);
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
