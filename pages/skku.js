import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/common/Navbar'
import NoticeList from "../components/common/NoticeList";
import { Stack, Container, Row, Col, Button, Form,  } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios"
import Pagination from '../components/common/Pagination';
import styled from '@emotion/styled';
import Picture from '../components/common/Picture';
import SKKU from '../public/skku.jpg';


export default function Home() {
  const [active, setActive] = useState("전체");
  const [notices, setNotices] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit; 

  const getNotice = async () => {
    const { data } = await axios.get("api/notice");
    const usingData = data
      .filter((curData) => {
        return curData.category === "성대";
      })
      .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

    setNotices(usingData);
  };

  const updateNotice = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("api/notice");
    const usingData = data
      .filter((curData) => {
        return curData.category === "중앙";
      })
      .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    setNotices(
      usingData.filter((notice) => notice.title.indexOf(searchInput) >= 0)
    );
  };

useEffect(() => {
    getNotice();
  }, []);

  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" active={active} />
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
        variant="primary"
        type="submit"
        value="제출"
        onClick={(e) => updateNotice(e)}
      >
        검색
      </Button>
    </Form>
      <Pictures>
        <Picture src={SKKU}></Picture>
      </Pictures>
      <h1>성대 멋사 공지</h1>
      <Layout>
        <Stack gap={3}>
          <div className="bg-light border">
            <div>
              {notices.slice(offset, offset + limit).map((notice) => (
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
          </div>
        </Stack>
        <label>
        페이지 당 표시할 게시물 수:&nbsp;
          <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
          <Pagination
            total={notices.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  `

const Pictures = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  `
