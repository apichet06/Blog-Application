import notfound from "../images/notfound.svg"
import { Container, Row } from "react-bootstrap"
export const Notfound = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h2 className="text-center">ไม่พบหน้าเว็บ (404 Notfound)</h2>
        <hr />
        <img src={notfound} alt="notfound" style={{ width:"85%"}}/>
      </Row>

    </Container>
  )
}


 