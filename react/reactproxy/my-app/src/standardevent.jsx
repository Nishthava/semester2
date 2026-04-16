import react from 'react';

const StandardEvent = () => {

    const [text , setText] = react.useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>Standard Event</h1>
            <input type="text" value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
        </div>
    );
}

export default StandardEvent;