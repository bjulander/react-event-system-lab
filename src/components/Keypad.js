// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
    handleInputPassword = () => {
        console.log('Entering password...')
    }

    render (){
        return (
            <div className="keyPadDiv">
                <input type="password" onKeyUp={this.handleInputPassword} />
            </div>
        )
    }
}
