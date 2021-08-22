import React, {useState} from 'react';
import '../styles/ContactPage.css';

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
        </div>
     );
}
 
export default ContactPage;