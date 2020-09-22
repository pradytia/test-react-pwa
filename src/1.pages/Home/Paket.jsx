import Axios from 'axios'
import React, { Component } from 'react';
import { urlAPI} from '../../3.helper/url-api';

export default class Paket extends Component {

    state = {
        listPaket : []
    }

    componentDidMount(){
        this.getDataPaket()
    }

    getDataPaket = () => {

        Axios.get(urlAPI + '/product/get-barang-list')
        .then(res => {
            this.setState({ listPaket : res.data.value })
        })
        .catch(err =>{
            console.log(err)
        })

    }


    renderDataPaket = () => {

        return this.state.listPaket.map((val, idx) => {

            return(
                <div key={idx}>
                    <div className="col-md-3">
                        <img src={val.image} alt=""/>
                    </div>
                </div>
            )
        })

    }



    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                 {this.renderDataPaket()}   
                </div>
                <h1 className="mt-5 text-center">Ini halaman Paket</h1>
            </div>
        )
    }
}
