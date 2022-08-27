import React from "react";

export default function Filter({
    showGreased,
    onChangeShowGreased
}) {

    function handleToggleGreased(event){
        onChangeShowGreased(event.target.checked)
    }

    return(
        <div className='ui menu'>
            <div className='ui item'>
                <label>Greased filter</label>
            </div>
            <div className='ui item'>
                <input
                    className='ui toggle checkbox'
                    checked={showGreased}
                    type='checkbox'
                    onChange={handleToggleGreased}
                />
            </div>
        </div>
    )
}