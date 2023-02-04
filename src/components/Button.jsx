import React from "react";

export default function Button(props) {
    return (
        <>
            <button className="btn" onClick={props.onClick}>
                <img src={props.icon} />
                <span>{props.title}</span>
            </button>
        </>
    )
}