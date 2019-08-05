import React, { Component, createContext } from 'react'
import axios from 'axios'
const Context = createContext();
const {Provider, Consumer:MainConsumer} = Context;

class MainProvider extends Component {
    state={
        globalPath: `//localhost:3001`,
        myMessage:'',
        postMessage:'',
        attach:false,

        fromDB:[]
    }

    actions={
        onLoad: async () => {
           const raw = await axios.get(`${this.state.globalPath}/api/allThreads`)
           const {data} = raw;
           this.setState({
               fromDB: data
           })
        },

        onInput: (e)=> {
            const myMessage = e.target.value;
            this.setState({
                myMessage
            })
        },

        onPost: async () => {
            const {globalPath, myMessage} = this.state
            this.setState({
                postMessage:myMessage
            })
            const content = myMessage
            const write = await axios.post(`${globalPath}/api/writeNew`, {content})
            this.actions.onLoad()
        },

        attachWindow: () => {
            this.setState({
                attach:!this.state.attach
            })
        },

        onDelete: async (seq) => {
            const {globalPath} = this.state;
            const del  = await axios.delete(`${globalPath}/api/del/${seq}`);
            (del && del.status === 200) && alert('deleted!')
            this.actions.onLoad()
        }
    }

    componentDidMount(){
        this.setState({postMessage:''})
        this.actions.onLoad()
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

export {MainConsumer, MainProvider}