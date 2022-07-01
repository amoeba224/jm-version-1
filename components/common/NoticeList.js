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
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    document.getElementById(id).style.backgroundColor = "white";
  };

  return (
    <>
      <Link href={`detail/${id}`} style={{ textDecoration: "none" }}>
        <Stack gap={3}  style={{ marginBottom: "15px" }} >
          <Row
          id={`${id}`}
          onMouseOver={(e)=>handleMouseOver(e)} onMouseOut={(e)=>handleMouseOut(e)}
            rowSpacing={2}
            style={{
              padding: "20px",
              width: "760px",
              backgroundColor: "white",
              boxShadow: "5px 5px 9px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Col style={{ flex: 4 }}>{title} </Col>
            <Col style={{ flex: 1 }}>{writer}</Col>
            <Col style={{ flex: 1 }}>{day}</Col>
          </Row>
        </Stack>
      </Link>
    </>
  );
};

export default NoticeList;
