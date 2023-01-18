import { Container } from "react-bootstrap";

import React from 'react'

function Home() {
    return (
        <div>
            <Container className="text-center">
                <h1 className="p-5">
                    Biendenido a <span className="fw-bold text-danger">Happy Cake</span> 
                </h1>
                <h6 className="pb-4"> El lugar de los pasteles felices </h6>
                {/* <h1>🥮</h1> */}
                <img src="https://www.freepnglogos.com/uploads/cake-png/cake-png-transparent-cake-images-pluspng-21.png" className="widht:'100%" style={{width:'100%'}} alt="" />
                
            </Container>

        </div>
    )
}

export default Home
