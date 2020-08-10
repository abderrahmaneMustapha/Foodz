
import React from 'react';

function Card(){

    return(
        <div className="col-md-4 col-sm-12 ">
            <div className="shadow bg-white m-1 ">
            <div className="card">
                <div className="card-body">
                <div className="card-text text-muted">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </div>
                <a  href="#"> <h5 className="card-title">Learn more</h5></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card