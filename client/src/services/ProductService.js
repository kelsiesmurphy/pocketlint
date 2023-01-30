const baseURL = 'http://localhost:9000/api/products';

const ProductService = {

    // Gets all products from database
    getProducts() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    // Get single product by id
    getSingleProduct(id) {
        return fetch(baseURL + "/" + id)
        .then(res => res.json());
    },

    // Adding a product to the database
    addProduct(updatedProduct) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(updatedProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    // Updating a product
    updateProduct(product) {
        return fetch(baseURL + "/" +  product._id, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    // Delete a product
    deleteProduct(id) {
        return fetch(baseURL + "/" + id, {
            method: 'DELETE'
        });
    }
};

export default ProductService;