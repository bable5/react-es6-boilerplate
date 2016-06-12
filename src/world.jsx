import React from 'react';
import ChatLine from './components/chat-item.jsx'
import ReactDOM from 'react-dom';

class World extends React.Component {
    render() {
        return (
                <div> something <ChatLine name="Anyone" message="Something" /> </div>
               );
    }
}

ReactDOM.render(<World/>, document.getElementById('world'));

