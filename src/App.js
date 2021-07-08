import React from "react";

import ContextData from "./ContextData";
import "./App.scss";
import SearchInput from "./Components/SearchBox/SearchInput";
import Rate from "./Components/Rate/Rate";
import Profile from "./Components/ProfileCard/Profile";
import Logo from "./Components/Logo/Logo";

const App = () => {
    return (
        <>
            <a
                href="https://github.com/subhamdas461/github-profile-card"
                target="blank"
            >
                <Logo />
            </a>
            <ContextData>
                <Rate />
                <SearchInput />
                <Profile />
            </ContextData>
        </>
    );
};

export default App;
