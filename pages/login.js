import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomNavbar from "../components/common/Navbar";
import Admin from "./admin";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";

function LoginPage() {
  const { data: session } = useSession();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  if (session) {
    return (
      <>
        <Admin></Admin>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      user_id: id,
      password,
    };
    axios.post('/api/user/login', body)
    .then((response)=>{
        if (response.data.loginSuccess === true){
            alert("로그인 성공!!");
            router.push("/");
        } else {
            alert(response.data.message); //에러 정보를 alert해줌
        };
    })
    .catch(()=>alert("인증 정보가 유효하지 않습니다."));
  };

  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="사용자 ID를 입력하세요..."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          로그인
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
