import {Navbar, Container} from "react-bootstrap";
import Navigation from "./Navigation";


const Header = () => {
    return(
        <div>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">CatsApp</Navbar.Brand>
                    <Navigation />
                </Container>
            </Navbar>
        </div>
    )
}

export default Header