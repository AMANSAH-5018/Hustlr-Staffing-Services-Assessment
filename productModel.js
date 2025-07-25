let products = [
    { id: 1, name: 'T-shirt', category: 'Apparel', price: 19.99 },
    { id: 2, name: 'Jeans', category: 'Apparel', price: 49.99 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 999.99 }
];

const getAllProducts = () => products;

const getProductById = (id) => products.find(p => p.id === id);

const getProductsByCategory = (category) =>
    products.filter(p => p.category.toLowerCase() === category.toLowerCase());

const addProduct = (product) => {
    const newProduct = {
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...product,
    };
    products.push(newProduct);
    return newProduct;
};

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    addProduct,
};
