import React, { useContext, useState, useRef } from "react";
import "./Search.scss";
import { ProfileContext } from "../../ContextData";
const SearchInput = () => {
    const [username, setUsername] = useState("");
    const { setUser, rate, setError, setProfileLoad } =
        useContext(ProfileContext);
    const _btn = useRef(null);
    const handleName = (e) => {
        setUsername(e.target.value.trim());
    };
    const getUserData = async () => {
        try {
            if (username.length === 0) {
                return;
            }

            setProfileLoad(true);
            setError(null);
            const userUrl = `https://api.github.com/users/${username}`;
            const res = await fetch(userUrl);
            const data = await res.json();
            setProfileLoad(false);
            console.log(res);
            if (res.status > 399) {
                if (res.status === 404) {
                    throw Error("User Not found");
                }
                if (rate === 0) {
                    throw Error("Rate limit reached! Try again later");
                }
                throw Error("Something went wrong!");
            }
            setUsername("");
            setUser(data);
            console.log(data);
        } catch (error) {
            setProfileLoad(false);
            setError(error.message);
            console.log("Error search:", error.message);
        }
    };
    return (
        <>
            <input
                className="search-box"
                type="text"
                placeholder="Github Username"
                name="username"
                value={username}
                onChange={(e) => handleName(e)}
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        _btn.current.click();
                    }
                }}
            />
            <button ref={_btn} className="btn-search" onClick={getUserData}>
                Search
            </button>
        </>
    );
};

export default SearchInput;
