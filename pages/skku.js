import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/common/Navbar";
import NoticeList from "../components/common/NoticeList";
import { Stack, Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/common/Pagination";
import styled from "@emotion/styled";
import skkuHeader from "../public/skkuHeader.jpg";
import StyledFooter from "../components/common/Footer";
import Image from "next/image";

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
    const { data } = await axios.get("/api/notice");
    const usingData = data
      .filter((curData) => {
        return curData.category === "성대";
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
      <StyledHeader>
        <Pictures>
          <StyledImage src={skkuHeader} alt="backgroundImage"></StyledImage>
        </Pictures>
        <StyledText>
          <h1>LIKELION SKKU</h1>
        </StyledText>
      </StyledHeader>
      <Form
        className="panel mt-5 mb-5 align-middle d-flex justify-content-center
        "
      >
        <Form.Group controlId="formBasicEmail" style={{ width: "700px" }}>
          <Form.Control
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="검색어를 입력하세요"
          />
        </Form.Group>
        <Button
          type="submit"
          value="제출"
          onClick={(e) => updateNotice(e)}
          style={{
            backgroundColor: "#FF9E1B",
            border: "white",
            marginLeft: "10px",
          }}
        >
          검색
        </Button>
      </Form>
      <Layout>
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
        <br></br>
        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
        <Pagination
          total={notices.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Layout>
      <br></br>
      <StyledFooter></StyledFooter>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Pictures = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  position: relative;
`;

const StyledText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;
