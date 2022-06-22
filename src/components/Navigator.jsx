import React from "react";
import ProfileImg from "./ProfileImg";
import styled from "styled-components";
import Button from "./Button";

const NavigatorLayout = styled.ul`
    display: flex;
	align-items: center;
	gap: 1rem;
`

export default function Navigator() {
    return(
        <NavigatorLayout>
            <li className="profile-img">
                <ProfileImg />
            </li>
            <li>
                <Button color={"default"} text={"Write"} imgSrc={"./img/icon-modify-white.svg"}/>
            </li>
            <li>
                <Button color={"white"} text={"Logout"} imgSrc={"./img/icon-logout.svg"}/>
            </li>
        </NavigatorLayout>
    );
}