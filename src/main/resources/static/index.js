const getProducts = () => {
    return fetch("/api/products")
        .then(res => res.json));
}

const getProducts = async () => {
    const response = await fetch("api/products");
    const products = await response.json();

    return products
}