import React from "react";

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */
    state = {
        firtName: '',
        lastName: ''
    }

    handleChangeFirtName = (event) => {
        this.setState({
            firtName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>check data input: ', this.state)
    }

    render() {
        console.log('>> call render: ', this.state)
        // let name = 'Hieu Tran';

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firtName}
                        onChange={(event) => this.handleChangeFirtName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default MyComponent;