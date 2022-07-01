import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Stack, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { authenticate } from "../../../public/auth";
import { useRouter } from "next/router";
import AdminNavbar from "../../../components/common/AdminNav";

const categoryButton = (handleDelete, category) => {
  return (
    <Stack gap={2} className="ml-5 mt-2">
      <div className="bg-light-border">
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <h3>{category.title}</h3>
            </Col>
            <Col xs={6} md={6}>
              <Button variant="dark" onClick={() => handleDelete(category._id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Stack>
  );
};

export default function Category() {
  const [active, setActive] = useState("전체");
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();

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
        alert("유효하지 않은 요청입니다.")
      );
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/category/${id}`)
      .then(() => alert("성공적으로 삭제되었습니다."))
      .then(() => getCategories())
      .catch((err) => alert("작업을 실행하지 못했습니다."));
  };

  useEffect(() => {
    authenticate().then((res) => {
      if (res === false) {
        router.push("/login");
      }
    });
    getCategories();
  }, []);

  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
      <div className="mt-5">
        <div className="notices m-auto">
          {categories.map((item) => categoryButton(handleDelete, item))}
        </div>
        <div className="m-auto mt-5 row justify-content-around col w-50">
          <h4>여기서 카테고리를 삭제하면 영구삭제됩니다. 신중히 선택하세요.</h4>
          <Form.Control
            type="text"
            rows={2}
            placeholder={"생성할 카테고리를 입력하세요.."}
            value={input}
            width
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="dark mt-2" onClick={handleCreate}>
            생성
          </Button>
        </div>
      </div>
    </>
  );
}
