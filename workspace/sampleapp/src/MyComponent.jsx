import { useEffect, useMemo, useState } from 'react';

function computeTotal() {
    console.log("called : computeTotal");
    let total = 0;
    // read from fs
    for (let i = 0; i <= 1000000000; i++) {
        total += i;
    }
    return total;
}

export default function MyComponent({ count }) {
    let total = useMemo(() => computeTotal(), []);
    let [value, setValue] = useState(0);
    // componentDidMount lifecycle method
    useEffect(() => {
        window.addEventListener("load", () => console.log("MyComponent loaded!!!"));
    }, [])

    useEffect(() => {
        let timerId = setInterval(() => setValue(val => val + 1), 1000);
        return () => clearInterval(timerId); // called when unmount componentWillUnMount()
    }, []);

    return <div>
        Count: {count} <br />
        Total : {total} <br />
        Value : {value}
    </div>
}

// heavy component