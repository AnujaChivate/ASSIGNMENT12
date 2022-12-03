import React, { Component } from "react";

import Filters from "./Filter.js";
import ProductTable from "./ProductTable.js";
import ProductForm from "./ProductForm.js";

const PRODUCTS = {
    1: { id: 1, category: "Music", price: "$200.99", name: "Guitar" },
    2: { id: 2, category: "Electronics", price: "$1,000", name: "QLED TV" },
    3: { id: 3, category: "Fitness", price: "$4,500", name: "Treadmill" },
    4: {
        id: 4,
        category: "Furniture",
        price: "$799",
        name: "Sectional Sofabed",
    },
    5: {
        id: 5,
        category: "Transport",
        price: "$90,000",
        name: "Tesla Model X",
    },
    6: { id: 6, category: "Games", price: "$800", name: "Play Station 4" },
};

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            products: PRODUCTS,
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime();
        }

        // Add new product to the list and return new product list
        this.setState((prevState) => {
            let products = prevState?.products;
            products[product.id] = product;
            return { products };
        });
    }

    // Delete product and return updated product list
    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products;
            delete products[productId];
            return { products };
        });
    }

    render() {
        return (
            <div className="container">
                <h1>My Inventory</h1>
                <Filters onFilter={this.handleFilter} />
                <ProductTable
                    filterText={this.state.filterText}
                    products={this.state.products}
                    onDestroy={this.handleDestroy}
                />
                <ProductForm onSave={this.handleSave} />
            </div>
        );
    }
}

export default Product;
