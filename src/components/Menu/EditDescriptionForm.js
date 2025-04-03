import React, { useEffect, useState } from 'react'
import Message from '../Message'
import './EditDescriptionForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

const EditDescriptionForm = ({ id, note, cheated, updateDayById, status, loading }) => {

    const [newNote, setNewNote] = useState(note || '');
    const [newCheated, setNewCheated] = useState(cheated || false);

    const handleChangeNote = (e) => {
        setNewNote(
            e.target.value
        );
    };

    useEffect(() => {
        setNewNote(note);
    }, [note])

    useEffect(() => {
        setNewCheated(cheated);
    }, [cheated])

    return (
        <form className='edit-from'>
            <div className='edit-from__inner'>
                <div className={`edit-form__cheated ${newCheated ? 'edit-form__cheated_selected' : ''}`}
                    onClick={() => setNewCheated(prev => !prev)}>
                    <FontAwesomeIcon icon={faWarning} />
                </div>
                <div className='edit-from__input'>
                    <textarea
                        value={newNote || ''}
                        name='note'
                        onChange={handleChangeNote}
                        placeholder='Type something ...'
                    />
                </div>
                <button type='button'
                    onClick={() => updateDayById({ id, updatedDay: { description: newNote, cheated: newCheated } })}>
                    {!loading ? 'Edit' : 'Loading ...'}
                </button>
                <Message message={status} />
            </div>
        </form>
    )
}

export default EditDescriptionForm
