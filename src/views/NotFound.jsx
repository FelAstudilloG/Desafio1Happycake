import { Container } from "react-bootstrap";

import React from 'react'

function NotFound() {
    return (
        <div>
            <Container style={{ backgroundImage: `url('https://w7.pngwing.com/pngs/316/307/png-transparent-illustration-of-cakes-and-cupcakes-muffin-dessert-cake-candy-cake-background-food-baking-heart-thumbnail.png')`, width: '100%', height: '40em', objectFit: 'cover', objectPosition: 'center', alignItems: 'center' }} className="text-center m-3 ">
                <h1 style={{ height: '100%', alignItems: 'center', padding: '7em' }}>

                    <span className="fw-bold center" >Not Found</span>
                    😞

                </h1>


            




            </Container>
        </div>
    )
}

export default NotFound