import React from 'react';
import faker from 'faker';
import './productDetail.css';

class ProductDetail extends React.Component {
    state = {qty: 0, img: null, desc: ''}
    onBuy = (product) => {
        let lastKeranjang = JSON.parse(window.localStorage.getItem('keranjang'));
        const qty = this.state.qty;
        if (lastKeranjang) {
            window.localStorage.setItem('keranjang', JSON.stringify([...lastKeranjang, {product: product, qty: qty}]));
        } else {
            lastKeranjang = [{product: product, qty: qty}];
            window.localStorage.setItem('keranjang', JSON.stringify(lastKeranjang));
        }
        this.props.updateQty();
        this.props.history.push({pathname: '/'});
    };

    componentDidMount() {
        this.setState({img: faker.image.image(), desc: faker.lorem.paragraph()});
    }

    onInputQtyChange = (event) => {
        this.setState({qty: event.target.value});
    };

    onRenderProductInfo = (product) => {
        if (product) {
            return (
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.state.img} className="card-img" alt="product item image"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">Harga : {product.price}</p>
                                <p className="card-text">{this.state.desc}</p>
                                <p className="card-text">
                                    <small className="text-muted">Kategori : {product.category}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="d-flex justify-content-end">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="qty" value={this.state.qty}
                                       onChange={this.onInputQtyChange}/>
                            </div>
                            <div className="form-group">
                                <button type="button" className="form-control btn btn-outline-primary"
                                        onClick={() => {
                                            this.onBuy(product)
                                        }}>Beli
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    render() {
        console.log(this.props)
        let product;
        if (!this.props.history.location.state) {
            this.props.history.push({pathname: '/'});
        } else {
            product = this.props.history.location.state.product;
        }
        return (
            <div className='container'>
                {this.onRenderProductInfo(product)}
            </div>
        )
    }
}

export default ProductDetail;