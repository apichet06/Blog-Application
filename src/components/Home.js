import home from '../images/home.svg'
import { Container, Row } from "react-bootstrap"
export const Home = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <h2 className="text-center">หน้าแรก</h2>
                <hr />
                <img src={home} alt="home" style={{ width: "100%" }} />
            </Row>

        </Container>
    )
}

