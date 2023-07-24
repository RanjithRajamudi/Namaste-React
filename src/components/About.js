import React from 'react'
import UserContext from '../utils/UserContext';
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
                <UserContext.Consumer>
                    {({ user }) => (
                        <h4 className='font-bold text-xl p-10'>
                            {user.name} - {user.email}
                        </h4>
                    )}
                </UserContext.Consumer>
                <Profile name={"First"} />
            </div>
        )
    }
}

export default About;
