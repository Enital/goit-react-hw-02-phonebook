import React from "react";
// import css from './Filter.module.css';
import PropTypes from 'prop-types';

// class Filter extends React.Component {

//     render() {
//         return (
//             <>
//                 <h3>Find contacts by name</h3>
//                 <label>
//                     <input
//                         //   className={css.input}
//                         // onChange={onChangeInput}
//                         // value={filter}
//                         type="text"
//                         name="filter"
//                     />
//                 </label>
//             </>
//         );
//     };
// }

function Filter({ filter, handleChange }) {
    console.log(filter)
    return (
        <>
            <h3>Find contacts by name</h3>
            <label>
                <input
                    //   className={css.input}
                    // onChange={onChangeInput}
                    // value={filter}
                    type="text"
                    name='filter'
                    value={filter}
                    onChange={handleChange}
                    />
                </label>
        </>
    )
}
export default Filter;
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};