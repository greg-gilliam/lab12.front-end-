import React, { Component } from 'react';

class signUp extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="sign-up">
                <form className="sign-up-form">
                    <h2>
                        <link key={`/signUp`} to={`/signUp`}>Sign Up</link>

                    </h2>
                </form>
            </section>
         );
    }
}

 
export default signUp;