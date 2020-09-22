import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';

const CardPaketUsahaCafe = () => {
    return (
        <MDBRow className="justify-content-center mt-5">
            <MDBCol style={{ maxWidth: "22rem" }} className="col-md-3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://s-ecom.ottenstatic.com/original/5f029972ad466071382603.jpg"
                                  waves />
                    <MDBCardBody>
                        <MDBCardTitle>Aeropress</MDBCardTitle>
                        <MDBCardText>Go Travel Coffee Press</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol style={{ maxWidth: "22rem" }} className="col-md-3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://s-ecom.ottenstatic.com/original/5dc386ea0f3e1091284199.jpg"
                                  waves />
                    <MDBCardBody>
                        <MDBCardTitle>Flair</MDBCardTitle>
                        <MDBCardText>Espresso Maker (Signature Chrome)</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol style={{ maxWidth: "22rem" }} className="col-md-3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://s-ecom.ottenstatic.com/original/5acc6bea8ec85939947956.jpg"
                                  waves />
                    <MDBCardBody>
                        <MDBCardTitle>Rhinowares</MDBCardTitle>
                        <MDBCardText>Compact Hand Grinder w/ Adaptor</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default CardPaketUsahaCafe;