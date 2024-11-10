import { useState } from "react";


const Signup = () => {
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.username.value === "") {
            console.log("Username is required");
            setError("Username is required")
        }
        else if (e.target.password.value === '') {
            console.log("password is required");
            setError("password is required");
        } else if (e.target.phone.value === '') {
            console.log("Phone is required");
            setError("phone is required");
        } else {
            setError("");
            console.log(e.target.username.value);
            console.log(e.target.password.value);
            console.log(e.target.phone.value);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="text" name="phone" placeholder="Enter Phone" />
                <input type="submit" value="Submit" />
            </form>
            <p>{error? error:""}</p>
        </div>
    );
};

export default Signup;