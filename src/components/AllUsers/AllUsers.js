import React, {Component} from 'react';
import Axios from 'axios';

class AllUsers extends Component {

    state = {
        allUsers: []
    }

    componentDidMount = () => {
        Axios.get('/api/allusers')
        .then(response => {
            this.setState({
                allUsers: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {

        return (
            <div>
                <h4>All Users</h4>
                <ul>
                    {this.state.allUsers.map(user => {
                        return <li key={user.id}>username: <b>{user.username}</b> | clearance level: <b>{user.clearance_level}</b></li>
                    })}
                </ul>
            </div>

        )
    }
}

export default AllUsers;