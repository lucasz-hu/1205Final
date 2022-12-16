import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function Facebook() {
    const [userData, setUserData] = useState();
    const responseFacebook = (response) => {
        console.log(response);
        setUserData(response);
    };

    return (
        <div>
            {userData && (
                <div className="flex flex-col justify-center">
                    <img
                        src={userData.picture.data.url}
                        className="h-16 w-16"
                    />
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>User ID:{userData.userID}</p>
                </div>
            )}
            <FacebookLogin
                appId="826880678573767"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_birthday"
                callback={responseFacebook}
                icon="fa-facebook"
            />
        </div>
    );
}

export default Facebook;
