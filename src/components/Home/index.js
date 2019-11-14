import React from 'react';
import Chats from '../Chats/index';


const Home = ({ authUser }) => {
    return (
        <div>
            {authUser ? <Chat /> : <ChatNonAuth />}
        </div>
    )
};

const Chat = () => (
    <div>
        <Chats />
    </div>
);

const ChatNonAuth = () => (
    <div>
        Please SignIn
    </div>
);


export default Home;