import React, { useContext } from "react";
import { ProfileContext } from "../../ContextData";
import "./Profile.scss";
import { ScaleLoader } from "react-spinners";
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

        public_repos,
    } = user;
    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        );
    }
    return profileLoad ? (
        <div>
            <ScaleLoader color="#fff" />
        </div>
    ) : (
        <>
            {user.login && (
                <div className="profile">
                    <img src={avatar_url} alt="img" height="100px" />
                    <h1 className="name">{name}</h1>
                    <a href="" target="blank" className="username">
                        @{login}
                    </a>
                    <p>{bio}</p>
                    <div className="first-row">
                        <p>{company}</p>
                        <p>Joined {new Date(created_at).toDateString()}</p>
                    </div>
                    <div className="sec-row">
                        <div>{followers}</div>
                        <div>{following}</div>
                        <div>{public_repos}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
