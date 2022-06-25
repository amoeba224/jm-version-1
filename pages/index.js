import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/common/Navbar'
import NoticeList from "../components/common/NoticeList";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const mockData = [
  {
    id: 1,
    title: "제목1",
    body: "내용1",
    writer: "문태주",
    date: "2022-01-01",
    category: "skku",
  },
  {
    id: 2,
    title: "제목2",
    body: "내용2",
    writer: "문태주",
    date: "2022-01-01",
    category: "center",
  },
  {
    id: 3,
    title: "제목3",
    body: "내용3",
    writer: "문태주",
    date: "2022-01-01",
    category: "study",
  },
];

export default function Home() {
  const [active, setActive] = useState("전체");
  const [notices, setNotices] = useState(mockData);
  const [category, setCategory] = useState("center");

  const getNotice = async () => {
    setNotices(
      mockData.filter((item) => {
        if (category === "center") return true;
        if (category === item.category) return true;

        return false;
      })
    );
  };
  useEffect(() => {
    getNotice();
  }, [category]);
  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" active={active} />
      <Stack gap={3}>
        <div className="bg-light border">
          <div>
            {notices.map((notice) => (
              <NoticeList
                key={notice.id}
                id={notice.id}
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
    </>
  );
}