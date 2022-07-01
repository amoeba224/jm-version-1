import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../../components/common/AdminNav'
import Write from '../../components/common/Write'
import { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { authenticate } from "../../public/auth";

export default function Create(props) {
  const [active, setActive] = useState("전체");
  const router = useRouter();

  useEffect(() => {
    authenticate().then((res) => {
      if (res === false) {
        router.push("/login");
      }
    });
  }, []);

  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
      <Layout>
        <Write title="새 공지 작성" mode="create"></Write>
      </Layout>
    </>
  )
};

const Layout = styled.div`
  max-width:1000px;
  margin: 0 auto;
`