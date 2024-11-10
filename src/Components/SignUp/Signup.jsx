import { useState } from "react";
import './Signup.css';

const Signup = () => {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.username.value === "") {
            console.log("Username is required");
            setError("Username is required!")
        }
        else if (e.target.password.value === '') {
            console.log("password is required");
            setError("Password is required!");
        } else if (e.target.phone.value === '') {
            console.log("Phone is required");
            setError("Phone is required!");
        } else {
            setError("");
            console.log(e.target.username.value);
            console.log(e.target.password.value);
            console.log(e.target.phone.value);
        }

    }
    return (
        <div className="w-fit mx-auto">
            <form onSubmit={handleSubmit} className="signup">
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="text" name="phone" placeholder="Enter Phone" />
                <input type="submit" value="Submit" className="cursor-pointer bg-gray-400 hover:bg-gray-800 hover:text-white duration-500 hover:rounded-none"/>
            </form>
            <p className="text-red-600 text-xl font-medium p-3 m-3">{error ? error : ""}</p>
        </div>
    );
};

export default Signup;