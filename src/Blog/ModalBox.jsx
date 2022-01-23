import React from "react";
import "./Blog.css";

const ModalBox = () => (
    <div className="modal-container">
        <div className="overlay modal-trigger"></div>
        <div className="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
            <button 
                aria-label="close modal"
                className="close-modal modal-trigger">
                X
            </button>
            <h1 id="modalTitle">Voici du Contenu</h1>
            <p id="dialogDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam exercitationem nihil veritatis sapiente quia.</p>
        </div>
    </div>
);

export default ModalBox;