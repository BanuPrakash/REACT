import { useState } from "react";

// functional component
export default function Counter() {
    const [count, setCount] = useState(0); // hook to introduce state
    // JSX
    return <div>
        <h1>React 18 Example</h1>
        <span>Count {count}</span>
        <button type="button" onClick={() => setCount(count + 1)}> + </button>
    </div>
}