import React from "react";

import ContextData from "./ContextData";
import "./App.scss";
import SearchInput from "./Components/SearchBox/SearchInput";
import Rate from "./Components/Rate/Rate";
import Profile from "./Components/ProfileCard/Profile";

const App = () => {
    return (
        <>
            <ContextData>
                <Rate />
                <SearchInput />
                <Profile />
            </ContextData>
        </>
    );
};

export default App;
