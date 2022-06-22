import React from "react";
import styled from "styled-components";

const ButtonLayout = styled.a`
    display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	background: var(--main-color);
	color: var(--white-color);
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
`

const ButtonImg = styled.img`
    height: 1.2em;
	margin-top: -0.2rem;
	vertical-align: middle;
`
const WhiteButtonLayout = styled.a`
    display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	background: var(--main-color);
	color: var(--white-color);
	text-transform: uppercase;
	font-weight: bold;
    padding: 0.2rem 0.8em 0;
    background: var(--white-color);
    color: var(--black-color);
	line-height: 1;
`
export default function Button(props){
    if(props.color==="default"){
        return(
            <ButtonLayout href="#">
                <ButtonImg src={props.imgSrc} alt="" />
                <span>{props.text}</span>
            </ButtonLayout>
        );
    }else if(props.color==="white"){
        return(
            <WhiteButtonLayout href="#">
                <ButtonImg src={props.imgSrc} alt="" />
                <span>{props.text}</span>
            </WhiteButtonLayout>
        )
    }
}