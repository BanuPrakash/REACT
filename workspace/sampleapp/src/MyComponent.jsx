import {useMemo} from 'react';

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

    window.addEventListener("load", () => console.log("MyComponent loaded!!!"));

    return <div>
        Count: {count} <br />
        Total : {total} <br />
    </div>
}

// heavy component