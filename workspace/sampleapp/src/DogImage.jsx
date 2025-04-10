import React, { useEffect, useState } from 'react'

// HOC to inject new props
function withHover(Element) {
    return (props) => {
        let [hovering, setHovering] = useState();

        return <Element {...props}
            hovering={hovering}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        />
    }
}

// HOC to conditionally render
function withLoading(Element, url) {
    return (props) => {
        let [data, setData] = useState();

        useEffect(() => {
            fetch(url)
                .then(response => response.json()).
                then(data => setData(data));
        }, []);

        if (!data) {
            return <div>Loading...</div>
        }
        return <Element {...props} data={data} />
    }
}

function DogImage(props) {
    return (
        <div>
            {props.hovering && <div>Hovering...</div>}
            <img src={props.data.message} {...props}/>
        </div>
    )
}

// withHover(withLoading(ProductCard));

export default withHover(withLoading(DogImage, "https://dog.ceo/api/breeds/image/random"));
