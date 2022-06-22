import React from "react";
import styled from "styled-components";
import Navigator from "./Navigator";

const HeaderLayout = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4rem;
	padding: 1rem 0;
`

export default function Header(){

    return(
        <header>
            <HeaderLayout>
                <h1>
                    <a href="./">
                        <img src="./img/Logo.svg" alt="My Blog" />
                    </a>
                </h1>
                <Navigator />
            </HeaderLayout>
        </header>
    );
}