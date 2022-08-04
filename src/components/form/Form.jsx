import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import { nanoid } from "nanoid";

function Form(props){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const userid = nanoid();

// console.log(userid)
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (title === "") return;

        dispatch (
            addTodo ({
                id: {userid},
                title,
                body,
                isDone: false,
            })
        );
        setTitle('');
        setBody('');
    };
    
    return(
        <Container>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>제목</label> 
                    <input 
                    type="text" 
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }} /> 
                    
                    <label>내용</label> 
                    <input 
                    type="text" 
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }} /> 
                </div>
                <Button>추가하기</Button>
            </form>
        </Container>
    )
}


const Button = styled.button`
    border: 2px solid #808080;
    border-radius: 10px;
    color: white;
    background-color: #808080;
    height: 40px;
    width: 130px;
    font-weight: 900;
    cursor: pointer;
`;


const Container = styled.div`
  background-color: #ddd; 
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  
  & > form {
      display: flex;
      justify-content: space-between;
  }

  & > div {
    display: flex;

    & > input{
        margin-left: 20px;
    }
    & > label {
        margin-left: 20px;
    }
  }

`;

export default Form;