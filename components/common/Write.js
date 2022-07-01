import styled from "@emotion/styled";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authenticate } from "../../public/auth";
import { Button } from "react-bootstrap";
import axios from "axios";

const isNoticeValid = async (category) => {
  //존재하는 카테고리를 사용하는지 확인
  const { data: categories } = await axios.get("/api/category");
  if (categories.map((elem) => elem.title).indexOf(category) < 0) return false;
  return true;
};

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

  const handleBrTags = (body) => {
    console.log("before change" + body)
    return body.replaceAll("<br>", "\n");
  }

  useEffect(() => {
    authenticate().then((res) => {
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
        .catch(() => {
          alert("알 수 없는 오류가 발생했습니다.");
          router.push("/");
        });
    };
    if (
      navigator.userAgent.toLowerCase().indexOf("android") >0 ||
      navigator.userAgent.toLowerCase().indexOf("ios") >0 ||
      navigator.userAgent.toLowerCase().indexOf("iphone") > 0
    ) {
      document.getElementById("titleInput").style.width = "100%"
      document.getElementById("bodyInput").style.width = "100%"
      document.getElementById("bodyInput").style.height = "400px"
    }
  }, []);

  return (
    <Layout>
      <article>
        <h2>{props.title}</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = handleBrTags(event.target.body.value);
            console.log(body);
            const writer = "Master";
            isNoticeValid(usingCategory).then((res) => {
              if (res === false) {
                alert("유효하지 않은 요청입니다.");
                return;
              }
              const notice = {
                title,
                body,
                category: usingCategory,
                writer,
              };
              if (props.props) {
                axios.put(`/api/notice/${props.props}`, notice).then(() => {
                  alert("성공적으로 업로드했습니다.");
                  router.push("/likegorilla/edit");
                });
              } else {
                axios.post("/api/notice", notice).then(() => {
                  alert("성공적으로 업로드했습니다.");
                  router.push("/likegorilla/edit");
                });
              }
            });
          }}
        >
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              style={{ width: "300px", marginBottom: "2px" }}
              id="dropdown-basic"
              size="sm"
            >
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
              style={{ width: "800px" }}
              id="titleInput"
              type="text"
              name="title"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <textarea
              style={{ width: "800px", height: "700px" }}
              id="bodyInput"
              name="body"
              placeholder="내용을 입력하세요"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </p>
          <p>
            <Button variant="dark" type="submit">
              새 글 작성
            </Button>
          </p>
        </form>
      </article>
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
