// pages/nabApi.page.js
const axios = require('axios');

class NABApiPage {
  constructor() {
    this.baseUrl = 'https://openbank.api.nab.com.au/cds-au/v1/banking';
  }

  getProducts(version) {
    const headers = {
      'x-v': version
    };
    return axios.get(`${this.baseUrl}/products`, { headers });
  }

  getProductDetails(productId, version) {
    const headers = {
      'x-v': version
    };
    return axios.get(`${this.baseUrl}/products/${productId}`, { headers });
  }
}

module.exports = new NABApiPage();