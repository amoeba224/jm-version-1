import { useRouter } from "next/router";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import AdminNavbar from '../../../components/common/AdminNav';
import {authenticate, getUser} from "../../../public/auth";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({});

  const getById = async (id) => {
    const { data } = await axios.get(`/api/notice/${id}`);
    await setDetails(data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/notice/${id}`);
    alert("게시글을 삭제했습니다.")
    router.push("/likegorilla/edit");
  }
  useEffect(()=>{
    authenticate().then((res)=>{
      if (res === false) {
        router.push("/login");
      }
    });
  }, []);


  useEffect(()=>{
    getById(id)
  }, [id]);

  

  const [active, setActive] = useState("전체");

  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
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
        <Link href={`/likegorilla/update/${id}`}><Button>수정</Button></Link>
        <Button onClick={()=>handleDelete(id)}>삭제</Button>
      </div>
    </>
  );
}


export default Detail;


