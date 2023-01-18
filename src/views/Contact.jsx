import { Container } from "react-bootstrap";

import React from 'react'

function Contact() {
    return (
        <div>

            <Container className="text-center">
                <h2 className="pt-5">
                    Cuentanos, ¿En que te podemos ayudar?
                </h2>
                <form>
                    <div className="m-5">
                        <p>Correo:</p>
                        <input type="text" placeholder="name@example.com "
                        className='bg-white-100 px-5 gap-3 rounded-md' style={{ width: '100%' }}
                        />
                    </div>
                    <div>
                        <p>Descripción:</p>
                    <textarea name="" id="" cols="60" rows="6"></textarea>


                    </div>
                    <div>
                    <button className="bg-danger p-1  px-4 rounded-md font-bold m-3 hover:bg-pink-500 text-white" >Enviar</button>
                    </div>


                   
                </form>
            </Container>
        </div>
    )
}

export default Contact