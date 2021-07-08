import React, { useContext } from "react";
import { ProfileContext } from "../../ContextData";
import "./Profile.scss";
import { ScaleLoader } from "react-spinners";
import { IoLocation } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
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
    if (error) {
        return (
            <Error>
                <p>{error}</p>
            </Error>
        );
    }
    const date_opt = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
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
                    <p className="bio">{bio}</p>
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
                                    Joined{"   "}
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
                                {followers}
                                <p>Followers</p>
                            </div>
                        )}
                        {following !== null && (
                            <div>
                                {following}
                                <p>Following</p>
                            </div>
                        )}
                        {public_repos !== null && (
                            <div>
                                {public_repos}
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
