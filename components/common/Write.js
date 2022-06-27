import styled from "@emotion/styled";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Write(props){
    return (
    <article>
        <h2>{props.title}</h2>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            카테고리
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item>중앙</Dropdown.Item>
            <Dropdown.Item>성대</Dropdown.Item>
            <Dropdown.Item>스터디</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <form onSubmit={event=>{
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title, body);
        }}>
            <p><input type="text" name="title" placeholder="제목"/></p>
            <p><textarea name="body" placeholder="내용을 입력하세요"></textarea></p>
            <p><input type="submit" value="저장"></input></p>
        </form>
    </article>
    );
}
