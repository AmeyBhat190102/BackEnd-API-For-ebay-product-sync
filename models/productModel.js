const createProductTable = `
  CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    price DECIMAL(10, 2)
  );
`;

export default createProductTable;
