export default function Filter(props){
    return <input type="text" 
            placeholder="search by name" 
            onChange={(evt) => props.filterEvent(evt.target.value)} />
}