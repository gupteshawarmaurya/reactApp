import React, { Component } from 'react';
import Tableform from './tableform';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [],
            address: '',
            email: '',
            name: '',
            pan_no: '',
            phone_no: '' };
    }
    componentDidMount() {
        fetch("http://localhost:2000/getapi/user")
            .then(res => { return res.json(); })
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="py-4">
                    <h2>User List</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Pan No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>{user.pan_no}</td>
                                        <td>{user.phone_no}</td>
                                    </tr>
                                );
                            }
                            )}
                        </tbody>
                    </table>
                    <Tableform/>
                </div>
            </div>
        );
    }
}

export default Home;


