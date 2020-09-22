import Axios from 'axios'
import React, { Component } from 'react';
import { urlAPI} from '../../3.helper/url-api';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBRow } from 'mdbreact';

export default class ProductKopi extends Component {

    state = {
        listKopi : []
    }


    componentDidMount(){
        this.getListKopi()
    }

    getListKopi = () => {
        Axios.get(urlAPI + '/product/get-product-depan-list')
        .then(res => {
            this.setState({ listKopi : res.data.value });
        })
        .catch(err =>{
            console.log(err);
        })
    }

    renderListKopi = () => {
        return this.state.listKopi.map((val,idx) => {
            return (
                <>
                    <MDBCol key={idx} style={{ maxWidth: "22rem" }} className="col-md-3">
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src={val.imagePath}
                            waves />
                            <MDBCardBody>
                            <MDBCardTitle>{val.productName}</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </>
            )
        })
    }


    render() {
        return (
            <div>
                <div className="container mt-5">
                    <MDBRow className="justify-content-center">
                        {this.renderListKopi()}
                    </MDBRow>
                </div>
            </div>
        )
    }
}
