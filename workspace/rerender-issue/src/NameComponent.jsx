import { memo } from "react";

function NameComponent({ name }) {
    console.log("NameComponent re-renders");
    return <div>
        Name {name} <br />
    </div>
}

export default memo(NameComponent);