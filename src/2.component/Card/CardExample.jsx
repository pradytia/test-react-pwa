import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const CardExample = () => {
    return (
        <MDBRow className="justify-content-center">
            <MDBCol style={{ maxWidth: "22rem" }} className="col-md-3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://s-ecom.ottenstatic.com/original/5edde9f3b31aa055713606.jpg"
                                  waves />
                    <MDBCardBody>
                        <MDBCardTitle>Kopi Sidikalang</MDBCardTitle>
                        <MDBCardText>Sidikalang 200g Kopi Arabica</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol style={{ maxWidth: "22rem" }} className="col-md-3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://s-ecom.ottenstatic.com/original/5eddc9e863747968007551.jpg"
                                  waves />
                    <MDBCardBody>
                        <MDBCardTitle>Kopi Garut</MDBCardTitle>
                        <MDBCardText>Garut 200g Kopi Arabica</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol style={{ maxWidth: "22rem" }} className="col-md-3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://s-ecom.ottenstatic.com/original/5edded3480009983133083.jpg"
                                  waves />
                    <MDBCardBody>
                        <MDBCardTitle>Kopi Solok</MDBCardTitle>
                        <MDBCardText>Solok Selatan 200g Kopi Arabica</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default CardExample;