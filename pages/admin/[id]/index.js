import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomNavbar from "../../../components/common/AdminNav";
import { useState, useEffect } from "react";
import { getClientBuildManifest } from "next/dist/client/route-loader";
import axios from "axios";



function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({})

  const getById = async (id) => {
    const { data } = await axios.get(`/api/notice/${id}`);
    setDetails(data)
  };

  useEffect(() => {
    getById(id);
  }, [id]);

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
              <p> {details.body}</p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Detail;