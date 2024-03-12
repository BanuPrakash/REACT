import React, { memo } from 'react'

function AgeChild(props) {
    console.log("<AgeChild /> renders");
    return (
        <div>AgeChild, Age: {props.age} </div>
    )
}

const MemoAgeChild = memo(AgeChild);
// if props match with previous props in cache return;
// else return AgeChild(props);
export default MemoAgeChild;