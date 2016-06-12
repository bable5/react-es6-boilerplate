import React from 'react';

import Name from '../../src/components/name.jsx';
import Message from '../../src/components/message.jsx';
import Button from '../../src/components/button.jsx';

class ChatInput extends React.Component {
    render() {
        return (
                <div>
                    <Name />
                    <Message onChange={this.props.onMessageChange}
                        message={this.props.message}
                    />
                    <Button text={this.props.sendText} onClick={this.props.sendMessage}/>
                </div>
           );
    }
};

export default ChatInput;

