import pool from '../config/db.js';
import { fetchProductsAndSave } from '../controllers/productController.js';
import createProductTable from '../models/productModel.js';

pool.query(createProductTable, (err) => {
    if (err) {
        console.error('Error creating products table:', err);
    } else {
        console.log('Products table ready.');
        fetchProductsAndSave();
    }
});
