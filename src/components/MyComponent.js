import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    /**
     * JSX => return block
     * fragment
     */

    render() {

        return (
            <div>
                <UserInfor />
            </div>
        )
    }
}

export default MyComponent;