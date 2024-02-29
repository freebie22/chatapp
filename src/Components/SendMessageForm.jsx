import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap";

const SendMessageForm = ({sendMessage}) => {
    const [msg, setMessage] = useState('');

    return <Form onSubmit={e => {
        e.preventDefault();
        sendMessage(msg);
        setMessage('');
    }}>
        <InputGroup className="mb-3">
            <InputGroup.Text>Chat</InputGroup.Text>
            <Form.Control onChange={e => setMessage(e.target.value)} value={msg} placeholder="type a message..."></Form.Control>
            <Button disabled={!msg} type="submit" variant="primary">Send Message</Button>
        </InputGroup>
    </Form>
}

export default SendMessageForm;