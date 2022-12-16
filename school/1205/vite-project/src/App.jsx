import { useState, useEffect } from "react";
import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import TwitterLogin from "react-twitter-login";
import { gapi } from "gapi-script";
import Facebook from "./Facebook";
function App() {
    const [profile, setProfile] = useState([]);
    const googleClientId =
        "530667180284-s4ufreb4e2v0lnn8i1qv19ibl9tmav7f.apps.googleusercontent.com";
    const twitterKey = "IBYwfIeyKxm62y7Q615UjJuZI";
    const twitterSecret = "0XSyfas8mR1fd9EvGbvbKxqHpK7nfhMFTV7VbQ0RD3elqhqM8y";

    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init({
    //             clientId: clientId,
    //             scope: "",
    //         });
    //     };
    //     gapi.load("client:auth2", initClient);
    // });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log("Success " + res.profileObj);
    };

    const onFailure = (err) => {
        console.log("failed", err);
    };

    const logOut = () => {
        setProfile(null);
    };

    const twitterAuthHandler = (err, data) => {
        console.log(err, data);
    };

    const responseFacebook = (response, err) => {
        console.log(response, err);
    };

    return (
        <div className="App text-white grid grid-cols-2 mt-64">
            <Facebook />

            {!profile && (
                <GoogleLogin
                    clientId={googleClientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                    className="h-1/4 w-1/2"
                />
            )}

            {profile && (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout
                        clientId={googleClientId}
                        buttonText="Log out"
                        onLogoutSuccess={logOut}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
