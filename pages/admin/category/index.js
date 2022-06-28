import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import {authenticate} from "../../../public/auth";


const categoryButton = (handleDelete, category) => {
  return (
    <Stack gap={2} className="mt-2">
      <div className="bg-light-border">
        <Container>
          <Row>
          <Col xs={6} md={4}>
            <h3>{category.title}</h3>
          </Col>
          <Col xs={6} md={4}>
          <Button variant="secondary" onClick={()=>handleDelete(category._id)}>Delete</Button>
          </Col>
          </Row>
        </Container>
      </div>
    </Stack>
  );
};

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");



  const getCategories = async () => {
    const { data } = await axios.get("/api/category");
    setCategories(data);
  };

  const handleCreate = () => {
    const category = {
      title: input,
    };
    axios
      .post("/api/category", category)
      .then(() => alert("성공적으로 추가했습니다."))
      .then(() => getCategories())
      .catch(() =>
        alert("유효하지 않은 요청입니다. 중복된 카테고리는 생성할 수 없습니다.")
      );
  };

  const handleDelete = (id) => {
    axios.delete(`/api/category/${id}`)
    .then(()=>alert("성공적으로 삭제되었습니다."))
    .then(()=>getCategories())
    .catch((err)=>console.log(err))
  };

  

  useEffect(() => {
    authenticate().then((res)=>{
      if (res) {
        console.log("인증되었습니다.")
      } else {
        alert("인증정보가 없습니다. 홈페이지로 리다이렉트합니다.")
      }
    });
    getCategories();
  }, []);

  return (
    <>
      <div className="notices">
        {categories.map((item) => categoryButton(handleDelete,item))}
      </div>
      <div className="m-5 row justify-content-around col">
        <Form.Control
          type="text"
          rows={2}
          placeholder={"생성할 카테고리를 입력하세요.."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="secondary mt-2" onClick={handleCreate}>
          생성
        </Button>
      </div>
    </>
  );
}
