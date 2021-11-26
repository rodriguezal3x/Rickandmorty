import React from "react";

const  Pagination = ({prev, next, onPrevius, onNext}) => {

    const Atras = () => {
        onPrevius();
    }

    const Adelante = () => {
        onNext();
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {prev ? (
                    <li className="page-item">
                        <button className="page-link" onClick={Atras}>Atras</button>
                    </li>
                ) : null}
                {next?(
                    <li className="page-item">
                        <button className="page-link" onClick={Adelante}>Adelante</button>
                    </li>
                ) :null}
            </ul>
        </nav>
    )
};

export default Pagination