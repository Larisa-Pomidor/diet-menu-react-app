import React from 'react'
import Message from '../Message'

const EditDescriptionForm = ({ id, description, updateDayById, status, loading }) => {

    const [description, setDescription] = useState(description || '');

    const handleChangeDescription = (e) => {
        const { name, value } = e.target;
        setDescription(
            {
                [name]: value
            }
        );
    };

    return (
        <form className='edit-from'>
            <div className='edit-from__inner'>
                <div className='edit-from__input'>
                    <input
                        value={description}
                        name='description'
                        onChange={handleChangeDescription}
                    />
                </div>
                <button type='button' onClick={() => updateDayById({ id, updateDayById: description })}>
                    {!loading ? 'Edit' : 'Loading ...'}
                </button>
                <Message message={status} />
            </div>
        </form>
    )
}

export default EditDescriptionForm
