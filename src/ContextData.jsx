import React, { useState, useEffect, createContext } from "react";

export const ProfileContext = createContext();

const ContextData = (props) => {
    const [user, setUser] = useState([]);
    const [rate, setRate] = useState(null);
    const [error, setError] = useState(null);
    const [profileLoad, setProfileLoad] = useState(false);

    useEffect(() => {
        console.log("Useffect running..");
        const rateUrl = `https://api.github.com/rate_limit`;
        const fetchData = async (url) => {
            try {
                const res = await fetch(rateUrl);
                const data = await res.json();
                setRate(data.rate.remaining);
            } catch (error) {
                console.log(error);
                setRate(null);
            }
        };
        fetchData(rateUrl);

        // eslint-disable-next-line
    }, [user]);
    useEffect(() => {
        if (rate === 0) setError("Rate limit reached! Try again later");
    }, [rate]);
    console.log(rate, user);
    return (
        <ProfileContext.Provider
            value={{
                user,
                setUser,
                rate,
                profileLoad,
                setProfileLoad,
                error,
                setError,
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ContextData;
