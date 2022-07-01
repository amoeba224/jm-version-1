import Link from "next/link";
import { Stack, Row, Col } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ko";
import {useEffect} from "react";

function NoticeList({ id, title, category, date, writer }) {
  const day = moment(date).format("YYYY. MM. DD");
  const handleMouseOver = (e) => {
    e.preventDefault();
    document.getElementById(id).style.backgroundColor = "orange";
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    document.getElementById(id).style.backgroundColor = "white";
  };

  useEffect(() => {
    if (
      navigator.userAgent.toLowerCase().indexOf("android") >0 ||
      navigator.userAgent.toLowerCase().indexOf("ios") >0 ||
      navigator.userAgent.toLowerCase().indexOf("iphone") > 0
    ) {
      document.querySelectorAll(".noticeRow").forEach((item)=>{item.style.width = "100%"; item.style.padding="1px"})
    } else {
      document.querySelectorAll(".noticeRow").forEach((item)=>item.style.width = "760px")
    }
  }, []);

  return (
    <>
      <Link href={`detail/${id}`} style={{ textDecoration: "none" }}>
        <Stack gap={3}  style={{ marginBottom: "15px" }} >
          <Row
          id={`${id}`}
          className="noticeRow"
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
