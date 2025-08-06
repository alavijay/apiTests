// tests/users.test.js
const axios = require('axios');
let productId;

describe('verify OB APIs', () => {
  it('should fetch a list of NAB products', async () => {
    try {
      // Make a GET request to a public API

      const headers = {
        'x-v': 3
      };

      const response = await axios.get('https://openbank.api.nab.com.au/cds-au/v1/banking/products', { headers });
      
      expect(response.status).toBe(200);       // Assert the status code
      expect(response.data).toHaveProperty('data');       // Assert that the 'data' property exists within the response data
      expect(response.data.data).toHaveProperty('products');       // Assert that the 'products' property exists within the nested 'data' object
      const products = response.data.data.products;       // Get the products array from the correct nested path
      expect(Array.isArray(products)).toBe(true);       // Assert that the products is an array
      expect(products.length).toBeGreaterThan(0);       // Assert that the products array is not empty
      expect(products[0]).toHaveProperty('productId');       // Assert that the first product has the expected properties
      expect(products[0]).toHaveProperty('name');       // Assert that the first product has the expected properties
      productId = products[0].productId;       // Store the productId for later use

    } catch (error) {
      // If the request fails, the test should fail
      console.error(error);
      throw error;
    }
  });
    it('should fetch a deatils of the first product from above test', async () => {
        try {
        // Make a GET request to a public API using the productId from the previous test
        const headers = {
            'x-v': 5
        };

        const response = await axios.get('https://openbank.api.nab.com.au/cds-au/v1/banking/products/'+productId, { headers });
        
        expect(response.status).toBe(200);       // Assert the status code
        expect(response.data).toHaveProperty('data');       // Assert that the 'data' property exists within the response data
        expect(response.data.data).toHaveProperty('productId');       // Assert that the first product has the expected properties
        expect(response.data.data).toHaveProperty('name');       // Assert that the first product has the expected properties
        

        } catch (error) {
        // If the request fails, the test should fail
        console.error(error);
        throw error;
        }
    });


});