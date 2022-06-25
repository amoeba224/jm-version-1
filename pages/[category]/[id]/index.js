import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomNavbar from "../../../components/common/Navbar";
import { useState, useEffect } from "react";
import { getClientBuildManifest } from "next/dist/client/route-loader";

const mockData = [
  {
    id: 1,
    title: "제목1",
    body: "내용1",
    writer: "문태주",
    date: "2022-01-01",
    category: "skku",
  },
  {
    id: 2,
    title: "제목2",
    body: "내용2",
    writer: "문태주",
    date: "2022-01-01",
    category: "center",
  },
  {
    id: 3,
    title: "제목3",
    body: "내용3",
    writer: "문태주",
    date: "2022-01-01",
    category: "study",
  },
];
function getById(id) {
  const array = mockData.filter((x) => x.id == id);
  return null;
}

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const details = mockData[id - 1];

  const [active, setActive] = useState("전체");

  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" active={active} />
      <div className="detail">
        <Container>
          <Row md={4}>
            <Col>{details.id}</Col>
            <Col xs={6}>{details.writer}</Col>
            <Col>{details.date}</Col>
          </Row>
        </Container>

        <Card>
          <Card.Header>{details.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {details.body}
               </p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Detail;