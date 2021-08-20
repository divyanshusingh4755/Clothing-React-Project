import React from "react";
import Directory from "../../components/Directory/Directory";
import { HompageContainer } from "./homepage_styled";
// import "./homepage.scss"

function HomePage() {
    return (
        <HompageContainer>
            <Directory />
        </HompageContainer>
    )
}

export default HomePage;