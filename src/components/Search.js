import React from 'react';

const Search = props => {
    return (
        <div className='row'>
            <div className='col'>
                <h4>Search</h4>
                <input type="text"></input>
                    <h6>From</h6>
                    <h6>To</h6>
            </div>
            <div className='col'>
                <h4>Filter</h4>
                <div className='row'>
                    <h6 className='col'>News Desk</h6>
                    <h6 className='col'> Section</h6>
                    <h6>Type</h6>
                </div>

            </div>

        </div>
    )
}
export default Search;