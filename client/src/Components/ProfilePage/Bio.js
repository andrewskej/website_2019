import React, { Component } from 'react'
import fullDataSet from '../../Data/fullDataSet.js'

export default class Bio extends Component {

    state={
        facts:''
    }

    componentDidMount(){
        const {bio} = fullDataSet
        const {facts} = bio
 
        this.setState({
            facts
        })
    }


    render() {
        return (
            <div className="bio">
                <div className="bio__profile"> 
                    <div className="bio__profile__title">
                        {this.state.facts.length} facts about me 
                    </div>

                    <div className="bio__facts">
                        {this.state.facts && this.state.facts.map((fact,i) => 
                            <li key={i} style={{listStyle:'none'}}>
                                {fact.split(':')[0]} <span className="bio__facts__keyword">{fact.split(':')[1]}</span>
                            </li>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}
