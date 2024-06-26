import React from "react";
import UserInfor from "../../components/UserInfor";

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */
    state = {
        name: 'TranHieu',
        address: 'HaNam',
        age: '25'
    }

    handleClick = (event) => {
        // console.log(">> click me my button")
        console.log("My name is: ", this.state.name, "Random age: ", this.state.age)

        this.setState({
            name: 'eric',
            age: Math.floor((Math.random() * 100) + 1)
        })
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
        console.log('>> call render: ', this.state)
        // let name = 'Hieu Tran';

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
                <UserInfor />
            </div>
        )
    }
}

export default MyComponent;