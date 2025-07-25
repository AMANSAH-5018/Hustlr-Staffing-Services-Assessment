let products = [
    { id: 1, name: 'T-shirt', category: 'Apparel', price: 19.99 },
    { id: 2, name: 'Jeans', category: 'Apparel', price: 49.99 },
    { id: 3, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 699.99 },
    { id: 5, name: 'Coffee Maker', category: 'Home Appliances', price: 89.99 },
    { id: 6, name: 'Blender', category: 'Home Appliances', price: 59.99 },
    { id: 7, name: 'Running Shoes', category: 'Footwear', price: 79.99 },
    { id: 8, name: 'Sneakers', category: 'Footwear', price: 89.99 },
    { id: 9, name: 'Watch', category: 'Accessories', price: 199.99 },
    { id: 10, name: 'Sunglasses', category: 'Accessories', price: 149.99 },
    { id: 11, name: 'Backpack', category: 'Bags', price: 39.99 },
    { id: 12, name: 'Handbag', category: 'Bags', price: 129.99 },
    { id: 13, name: 'Headphones', category: 'Electronics', price: 89.99 },
    { id: 14, name: 'Smartwatch', category: 'Electronics', price: 249.99 },
    { id: 15, name: 'Jacket', category: 'Apparel', price: 79.99 },
    { id: 16, name: 'Skirt', category: 'Apparel', price: 39.99 },
    { id: 17, name: 'Dress', category: 'Apparel', price: 59.99 },
    { id: 18, name: 'Sandals', category: 'Footwear', price: 34.99 },
    { id: 19, name: 'Boots', category: 'Footwear', price: 89.99 },
    { id: 20, name: 'Wallet', category: 'Accessories', price: 29.99 },
    { id: 21, name: 'Belt', category: 'Accessories', price: 24.99 },
    { id: 22, name: 'Cap', category: 'Accessories', price: 19.99 },
    { id: 23, name: 'Scarf', category: 'Accessories', price: 14.99 },
    { id: 24, name: 'Gloves', category: 'Accessories', price: 9.99 },
    { id: 25, name: 'Umbrella', category: 'Accessories', price: 15.99 },
    { id: 26, name: 'Laptop Bag', category: 'Bags', price: 49.99 },
    { id: 27, name: 'Gym Bag', category: 'Bags', price: 39.99 },
    { id: 28, name: 'Travel Bag', category: 'Bags', price: 89.99 },
    { id: 29, name: 'Suitcase', category: 'Bags', price: 129.99 },
    { id: 30, name: 'Diaper Bag', category: 'Bags', price: 59.99 },
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
