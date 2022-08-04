import React from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom"
import Header from "../header/Header";
import { useSelector } from "react-redux";

function DetailPage() {
    const param = useParams();
    const navigate = useNavigate();
    const { todos } = useSelector((state) => state.todos);
    const location = useLocation();
    // console.log(param)
    console.log(location)
    console.log(location.pathname.slice(-21))
    console.log(todos)
    console.log(todos.id)
    return (
        <div>
        <Header />
        <PageContainer>
            {todos.filter((todo) => todo.id.userid === location.pathname.slice(-21))
            .map((todo) => (
            <DetailBox key={todo.id.userid}>
                <div className="div1">
                    <p>ID: 옆에 떠야함  {todo.id.userid}</p>
                    <button onClick={() => {
                        navigate("/");
                    }}>이전으로</button>
                </div>
                <div className="div2">
                    <h2>옆에 제목 나와야함  {todo.title}</h2>
                    <p>옆에 내용 나와야함  {todo.body}</p>
                </div>
            </DetailBox>
            ))}
        </PageContainer>
        </div>
    )
}

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 12px;
    display: flex;
    justify-content: center;
    margin-top: 130px;
`;

const DetailBox = styled.div`
    width: 500px;
    height: 350px;
    border: 5px solid blue;
    padding: 30px;

& > .div1 {
    display: flex;
    justify-content: space-between;

    & > p {
        font-weight: 700;
    }

    & > button {
        border: 2px solid black;
        height: 40px;
        width: 120px;
        background-color: beige;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 800;
    }
    }
`;



export default DetailPage