import React from 'react';
import ChatLine from './chat-item.jsx';


function renderListItem() {
    return  this.props.items.map((props, i) => {
        return <ChatLine key={i} name={props.name} message={props.message}/>;
    });
}


class ChatList extends React.Component {

    render() {
        const children = renderListItem.call(this);
        return (<ul>
                {children}
                </ul>);
    }
};

export default ChatList;

