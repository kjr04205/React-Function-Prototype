import React from 'react';
import {BsTrash} from 'react-icons/bs/';
import './styles/deleteButton.css';

interface DeleteButtonProps{
    onClick? (): void;
}

const DeleteButton = ({
    onClick
}: DeleteButtonProps) => {
    return (
        <>
            <div className="deleteButtonContainer" onClick={onClick}>
                <BsTrash />
            </div>
        </>
    )
}

export default DeleteButton;