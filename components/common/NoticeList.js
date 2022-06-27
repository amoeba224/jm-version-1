import PropTypes from "prop-types";
import Link from "next/link";
import { Stack, Container, Row, Col } from "react-bootstrap";
function NoticeList({ id, title, category, date, writer }) {
  return (
    <div>
      <Stack gap={3}>
        <div className="bg-light border">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                {category}
              </Col>
              <Col xs={12} md={8}>
                <Link href={`${id}`}>
                  <a>{title}</a>
                </Link>
              </Col>
            </Row>
            <Row>
              <Row md={4}>
                <Col>{id}</Col>
                <Col xs={6}>{writer}</Col>
                <Col>{date}</Col>
              </Row>
            </Row>
          </Container>
        </div>
      </Stack>
    </div>
  );
}

NoticeList.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NoticeList;