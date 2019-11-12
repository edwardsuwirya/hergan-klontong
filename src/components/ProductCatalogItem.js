import React from 'react';
import faker from 'faker';
import './productCatalogItem.css';

class ProductCatalogItem extends React.Component {
    doShowDetail = (product) => {
        this.props.onShowDetail(product);
    };

    render() {
        return (
            <div className='catalogItem container'>
                <div className="card" style={{height: '15rem'}} onClick={() => {
                    this.doShowDetail(this.props.product)
                }}>
                    <img src={faker.image.image()} className="card-img-top" alt="product item image"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.productName}</h5>
                        <p className="card-text">{this.props.product.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCatalogItem;