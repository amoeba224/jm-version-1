import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import CustomNavbar from "../../../components/common/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import StyledFooter from "/components/common/Footer";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState({});

  const getById = async (id) => {
    const { data } = await axios.get(`/api/notice/${id}`);
    await setDetails(data);
  };

  useEffect(() => {
    getById(id);
  }, [id]);

  useEffect(()=>{
  }, [details])

  useEffect(() => {
    if (
      navigator.userAgent.toLowerCase().indexOf("android") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("ios") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("iphone") > 0
    ) {
      document.querySelectorAll(".cardClass").forEach((item) => {
        item.style.width = "100%";
        item.style.marginTop = "30px";
        item.style.marginLeft = "5px";
        item.style.marginRight = "5px";
      });
    };
  }, []);

  const [active, setActive] = useState("전체");
  const day = moment({}).format("YYYY. MM. DD");

  return (
    <StyledBody>
      <CustomNavbar name="Likelion SKKU Notice" active={active} />
      <CardContainer>
        <Card
          border="dark"
          className="cardClass"
          id="cardBox"
          style={{ width: "800px", height: "auto", marginTop: "100px" }}
        >
          <Card.Header className="cardClass" style={{ width: "800px" }}>
            <h1 style={{ padding: "10px" }}>{details.title}</h1>
            <SmallHeader>
              {details.writer} &nbsp;&nbsp;&nbsp;&nbsp; {day}&nbsp;
            </SmallHeader>
          </Card.Header>

          <Card.Body style={{ padding: "30px" }}>
            <blockquote className="blockquote mb-0">
              <p>
                {details.body?.split("\n").map((line, lineNum) => {
                  return (
                    <span key={lineNum}>
                      {line}
                    <br />
                    </span>
                  );
                })}
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </CardContainer>
      <StyledFooter />
    </StyledBody>
  );
}

const SmallHeader = styled.div`
  text-align: right;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;
`

const StyledBody = styled.div`
  display:flex; 
  flex-direction:column; 
  height: 100vh;
`

export default Detail;
