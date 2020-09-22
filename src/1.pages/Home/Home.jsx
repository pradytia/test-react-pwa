import React, { Component } from 'react'
import CarouselFront from '../../2.component/Navbar/CarouselFront'
import ProductKopi from '../Product/ProductKopi'
import CardExample from "../../2.component/Card/CardExample";

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselFront/>
                <ProductKopi/>
                <CardExample/>
            </div>
        )
    }
}
