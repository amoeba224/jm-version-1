import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { authenticate } from "../public/auth";
import CustomNavbar from "../components/common/Navbar";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    authenticate().then((res) => {
      if (res === true) {
        router.push("/");
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      user_id: id,
      password,
    };
    axios
      .post("/api/user/login", body)
      .then((response) => {
        if (response.data.loginSuccess === true) {
          alert("로그인 성공!!");
          router.push("/");
        } else {
          alert(response.data.message); //에러 정보를 alert해줌
        }
      })
      .catch(() => alert("인증 정보가 유효하지 않습니다."));
  };

  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" />
      <Container className="panel mt-5 align-middle d-flex justify-content-center">
      
        <Form className="w-50 h-50">
          <Form.Group
            as={Row}
            className="mb-3 align-items-center"
            controlId="formPlaintextPassword"
          >
            <Col xs>
              <Form.Control
                type="text"
                placeholder="사용자 ID를 입력하세요..."
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <br />

          <div className="d-grid gap-1">
            <Button variant="dark" type="submit" onClick={handleSubmit}>
              로그인
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
export default LoginPage;
