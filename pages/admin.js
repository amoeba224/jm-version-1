import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../components/common/AdminNav'
import { useState } from 'react';

export default function Admin() {
  const [active, setActive] = useState("전체");
  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
    </>
  )
}