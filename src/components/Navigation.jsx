import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="dark" style={{display:"flex"}}>
                <Container className="justify-content-start">

                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/contact" className="text-white ms-3 text-decoration-none">
                        Contact
                    </Link>

                </Container>
                <Container  className = "my-auto"
                style={{alignItems:"flex-end"}}
                >
                    <Navbar.Brand className="text-center flex-end">Happy Cake 🍰 </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}



export default Navigation

