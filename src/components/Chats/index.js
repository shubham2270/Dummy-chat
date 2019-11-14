import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import './style.css';
import db from '../Firebase/firebase'


class user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            savedData: null,
            isLoading: true,
            isLoggedIn: false,
        }

        this.addChat = this.addChat.bind(this)

        // console.log('from constructor', props)
    }


    // Adds user name and chat to db
    addChat() {
        console.log('from add chat: ', this.props.firebase.doAddChat)
        console.log('from add chat: ', this.props.firebase.doSignOut)
        let name = this.state.name;
        let message = this.state.message;

        if (name === "" || message === "") {
            alert('Please enter input')
        } else {
            console.log('from add chat: ', this.props.firebase)
            // this.props.firebase.doAddChat.collection("users").doc().set({
            //     name: name,
            //     message: message
            // })
            //     .then(function () {
            //         console.log("Document successfully written!");
            //     })
            //     .catch(function (error) {
            //         console.error("Error writing document: ", error);
            //     });
        }


    }

    addChatHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount() {
        db.collection('users')
            .onSnapshot(querySanpshot => {
                const data = querySanpshot.docs.map(doc => doc.data());
                this.setState({
                    savedData: data,
                    isLoading: false
                })
                console.log(data)
            })
    }


    render() {
        return (
            <div>


                <h1>Users Chats</h1>
                {this.state.isLoading ? (<div>Loading..</div>) : (
                    this.state.savedData.map(data => {
                        return (
                            <div key={data.message} className='chatWrapper'>
                                <div className='name'>
                                    <b>Name: </b>{data.name}
                                </div>
                                <div className='message'>
                                    <b>Message: </b>{data.message}
                                </div>
                            </div>
                        )
                    })
                )
                }
                <br />
                <div>
                    <label>Name</label>
                    <input type="text" name='name' onChange={(e) => this.addChatHandler(e)} />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" name='message' onChange={(e) => this.addChatHandler(e)} />
                </div>
                <button onClick={this.addChat}>Add chat</button>
            </div>
        )
    }

}

export default withFirebase(user);