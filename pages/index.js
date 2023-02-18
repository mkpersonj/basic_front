import { Container, Row, Col } from "react-bootstrap";
import { Bootstrap } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className="m-5">
          git 테스트 <Bootstrap />
        </Col>
      </Row>
    </Container>
  );
}
