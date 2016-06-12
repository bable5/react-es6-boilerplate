import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <input className="chat-message"
                onChange={this.props.onChange}
                value={this.props.message}
            />
        );
    }
}

export default Message;

