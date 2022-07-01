import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../../../../components/common/AdminNav'
import Write from '../../../../components/common/Write'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import {authenticate} from "../../../../public/auth"


export default function Create() {
  const [active, setActive] = useState("전체");
  const router = useRouter();
  const { id } = router.query;

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
      <Write props={id} title="공지 수정하기"></Write>
    </>
  )
}