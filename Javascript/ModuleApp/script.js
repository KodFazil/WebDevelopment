// Storage Module


// Product Module

const ProductController = (function() {

    const Product = function(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const Data = {
        products : StorageController.getProducts,
        selectedProduct : null,
        totalPrice : 0
    }

    return {

        getProducts : function () {
            return Data.products;
        },
        getData : function () {
            return Data;
        },
        getProductById : function (id) {
            let product;
            Data.products.forEach(element => {
                if (element.id == id) {
                    product = element;
                }
            });
            return product;
        },
        setCurrentProduct : function (product) {
            Data.selectedProduct = product;
        },
        getCurrentProduct : function () {
            return Data.selectedProduct;
        },
        addProduct : function (name, price) {
            var id;
            if (Data.products.length > 0) {
                id = Data.products[Data.products.length - 1].id + 1;
            }
            else {
                id = 0;
            }
            const newProduct = new Product(id, name, parseInt(price));
            Data.products.push(newProduct);
            return newProduct;
        },
        updateProduct : function (name, price) {
            let product;
            Data.products.forEach(element => {
                if (element.id == Data.selectedProduct.id) {
                    element.name = name;
                    element.price = price;
                    product = element;
                }
            });
            return product;
        },
        deleteProduct : function (product) {
            Data.products.forEach(element, index => {
                if (element.id == product.id) {
                    Data.products.splice(index, 1);
                }
            });
        },
        getTotalPrice : function () {
            var total;
            Data.products.forEach(element => {
                total += element.price;
            }); 
            Data.totalPrice = total;
            return total;
        }

    }

})();


// UI Module


// App Module