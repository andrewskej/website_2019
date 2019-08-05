import React, { Component, createContext } from 'react'
import data from '../Data/data'
import fullDataSet from '../Data/fullDataSet'

const Context = createContext();
const {Provider, Consumer:ProfileConsumer} = Context;

class ProfileProvider extends Component {
    state={
        mode:'bio',
        contact:'',
        yearSet:[],
       
        fullDataSet:``
    }

    actions={
        viewMode: (mode) => {
            this.setState({mode})
        },

        event: (year) => {
            return (
                <div className="sheet">
                    {data[year].map((career, i)=>(
                        <div className="events" key = {i}>
                    
                        <div className="summary">
                            <div className="companyData">
                                <div className="company_name"><a href={career.link}>{career.title}</a></div>
                                <div className="company_place">{career.where}</div>
                                <div className="company_period">{career.from} - {career.to}</div>
                            </div>
                        </div>

                        <div className="draw">
                            <div className="draw_circle">{year}</div>
                            <div className="draw_line"/>
                        </div>

                        <div className="jobData">
                            <div className="job_title">{career.subTitle}</div>
                            <div className="job_desc">{career.desc.map(line => <li>{line}</li>)}</div>
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
        //fullDataSet 으로 바꾸는게 좋을까? 개별 데이터를 가지는게 나을까?


        // let yearSet = Object.keys(data).reverse()
        let yearSet = Object.keys(career).reverse()
        this.setState({ yearSet, contact, career, bio, contact, skills, works })
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