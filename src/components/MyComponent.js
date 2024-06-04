import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */

    state = {
        listUsers: [
            { id: 1, name: "Tran Hieu0", age: "16" },
            { id: 2, name: "Tran Hieu1", age: "26" },
            { id: 3, name: "Tran Hieu2", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    render() {
        //DRY dont repeat yourself
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        )
    }
}

export default MyComponent;