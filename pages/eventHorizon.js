import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../components/common/AdminNav'
import { useState, useEffect } from 'react';
import {useRouter} from "next/router";
import {authenticate} from "../public/auth";

export default function Admin() {
  const [active, setActive] = useState("전체");
  const router = useRouter();

  useEffect(()=>{
    authenticate().then((res)=>{
      if (res === false) {
        router.push("/");
      };
    });
  });

  return (
    <>
      <AdminNavbar name="Likelion SKKU Notice Admin" active={active} />
    </>
  )
}