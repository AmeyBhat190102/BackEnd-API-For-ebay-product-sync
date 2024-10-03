import express from 'express';
import pool from './configs/db.js';
import { fetchProductsAndSave } from './controllers/productController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fetch-products', async (req, res) => {
    try {
        await fetchProductsAndSave();
        res.status(200).send('Products fetched and saved successfully.');
    } catch (error) {
        res.status(500).send('Error fetching products: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
