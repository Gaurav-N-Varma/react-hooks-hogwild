import React, {useState} from "react";

export default function HogCard(props) {
    const [isClicked, setClicked] = useState(false)

    const clickedTemplate = (
        <div>
            <h1>{props.hog.name}</h1>
            <div>{props.hog.specialty}</div>
            <div>{props.hog.weight}</div>
            <div>{props.hog.greased ? 'Is greased' : 'Not greased'}</div>
            <div>{props.hog['highest medal achieved']}</div>
            <img src={props.hog.image} alt='baby hog!' />
        </div>
    )

    const nonClickedTemplate = (
        <div>
            <h1>{props.hog.name}</h1>
            <img src={props.hog.image} alt='baby hog!' />
        </div>
    )

    return(
        <div onClick={() => {setClicked(!isClicked)}}>
            {isClicked ? clickedTemplate : nonClickedTemplate}
        </div>
    )
}
    