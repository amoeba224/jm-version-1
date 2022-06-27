/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/common/Navbar'
import NoticeList from "../components/common/NoticeList";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios"


export default function Home() {
  const [active, setActive] = useState("전체");
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("center");

  const getNotice = async () => {
    const {data} = await axios.get("api/notice")
    const usingData = data.filter((item) => {
      if (category === "center") return true;
      if (category === item.category) return true;

      return false;
    })  
    setNotices(usingData);
  };
  useEffect(() => {
    getNotice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" active={active} />
      <Stack gap={3}>
        <div className="bg-light border">
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
        </div>
      </Stack>
    </>
  );
}