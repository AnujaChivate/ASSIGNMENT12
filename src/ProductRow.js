import React, { Component } from "react";

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    render() {
        const name = this.props.product.name;
        const category = this.props.product.category;
        const price = this.props.product.price;
        return (
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-info text-white"
                        onClick={this.destroy}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
