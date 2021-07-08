import React, { useContext } from "react";
import { ProfileContext } from "../../ContextData";
import "./Profile.scss";
import { ScaleLoader } from "react-spinners";
import { IoLocation } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { SiGooglecalendar } from "react-icons/si";
import Error from "../Error/Error";
const Profile = () => {
    const { user, profileLoad, error } = useContext(ProfileContext);
    const {
        name,
        bio,
        created_at,
        login,
        followers,
        following,
        avatar_url,
        company,
        location,
        public_repos,
    } = user;

    const date_opt = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const convertNum = (num) => {
        let n = parseInt(num);
        if (n > 1000) {
            let ansK = n / 1000;
            if (n >= 1000000) {
                let ansM = n / 1000000;
                return ansM.toFixed(1) + "M";
            }
            return ansK.toFixed(1) + "K";
        }

        return n;
    };
    if (error) {
        return (
            <Error>
                <p>
                    <MdError size="24" />
                    <span>{error}</span>
                </p>
            </Error>
        );
    }
    return profileLoad ? (
        <div className="profile load-profile">
            <ScaleLoader color="#fff" />
        </div>
    ) : (
        <>
            {user.login && (
                <div className="profile">
                    <img src={avatar_url} alt="img" />
                    {name && <h1 className="name">{name}</h1>}
                    <a
                        href={`https://github.com/${login}`}
                        target="blank"
                        className="username"
                    >
                        @{login}
                    </a>
                    {bio && <p className="bio">" {bio} "</p>}
                    <div className="first-row">
                        {company && (
                            <p>
                                <BsBuilding />

                                <span>{company}</span>
                            </p>
                        )}
                        {location && (
                            <p>
                                <IoLocation />
                                <span>{location}</span>
                            </p>
                        )}
                        {created_at && (
                            <p>
                                <SiGooglecalendar />
                                <span>
                                    Joined on{" "}
                                    {new Date(created_at).toLocaleDateString(
                                        "en-US",
                                        date_opt
                                    )}
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="sec-row">
                        {followers !== null && (
                            <div>
                                {convertNum(followers)}
                                <p>Followers</p>
                            </div>
                        )}
                        {following !== null && (
                            <div>
                                {convertNum(following)}
                                <p>Following</p>
                            </div>
                        )}
                        {public_repos !== null && (
                            <div>
                                {convertNum(public_repos)}
                                <p>Repositories</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
