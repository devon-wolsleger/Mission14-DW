import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/styles.css';

export function Home() {
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col>
          <h1 className="display-4 mb-4" style={{ color: '#FF6B6B' }}>
            Joel Hilton's Movie Collection
          </h1>
          <Image
            src="./images/JHH.jpeg"
            alt="Joel Hilton"
            fluid
            className="my-4"
          />
          <p className="lead" style={{ color: '#484848' }}>
            This website is dedicated to Joel, an amazing man with an even more
            amazing movie collection. Here you'll be able to see his collection
            and listen to his podcast. Enjoy!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
