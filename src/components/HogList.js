import React from "react";
import HogCard from "./HogCard"

export default function HogList(props) {
    return(
        <div>
            {props.theHogs.map((hog) => {
                // each component of the same name should have a unique key!
                return <HogCard key={hog.name} hog={hog} />
            })}
        </div>
    )
}

