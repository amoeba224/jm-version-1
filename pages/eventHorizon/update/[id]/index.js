import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../../../../components/common/AdminNav'
import Write from '../../../../components/common/Write'
import { useState } from 'react';
import { useRouter } from "next/router";


export default function Create() {
  const [active, setActive] = useState("전체");
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
      <Write props={id} title="공지 수정하기"></Write>
    </>
  )
}