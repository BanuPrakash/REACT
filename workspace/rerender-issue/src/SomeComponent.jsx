import React, { memo } from 'react'

function SomeComponent({ cb }) {
    console.log("Some Component!!!")
    return (
        <div>
            SomeComponent <br />
            <button onClick={() => cb()}>Click</button>
        </div>
    )
}

export default memo(SomeComponent);