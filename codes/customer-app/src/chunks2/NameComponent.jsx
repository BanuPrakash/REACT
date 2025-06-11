
export default function NameComponent(props) {
    console.log("NameComponent renders")
    return (
        <div>
            NameComponent: {props.name}
        </div>
    )
}
