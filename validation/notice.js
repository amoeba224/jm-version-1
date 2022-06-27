import axios from "axios";

export const isNoticeValid = (writer, category) => {
    //현재 유저가 authenticated되어있는지 확인

    //실제 있는 유저를 writer로 쓰는지 확인
    let isUserValid = false;
    axios.get("/api/user")
    .then((res)=>res.data.forEach((user)=>{
        console.log(user.name);
        console.log(writer)
        if (user.name === writer) {
            console.log("성공")
            isUserValid = true;
        }
    }));
    if (isUserValid === false) {
        return false;
    } else {
        return true;
    }
    //실제 있는 카테고리를 사용하는지 확인
};