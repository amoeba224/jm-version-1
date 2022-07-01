import styled from "@emotion/styled";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    if (
      navigator.userAgent.toLowerCase().indexOf("android") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("ios") > 0
    ) {
      document.getElementById("styledFooter").style.position = "relative"
    };
  }, []);

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
  bottom: 0;
  position: absolute;
`;