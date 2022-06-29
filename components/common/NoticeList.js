import PropTypes from "prop-types";
import Link from "next/link";
import { Stack, Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ko";
import styled from "@emotion/styled";

function NoticeList({ id, title, category, date, writer }) {
  const rowHeight = 50;
  const day = moment(date).format("YYYY. MM. DD");

  const handleMouseOver = (e) => {
    e.preventDefault();
    document.getElementById(id).style.backgroundColor = "orange";
    document.getElementById(id).style.boxShadow = "5px 5px";
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.boxShadow = "none";
  };

  return (
    <div>
      <Link href={`${id}`}>
        <Row
          className="mt-5"
          id={`${id}`}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          <Col>{title}</Col>
          <Col>{writer}</Col>
          <Col>{day}</Col>
        </Row>
      </Link>
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
