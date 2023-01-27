let products;

fetch('/api/find')
    .then((res) => res.json())
    .then((res) => (products = res))
    .catch((err) => console.log(err));

function getProduct(id) {
    if (products) {
        return products.find((product) => product.id === id);
    } else return undefined;
}

export { products, getProduct };
