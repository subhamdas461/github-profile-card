import React from "react";
import "./Rate.scss";
import { useEffect, useContext, useState } from "react";
import { SyncLoader } from "react-spinners";
import { ProfileContext } from "../../ContextData";

const Rate = () => {
    const { rate } = useContext(ProfileContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (rate !== null) setLoaded(true);
    }, [rate]);
    return !loaded ? (
        <div className="load load-rate">
            <SyncLoader size="7px" color="#fff" speedMultiplier="0.8" />
        </div>
    ) : (
        <div className="rate-wrapper">
            {rate !== null && <h1 className="rate">{rate} / 60</h1>}
            <p>Request Limit</p>
        </div>
    );
};

export default Rate;
