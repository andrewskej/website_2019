import React, { Component, createContext } from 'react'
import fullDataSet from '../Data/fullDataSet'

const Context = createContext();
const {Provider, Consumer:ProfileConsumer} = Context;

class ProfileProvider extends Component {
    state={
        // mode:'bio',
        mode:'CV',
        contact:'',
        yearSet:[],
       
        fullDataSet:``
    }

    actions={
        viewMode: (mode) => {
            this.setState({mode})
            // const showThis = mode.toUpperCase()
        },

        event: (year) => {
            const {career} = fullDataSet;
            return (
                <div className="chrono__items" key={year}>
                    {career[year].map((career)=>(
                        <div className="chrono__events" key={career.link}>
                    
                            <div className="chrono__company">
                                <div className="chrono__company__name"><a href={career.link}>{career.title}</a></div>
                                <div className="chrono__company__place">{career.where}</div>
                                <div className="chrono__company__period">{career.from} - {career.to}</div>
                            </div>

                            <div className="chrono__draw">
                                <div className="chrono__draw__circle">{year}</div>
                                <div className="chrono__draw__line"/>
                            </div>

                            <div className="chrono__job">
                                <div className="chrono__job__title">{career.subTitle}</div>
                                <div className="chrono__job__desc">{career.desc.map((line,i) => <li key={i}>{line}</li>)}</div>
                            </div>

                        </div>
                        )
                    )}
                </div>
            )
        },



    }


    componentDidMount(){
        const {career, bio, contact, skills, works} = fullDataSet
        const yearSet = Object.keys(career).reverse()
        this.setState({ yearSet, contact, career, bio, skills, works })
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

export {ProfileConsumer, ProfileProvider}