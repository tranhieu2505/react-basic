import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */

    render() {

        return (
            <div>
                <UserInfor />
                <br /><br />
                <DisplayInfor name="TranHieuxx" age="22" />
                <hr />
                <DisplayInfor name="xxx" age="28" />
            </div>
        )
    }
}

export default MyComponent;