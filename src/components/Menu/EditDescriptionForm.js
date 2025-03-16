import React, { useState } from 'react'
import Message from '../Message'
import './EditDescriptionForm.css'

const EditDescriptionForm = ({ id, note, updateDayById, status, loading }) => {

    const [newNote, setNewNote] = useState(note || '');

    const handleChangeNote = (e) => {
        setNewNote(
            e.target.value
        );
    };

    return (
        <form className='edit-from'>
            <div className='edit-from__inner'>
                <div className='edit-from__input'>
                    <textarea
                        value={newNote || ''}
                        name='note'
                        onChange={handleChangeNote}
                    />
                </div>
                <button type='button' onClick={() => updateDayById({ id, updatedDay: { description: note } })}>
                    {!loading ? 'Edit' : 'Loading ...'}
                </button>
                <Message message={status} />
            </div>
        </form>
    )
}

export default EditDescriptionForm
