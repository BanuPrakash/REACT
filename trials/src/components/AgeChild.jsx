import React, { memo } from 'react'

function AgeChild(props) {
    console.log("<AgeChild /> renders");
    return (
        <div>AgeChild, Age: {props.age} </div>
    )
}

function doCheck(previous, newprops) {
    console.log("Prev", previous);
    console.log("New", newprops);
    if (previous.age === newprops.age) {
        return true;
    }
    return false;
}

const MemoAgeChild = memo(AgeChild, doCheck);
// if props match with previous props in cache return;
// else return AgeChild(props);
export default MemoAgeChild;