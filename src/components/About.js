import { Container, Row } from "react-bootstrap"
import about from "../images/about.svg"
export const About = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <h3 className="text-center">About</h3>
                <hr/> 
                <img src={about} alt="about"  className="img-fluid"  style={{ width:"75%"}} />
            </Row>

        </Container>
    )
}
