import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../../components/common/AdminNav'
import Write from '../../components/common/Write'
import { useState } from 'react';

export default function Create(props) {
  const [active, setActive] = useState("전체");
  console.log(props)
  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
      <Write title="새 공지 작성" mode="create"></Write>
    </>
  )
}