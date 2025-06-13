import { memo } from "react"

 function NameComponent(props) {
    console.log("NameComponent renders")
    return (
        <div>
            NameComponent: {props.name}
            <button onClick={() => props.updateName()}>Change Name</button>
        </div>
    )
}

export default memo(NameComponent);
