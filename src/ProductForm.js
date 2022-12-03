import React, { Component } from "react";

import "./App.css";

// Reset form values
const RESET_VALUES = {
    id: "",
    category: "",
    price: "",
    name: "",
};

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES),
            errors: {},
        };

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // submit button onclick handler
    handleSave(e) {
        // Prevent default page load onSubmit
        e.preventDefault();
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES),
            errors: {},
        });
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        // Sets the newly changed value
        this.setState((prevState) => {
            prevState.product[name] = value;
            return { product: prevState.product };
        });
    }

    render() {
        return (
            <div className="w-50">
                <form>
                    <h2>Add a new product</h2>
                    <div className="form-group field-margin">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.product.name}
                        />
                    </div>
                    <div className="form-group field-margin">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            className="form-control"
                            name="category"
                            onChange={this.handleChange}
                            value={this.state.product.category}
                        />
                    </div>
                    <div className="form-group field-margin">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            className="form-control"
                            name="price"
                            onChange={this.handleChange}
                            value={this.state.product.price}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-info text-white field-margin"
                        onClick={this.handleSave}
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
