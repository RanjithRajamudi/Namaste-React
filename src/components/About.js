import React from 'react'
import Profile from "./Profile";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor called");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount called");
    }

    render() {
        console.log("Parent Render called");
        return (
            <div>

                <h1>About Us Page</h1>
                <Profile name={"First"} />
            </div>
        )
    }
}

export default About;
