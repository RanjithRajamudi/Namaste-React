import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //Api Calls goes here
        const timer = setInterval(() => {
            console.log("Interval called")
        }, 1000);
        console.log("useEffect called");

        return () => {
            clearInterval(timer);
            console.log("useEffect Returned")
        }
    }, [])

    console.log("Render called");

    return (
        <div>
            <h1>This is my Profile</h1>
            <h2>Name :{props.name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(1)}>Click</button>
        </div>
    )
}

export default Profile;