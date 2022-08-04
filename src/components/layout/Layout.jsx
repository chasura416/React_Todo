import React from "react";
import styled from "styled-components";

function Layout(props){
    return(
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    min-width: 800px;
    max-width: 1200px;
`;

export default Layout