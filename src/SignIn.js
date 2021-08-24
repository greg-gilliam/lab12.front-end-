import React, { Component } from 'react';

class signIn extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="sign-in">
                <form className="sign-in-form">
                    <h2>
                        <link key={`/sign-in`} to={`/sign-in`}>Sign In</link>
                    </h2>
                </form>
            </section>
         );
    }
}
 
export default signIn;