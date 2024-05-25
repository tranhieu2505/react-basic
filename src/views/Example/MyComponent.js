import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Tran Hieu'
    }

    /**
     * JSX => return block
     * fragment
     */

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.va
        })
    }

    handleClickButton = () => {
        alert('click me')
    }
    render() {

        // let name = 'Hieu Tran';

        return (
            <React.Fragment>
                <div className="firt">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    Hello my component, my name is {this.state.name}
                </div>
                <div className="second">
                    My name is: {this.state.name}
                </div>
                <div className="thrid">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;