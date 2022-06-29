import PropTypes from "prop-types";
import Link from "next/link";
import { Stack, Container, Row, Col } from "react-bootstrap";
import moment from 'moment';
import 'moment/locale/ko';

function NoticeList({ id, title, category, date, writer }) {
  const rowHeight = 50;
  const day = moment(date).format('YYYY. MM. DD');
  return (
    <div>
      <Stack gap={3}>
        <div className="bg-light border">
          <Container>
            <Row rowSpacing={1}>
              <Col><Link href={`${id}`}>{title}</Link></Col>
              <Col>{writer}</Col>
              <Col>{day}</Col>
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