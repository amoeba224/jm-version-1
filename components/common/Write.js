import styled from "@emotion/styled";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from "react";
import { isNoticeValid } from "../../validation/notice"
import { useRouter } from "next/router";
import axios from 'axios';

export default function Write(props){
    const [categories, setCategories] = useState([]);
    const [usingCategory, setUsingCategory] = useState({"title":"선택하세요"});

    const getCategories = async () => {
        const {data} = await axios.get("/api/category");
        setCategories(data);
    };


    useEffect(()=>{
        getCategories();
        if (props.props) {
            console.log(props.props)
        }
    });

    return (
    <article>
        <h2>{props.title}</h2>
        
        <form onSubmit={event=>{
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            const category = usingCategory.title;
            const writer = '문태주';
            const notice = {
                title:title,
                body:body,
                category:category,
                writer,
                }
                axios.post(`/api/notice`, notice)
                .then(()=>alert("성공적으로 추가되었습니다."))
                .catch((err)=>console.log(err));
            //redirection
        }}>
            <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            {usingCategory.title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {categories.map((elem)=><Dropdown.Item onClick={()=>setUsingCategory(elem)}key={elem._id}>{elem.title}</Dropdown.Item>)}
        </Dropdown.Menu>
        </Dropdown>
            <p><input type="text" name="title" placeholder="제목"/></p>
            <p><textarea name="body" placeholder="내용을 입력하세요"></textarea></p>
            <p><input type="submit" value="저장"></input></p>
        </form>
    </article>
    );
}
