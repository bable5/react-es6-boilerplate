import React from 'react';

class ChatLine extends React.Component {
    render() {
        return (<li>
            <span className="username">{this.props.name}</span>
            <div className="message">{this.props.message}</div>
            </li>);
    }
}

export default ChatLine;

