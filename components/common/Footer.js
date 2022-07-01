import styled from "@emotion/styled";
import { useEffect } from "react";

export default function Footer(props) {
  useEffect(() => {
    if (
      navigator.userAgent.toLowerCase().indexOf("android") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("ios") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("iphone") > 0 ||
      props.isNoticeLong === true
    ) {
      document.getElementById("styledFooter").style.position = "relative"
    };
  }, [props]);

  return (
    <StyledFooter id="styledFooter">
      <p>
        &copy; Software Support Committee in SKKU 2022. All Rights Reserved.
      </p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background-color: #000000;
  padding: 35px;
  margin-top: 14px;
  height: 100px;
  width: 100%;
  color: gray;
  text-align: center;
  margin-top:auto; 
`;