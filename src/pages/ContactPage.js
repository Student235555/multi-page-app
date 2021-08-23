import React, {useState} from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

const ContactPage = () => {

    const [messageContent, setMessageContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageContent('');
    }

    return ( 
        <div className='contact'>
            <form onSubmit={handleSubmit}>
                <h3>Napisz do nas</h3>
                <textarea 
                    value={messageContent} 
                    onChange={event => setMessageContent(event.target.value)}
                    placeholder='Wpisz wiadomość...'
                ></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt
                when={messageContent}
                message='Napisana wiadomość nie została wysłana. Czy na pewno chcesz opuścić podstronę?'
            />
        </div>
     );
}
 
export default ContactPage;