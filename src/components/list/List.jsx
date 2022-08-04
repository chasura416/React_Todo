import React from "react";
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { deleteTodo, toggleTodo } from "../../redux/modules/todos";

function List() {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    return (
        <>
        <TodoBoxContainer>
        <h2>Working.............🔥</h2>
            {todos.filter((todo) => todo.isDone === false)
            .map((todo) => (
                <TodoBox key={todo.id}>
                    <Link to={`/DetailPage/${todo.id.userid}`}>상세보기</Link>
                    <h2>{todo.title}</h2>
                    <div>{todo.body}</div>
                    <footer>
                        <button className="btn1" onClick={() => {
                            dispatch(deleteTodo(todo.id));
                        }}>삭제하기!!!!</button>
                        <button className="btn2" onClick={() => {
                            dispatch(toggleTodo(todo))
                        }}>완료!!!!!</button>
                    </footer>
                </TodoBox>
            ))}
        </TodoBoxContainer>

        <TodoBoxContainer>
        <h2>Done!!!!!!!!!!🎉</h2>
            {todos.filter((todo) => todo.isDone === true)
            .map((todo) => (
                <TodoBox key={todo.id}>
                    <Link to={`/DetailPage/${todo.id.userid}`}>상세보기</Link>
                    <h2>{todo.title}</h2>
                    <div>{todo.body}</div>
                    <footer>
                        <button className="btn1" onClick={() => {
                            dispatch(deleteTodo(todo.id));
                        }}>삭제하기!!!!</button>
                        <button className="btn2" onClick={() => {
                            dispatch(toggleTodo(todo))
                        }}>완료!!!!!</button>
                    </footer>
                </TodoBox>
            ))}
        </TodoBoxContainer>
        </>
    )
}



const TodoBoxContainer = styled.div`
    margin: 20px;
    margin-bottom: 60px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

& > h2 {
    flex: 1 1 100%;
    margin: 0px;
    padding-bottom: 10px;
}
`;


const TodoBox = styled.div`
    width: 280px;
    height: 160px;
    border: 4px solid blue;
    border-radius: 10px;
    padding: 12px 24px 24px;
    

& > footer {
    display: flex;
    padding: 12px;
    gap: 12px;


    & > button {
    border: 2px solid;
    height: 40px;
    width: 120px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    }

    & > .btn1 {
        border-color: red;
    }
    & > .btn2 {
        border-color: green;
    }
}
`;


export default List