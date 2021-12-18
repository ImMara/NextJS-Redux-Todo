import React from 'react';
import { connect } from 'react-redux';
import { setFilter, VisibilityFilters } from '../store/actions';
import { bindActionCreators } from "redux";

function Filter({setFilter}) {
    return (
        <>
            <button  onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>All</button>
            <button onClick={() => setFilter(VisibilityFilters.SHOW_DONE)}>Finished</button>
            <button onClick={() => setFilter(VisibilityFilters.SHOW_ACTIVE)}>Waiting</button>
        </>
    );
}


export default connect(null, { setFilter })(Filter);