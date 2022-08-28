import React, {useState} from "react";

export default function HogCard(props) {
    const [isClicked, setClicked] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    if (isHidden) {
        return null
    }

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
        <div className='ui card eight wide column pigTile'>
            <div className='image'>
                <img src={props.hog.image} alt='baby hog!' />
            </div>
            <div className='content'>
                <h1 className="header">{props.hog.name}</h1>
            </div>
            <div className='ui button'>
                <button onClick={() => setIsHidden(true)}>Hide</button>
            </div>
        </div>
    )

    return(
        <div onClick={() => {setClicked(!isClicked)}}>
            {isClicked ? clickedTemplate : nonClickedTemplate}
        </div>
    )
}
    