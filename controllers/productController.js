import apiClient from '../utils/apiClient.js';
import pool from '../configs/db.js';

const fetchProductsAndSave = async () => {
    try {
        const response = await apiClient.get('/sell/inventory/v1/inventory_item');
        const products = response.data.inventoryItems;

        products.forEach(product => {
            const sql = 'INSERT INTO products (id, title, price) VALUES (?, ?, ?)';
            const values = [product.sku, product.product.title, product.product.price.value];

            pool.query(sql, values, (err) => {
                if (err) {
                    console.error('Error inserting product into database:', err);
                } else {
                    console.log('Product inserted:', product.product.title);
                }
            });
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export { fetchProductsAndSave };
