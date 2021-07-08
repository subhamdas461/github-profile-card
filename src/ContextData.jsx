import React, { useState, useEffect, createContext } from "react";

export const ProfileContext = createContext();

const ContextData = (props) => {
    const [user, setUser] = useState([]);
    const [rate, setRate] = useState(null);
    const [error, setError] = useState(null);
    const [profileLoad, setProfileLoad] = useState(false);

    useEffect(() => {
        const rateUrl = `https://api.github.com/rate_limit`;
        const fetchData = async (url) => {
            try {
                const res = await fetch(rateUrl);
                const data = await res.json();
                setRate(data.rate.remaining);
            } catch (error) {
                setRate(null);
            }
        };
        fetchData(rateUrl);

        // eslint-disable-next-line
    }, [user]);
    useEffect(() => {
        if (rate === 0) setError("Rate limit reached! Try again later");
    }, [rate]);

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
