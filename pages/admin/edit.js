/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavbar from "../../components/common/AdminNav";
import NoticeList from "../../components/common/NoticeList";
import { Stack, Form, Button, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { authenticate } from "../../public/auth";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function Home() {
  const [active, setActive] = useState("전체");
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("전체");
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const getNotice = async () => {
    const { data } = await axios.get("/api/notice");
    const usingData = data
      .filter((item)=>(item.category === category || category === "전체"))
      .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

    setNotices(usingData);
    return usingData;
  };

  const getCategories = async () => {
    const { data } = await axios.get("/api/category");
    setCategories(data);
  };

  const search = async (e) => {
    e.preventDefault();
    const data = await getNotice();
    const usingData = data.filter((item) => {
      return item.title.indexOf(searchInput) >= 0;
    });
    setNotices(usingData);
  };

  useEffect(() => {
    getNotice();
    getCategories();
    // eslint-disable-next-lingie react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNotice();
  }, [category]);

  useEffect(() => {
    authenticate().then((res) => {
      if (res === false) {
        router.push("/");
      }
    });
  }, []);

  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
      <Layout>
      <Stack gap={3}>
      
        <Dropdown className="mt-3">
          <h4>카테고리 선택</h4>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm">
            {category}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setCategory("전체")}>
              전체
            </Dropdown.Item>
            {categories.map((elem) => (
              <Dropdown.Item
                onClick={() => setCategory(elem.title)}
                key={elem._id}
              >
                {elem.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>검색창</Form.Label>
            <Form.Control
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search title"
            />
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            value="제출"
            onClick={(e) => search(e)}
          >
            검색
          </Button>
        </Form>
        <Button variant="dark" href="/admin/create">
          새 글 작성
        </Button>
        <Layout>
          <div>
            {notices.map((notice) => (
              <NoticeList
                key={notice._id}
                id={notice._id}
                title={notice.title}
                date={notice.date}
                writer={notice.writer}
                category={notice.category}
                body={notice.body}
              />
            ))}
          </div>
        </Layout>
      </Stack>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  max-width:1000px;
  margin: 0 auto;
`