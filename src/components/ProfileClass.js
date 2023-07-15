import React from 'react'

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        // Create State
        this.state = {
            count: 0,
            userInfo: {
            },
        }
        console.log(this.props.name + "Child Constructor called");
    }

    componentDidMount() {
        console.log(this.props.name + "Child ComponentDidMount called");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate called")
    }

    componentWillUnmount() {
        console.log("will unmount")
    }
    
    render() {
        const { userInfo } = this.state;
        console.log(this.props.name + "Child Render called");
        return (
            <div>
                <h1>Class Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
            </div>
        )
    }
}

export default ProfileClass;