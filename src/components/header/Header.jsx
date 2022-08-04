import React from "react";
import styled from "styled-components";

function Header(){
    return(
        <HeadContainer>
            <Title>
                <p>My Todo List</p> 
                <p>React</p>
            </Title>
        </HeadContainer>
    )
}

const HeadContainer = styled.div`

    border: 1px solid #808080;
    border-radius: 5px;
    margin: 16px auto;
`;

const Title = styled.div`
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    margin: 5px;
`;

export default Header;