import React, { Component } from 'react';

class About extends Component{

    render(){
        return(
            <div className="container">
                <div className="py-4">
                    <h1>About Page</h1>
                   <p className="lead">
                    Line 12:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you
                    cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                    </p>
                <p className="lead">
                    Line 12:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you
                    cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
                 </p>
                 <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                   </form>
                </div>
            </div>
         
        )
    }
}

export default About;