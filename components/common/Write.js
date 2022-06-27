import styled from "@emotion/styled";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from "react";
import { isNoticeValid } from "../../validation/notice"
import { useRouter } from "next/router";
import axios from 'axios';

export default function Write(props){
    const [categories, setCategories] = useState([]);
    const [usingCategory, setUsingCategory] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const getCategories = async () => {
        const {data} = await axios.get("/api/category");
        setCategories(data);
    };


    useEffect(()=>{
        getCategories();
        if (props.props) {
            axios.get(`/api/notice/${props.props}`)
            .then((res)=>{
                const data = res.data
                setUsingCategory(data.category);
                setTitle(data.title);
                setBody(data.body);
            })
            .catch((err)=>console.log(err))
        }
    }, []);

    return (
    <article>
        <h2>{props.title}</h2>
        
        <form onSubmit={event=>{
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            const category = usingCategory;
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
            {usingCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {categories.map((elem)=><Dropdown.Item onClick={()=>setUsingCategory(elem.title)}key={elem._id}>{elem.title}</Dropdown.Item>)}
        </Dropdown.Menu>
        </Dropdown>
            <p><input type="text" name="title" placeholder="제목" value={title} onChange={(e)=>setTitle(e.target.value)}/></p>
            <p><textarea name="body" placeholder="내용을 입력하세요" value={body} onChange={(e)=>setBody(e.target.value)}></textarea></p>
            <p><input type="submit" value="저장"></input></p>
        </form>
    </article>
    );
}
