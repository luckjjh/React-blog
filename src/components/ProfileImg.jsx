import React from "react";
import styled from "styled-components"

const ImgLayout = styled.a`
    width: 4.4rem;
	height: 4.4rem;
	display: block;
    `
const Image = styled.img`
	width: 100%;
    border-radius: 50%;
	height: 100%;
	object-fit: cover;
`

export default function ProfileImg(){
    return(
        <ImgLayout href="./">
            <Image src="./img/profile.jpg" alt="My Page"/>
        </ImgLayout>
    )
}