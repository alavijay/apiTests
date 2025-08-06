// tests/users.test.js
const nabApi = require('../pages/nabApi.page');
let productId;

describe('verify OB APIs', () => {
  it('should fetch a list of NAB products', async () => {
    try {
      const response = await nabApi.getProducts(3);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('products');
      const products = response.data.data.products;
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
      expect(products[0]).toHaveProperty('productId');
      expect(products[0]).toHaveProperty('name');
      productId = products[0].productId;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it('should fetch details of the first product from the test above', async () => {
    try {
      const response = await nabApi.getProductDetails(productId, 5);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('productId');
      expect(response.data.data).toHaveProperty('name');
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});