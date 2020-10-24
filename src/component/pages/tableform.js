import React, { Component } from 'react';
import axios from 'axios';

class Tableform extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            email: '',
            name: '',
            pan_no: '',
            phone_no: ''
        };
     
    }
 
    onSubmit = (e) => {
        alert('hello')
        e.preventDefault();
        axios.post('http://localhost:2000/postapi/user', this.state)
          .then((result) => {
           
           console.log("Data Save Successfully now.");
          });
      }

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    render() {
        const { address, email, name, pan_no, phone_no } = this.state;
        return (
            <div className="container">
                <div className="py-4">
                    <h2>Create User List</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group row">
                            <div className="col">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="First name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="col">
                                <input type="text" name="pan_no" className="form-control" placeholder="Pan No" value={pan_no}
                                    onChange={this.onChange} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <div className="col">
                                <input type="text" name="address" className="form-control" placeholder="Address" value={address}
                                    onChange={this.onChange} />
                            </div>

                        </div>

                        <div className="form-group row">
                            <div className="col">
                                <input type="text" name="email" className="form-control" placeholder="Email" value={email}
                                    onChange={this.onChange} />
                            </div>

                        </div>

                        <div className="form-group row">
                            <div className="col">
                                <input type="text" name="phone_no" className="form-control" placeholder="Phone No" value={phone_no}
                                    onChange={this.onChange} />
                            </div>

                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>

                    <div>{JSON.stringify(this.state)}</div>
                </div>
            </div>

        )
    }
}

export default Tableform;

