import React from 'react';
import ChatList from './chat-list.jsx';
import ChatInput from './chat-input.jsx';

class ChatContainer extends React.Component {
    render() {
        return ( <div>
                   <ChatList items={this.props.items}/>
                   <ChatInput {...this.props.chatInput} />
                </div>);
    }
}

export default ChatContainer;

