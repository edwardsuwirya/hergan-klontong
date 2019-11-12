import React from 'react';
import ProductCatalogItem from "./ProductCatalogItem";
import './productCatalog.css';

class ProductCatalog extends React.Component {
    onShowDetail = (product) => {
        this.props.history.push({pathname: '/productDetail', state: {product: product}});
    };

    render() {
        const productCatalog = [
            {id: 'P0001', productName: 'Laipboi', category: 'Peralatan Mandi', price: '3000'},
            {id: 'P0002', productName: 'Diare Men Pesiel', category: 'Peralatan Mandi', price: '8500'},
            {id: 'P0003', productName: 'Rinsok', category: 'Peralatan Dapur', price: '5500'},
            {id: 'P0004', productName: 'Minyak Goreng', category: 'Bumbu Dapur', price: '12000'},
            {id: 'P0005', productName: 'Garam', category: 'Bumbu Dapur', price: '1200'},
            {id: 'P0006', productName: 'Gula', category: 'Bumbu Dapur', price: '7500'},
            {id: 'P0007', productName: 'Garam', category: 'Bumbu Dapur', price: '1200'},
            {id: 'P0008', productName: 'Garam', category: 'Bumbu Dapur', price: '1200'},
            {id: 'P0009', productName: 'Garam', category: 'Bumbu Dapur', price: '1200'},
            {id: 'P0010', productName: 'Garam', category: 'Bumbu Dapur', price: '1200'}
        ];
        let productCatalogList = productCatalog.map((p) => {
            return <ProductCatalogItem key={p.id} product={p} onShowDetail={this.onShowDetail}/>
        });
        return (
            <div className="catalog container">
                {productCatalogList}
            </div>
        )
    }
}

export default ProductCatalog;