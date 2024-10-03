# eBay Product Sync

This Node.js project fetches product data from eBay's API and saves it into a MySQL database.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ebay-product-sync.git
    cd ebay-product-sync
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your eBay access token and MySQL database credentials:
    ```bash
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=your_database
    EBAY_ACCESS_TOKEN=your_ebay_access_token
    ```

4. Run the script to fetch and insert products:
    ```bash
    npm start
    ```

## Requirements

- Node.js
- MySQL
- eBay Developer Account (to get access tokens)

## License

This project is licensed under the MIT License.
