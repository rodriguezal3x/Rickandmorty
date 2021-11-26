import React from "react";

const Character = ({ characters = [] }) => {
    return(
        <div className="row">
            {characters.map( (item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth:"100px"}}>
                        <img src={item.image}  alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p>origin: {item.origin.name}</p>
                            <p  style={{ fontSize:"14px"}}>locations: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Character