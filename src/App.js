import React from 'react';
import Header from "./components/Header";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetail from "./components/ProductDetail";
import Payment from "./components/Payment";
import {HashRouter, Route} from "react-router-dom";

class App extends React.Component {
    state = {qty: 0};
    doUpdateQtyHeader = () => {
        let lastKeranjang = JSON.parse(window.localStorage.getItem('keranjang'));
        let qty = 0;
        if (lastKeranjang) {
            qty = lastKeranjang.length;
        }
        this.setState({qty: qty});
    };

    render() {
        return (
            <div>
                <HashRouter>
                    <Header qty={this.state.qty}/>
                    <div>
                        <Route path="/" exact component={ProductCatalog}/>
                        <Route path="/productDetail" exact
                               render={(props) => <ProductDetail {...props} updateQty={this.doUpdateQtyHeader}/>}/>
                        <Route path="/payment" exact
                               render={(props) => <Payment {...props} updateQty={this.doUpdateQtyHeader}/>}/>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default App;