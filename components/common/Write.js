import styled from "@emotion/styled";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {authenticate} from "../../public/auth";
import axios from "axios";

const isNoticeValid = async (writer, category) => {
    //존재하는 유저를 사용하는지 확인
    const {data:users} = await axios.get("/api/user");
    if (users.map((user)=>user.name).indexOf(writer) < 0) return false;
    //존재하는 카테고리를 사용하는지 확인
    const {data:categories} = await axios.get("/api/category");
    if (categories.map((elem)=>elem.title).indexOf(category)<0) return false;
    return true;
}

export default function Write(props) {
  const [categories, setCategories] = useState([]);
  const [usingCategory, setUsingCategory] = useState("카테고리");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const getCategories = async () => {
    const { data } = await axios.get("/api/category");
    setCategories(data);
  };

  useEffect(() => {
    authenticate().then((res)=>{
      if (!res) {
        router.push("/");
      }
    });
    getCategories();
    if (props.props) {
      axios
        .get(`/api/notice/${props.props}`)
        .then((res) => {
          const data = res.data;
          setUsingCategory(data.category);
          setTitle(data.title);
          setBody(data.body);
        })
        .catch((err) => console.log(err));
    };
  }, []);

  return (
    <article>
      <h2>{props.title}</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          const writer = "문태주";
          isNoticeValid(writer, usingCategory)
          .then((res)=>{
            if (res === false){
              alert("유효하지 않은 요청입니다.")
              return;
            }
            const notice = {
              title,
              body,
              category:usingCategory,
              writer,
            };
            axios.post("/api/notice", notice).then(()=>{
              alert("성공적으로 업로드했습니다.");
              router.push("/admin/edit");
            }).catch((err)=>console.log(err))
          })
        }}
      >
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            {usingCategory}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((elem) => (
              <Dropdown.Item
                onClick={() => setUsingCategory(elem.title)}
                key={elem._id}
              >
                {elem.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <p>
          <input
            type="text"
            name="title"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="내용을 입력하세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="저장"></input>
        </p>
      </form>
    </article>
  );
}
