import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import CustomNavbar from "../../components/common/Navbar";
import { useState, useEffect } from "react";
import { getClientBuildManifest } from "next/dist/client/route-loader";
import axios from "axios";
import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import StyledFooter from "/components/common/Footer";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({});

  const getById = async (id) => {
    const { data } = await axios.get(`api/notice/${id}`);
    await setDetails(data);
  };

  useEffect(() => {
    getById(id);
  }, [id]);

  const [active, setActive] = useState("전체");
  const day = moment({}).format("YYYY. MM. DD");

  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" active={active} />
      <div className="d-flex justify-content-center">
        <Card
          border="dark"
          style={{ width: "800px", height: "auto", marginTop: "100px" }}
        >
          <Card.Header style={{ width: "800px" }}>
            <h1 style={{ padding: "10px" }}>{details.title}</h1>
            <SmallHeader>
              {details.writer} &nbsp;&nbsp;&nbsp;&nbsp; {day}&nbsp;
            </SmallHeader>
          </Card.Header>

          <Card.Body style={{ padding: "30px" }}>
            <blockquote className="blockquote mb-0">
              <p> {details.body}</p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
      <StyledFooter></StyledFooter>
    </>
  );
}

const Body = styled.div``;

const SmallHeader = styled.div`
  text-align: right;
`;

export default Detail;
