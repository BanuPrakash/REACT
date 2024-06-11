import { memo } from "react";

function AgeComponent({ age }) {
    console.log("AgeComponent re-renders");
    return <div>
        Age {age} <br />
    </div>
}

// function check(props, prevProps) {
//    console.log(props, prevProps)
//    return true;
// }
// export default memo(AgeComponent, check);

export default memo(AgeComponent);