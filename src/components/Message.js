import React from 'react'

const Message = (message) => {
    return (
        <section className='message'>
            <div className='message__inner'>
                {message}
            </div>
        </section>
    )
}

export default Message
