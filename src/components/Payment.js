import React from 'react';
import {Link} from "react-router-dom";

class Payment extends React.Component {
    state = {isiKeranjang: []}
    onCancel = () => {
        window.localStorage.clear();
        this.props.updateQty();
        this.setState({isiKeranjang: []});
    };

    componentDidMount() {
        const keranjang = JSON.parse(window.localStorage.getItem('keranjang'));
        if (keranjang) {
            this.setState({isiKeranjang: keranjang});
        }
    }

    render() {
        let totalQty = 0;
        let totalPrice = 0;

        if (this.state.isiKeranjang.length > 0) {
            let listKeranjang = this.state.isiKeranjang.map((k) => {
                const {product, qty} = k;
                totalQty = totalQty + Number(qty);
                totalPrice = totalPrice + (Number(qty) * Number(product.price));
                return (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{qty}</td>
                        <td>{Number(qty) * Number(product.price)}</td>
                    </tr>
                )
            });
            return (
                <div className="container">
                    <h2>Daftar Keranjang Anda</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listKeranjang}
                        <tr>
                            <td></td>
                            <td style={{textAlign: 'right'}}>Total :</td>
                            <td>{totalQty}</td>
                            <td>{totalPrice}</td>
                        </tr>
                        <tr>
                            <td colspan="4" style={{textAlign: 'right'}}>
                                <button type="button" className="btn btn-success mr-2">Bayar</button>
                                <button type="button" className="btn btn-danger" onClick={this.onCancel}>Batal</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <h2>Isi keranjang anda kosong</h2>
                    <Link to='/'>Mulai Belanja</Link>
                </div>
            )
        }
    }
}

export default Payment;