import React from "react";

export default function Filter({
    showGreased,
    onChangeShowGreased,
    sortBy,
    onChangeSortBy
}) {

    function handleToggleGreased(event) {
        onChangeShowGreased(event.target.checked)
    }

    function handleChangeSortBy(event) {
        onChangeSortBy(event.target.value)
    }
    
    return(
        <div className='ui menu'>
            <div className='ui item'>
                <label>Sort by </label>
            </div>
            <div>
                <select 
                    className='ui selection dropdown'
                    name='sort'
                    value={sortBy}
                    onChange={handleChangeSortBy}
                >
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
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