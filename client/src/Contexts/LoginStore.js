import React, { Component, createContext } from 'react'
import axios from 'axios'
const Context = createContext();
const {Provider, Consumer:LoginConsumer} = Context;

class LoginProvider extends Component {
    state={
        username:'',
        password:'',
        mode:'login',

        join:{},
        joinUserNameCheck:' ',
        joinPasswordCheck:' ',
        globalPath: '//localhost:3001'
    }

    actions={
        switchMode : (mode)  => {
            this.setState({
                mode
            })
        },

        onInput : (text, type) => {
            this.setState({
                [type]:text
            })
        },

        onLogin : () => {
            const {username, password} = this.state
            console.log('login...wip')
            console.log('username, password: ', username, password);
        },

        onJoinInput : (text, type) => {
            const {join} = this.state

            if(type === 'username') {
               const result = this.actions.joinUserNameCheck(text)
               this.setState({
                   joinUserNameCheck:result
               })
            }
            if(type === 'password'){
                const result = this.actions.joinUserNameCheck(text)
                this.setState({
                    joinPasswordCheck:result
                })
            }

            join[type] = text

            this.setState({
                join
            })
        },

        onJoin : async () => {
            const {join} = this.state
        },

        joinUserNameCheck : (text) => {
            let result;
            result = text.length < 8 ? 'too short' : 'awesome'
            return result;
        },

        joinDupCheck : async (username) => {
            const {globalPath} = this.state;
            const raw = await axios.get(globalPath+`/api/user/${username}`)
            const result = raw.data.length > 0 ? 'dup' : 'ok' 
            this.setState({
                joinUserNameCheck:result
            })
        },

 



    }




    render() {
        const {state, actions} = this;
        const value = {state, actions}
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {LoginConsumer, LoginProvider}