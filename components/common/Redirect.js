import { useNavigate } from "react-router-dom";

export default function Redirect() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

}