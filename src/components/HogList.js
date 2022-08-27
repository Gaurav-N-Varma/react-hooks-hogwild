import React from "react";
import HogCard from "./HogCard"

import hogs from "../porkers_data";

export default function HogList() {
    return(
        <div>
            {hogs.map((hog) => {
                // each component of the same name should have a unique key!
                return <HogCard key={hog.name} hog={hog} />
            })}
        </div>
    )
}

