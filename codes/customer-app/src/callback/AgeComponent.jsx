import React from "react";

function AgeComponent(props) {
    console.log("AgeComponent renders")
    return (
        <div>
            AgeComponent : {props.age}
            <button onClick={() => props.updateAge()}>Change</button>
        </div>
    )
}

// React.memo is called as HOC
let MemoAgeComponent = React.memo(AgeComponent);

export default MemoAgeComponent;