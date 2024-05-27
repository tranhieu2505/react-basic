import React from "react";

class UserInfor extends React.Component {

    state = {
        name: 'TranHieu',
        address: 'HaNam',
        age: '25'
    }

    handleOnMoverOver(event) {
        console.log(event.pageX)
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                    />

                    <label>Your age</label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;