import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../../components/common/AdminNav'
import Write from '../../components/common/Write'
import { useState } from 'react';

export default function Create() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
      <Write title="새 공지 작성"></Write>
    </>
  )
}