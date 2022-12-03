import React, { Component } from "react";

import ProductRow from "./ProductRow.js";

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    handleDestroy(id) {
        this.props.onDestroy(id);
    }
    render() {
        const { filterText } = this.props;
        const { products } = this.props;

        const rows = [];
        Object.values(products).forEach((product) => {
            if (
                product.name.toLowerCase().indexOf(filterText.toLowerCase()) ===
                -1
            ) {
                return;
            }

            rows.push(
                <ProductRow
                    product={product}
                    key={product.id}
                    onDestroy={this.handleDestroy}
                />
            );
        });

        return (
            <table className="mt-4 table table-striped table-responsive">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ProductTable;
