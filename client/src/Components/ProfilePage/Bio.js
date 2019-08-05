import React, { Component } from 'react'
import bio from '../../Data/bio.js'

export default class Bio extends Component {

    state={
        facts:''
    }

    componentDidMount(){
        const {facts} = bio
 
        this.setState({
            facts
        })
    }


    render() {
        return (
            <div className="bio">
                <div className="profile"> 
                    <div className="title">
                        {this.state.facts.length} facts about me 
                    </div>

                    <div className="facts">
                        {this.state.facts && this.state.facts.map(fact => 
                            <li style={{listStyle:'none'}}>
                                {fact.split(':')[0]} <span className="keyword">{fact.split(':')[1]}</span>
                            </li>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}
