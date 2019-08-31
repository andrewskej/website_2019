import React, { Component } from 'react'
import { ProfileConsumer } from '../../Contexts/ProfileStore';
import data from '../../Data/data.js'
import skills from '../../Data/skills.js'
import CV_Skills from './CV_Skills';
import CV_exp from './CV_exp';
export default class CV extends Component {


    state = {

    }


    componentDidMount (){
        this.getData('edu')
        this.getData('work')

        this.getSkill('computer')
        this.getSkill('language')
        this.getSkill(`others`)
    }

//여기도 좀더 추상화 가능할듯

    getData = (type) => {
        const yearSet = Object.keys(data).reverse()
        const yearDataSet = yearSet.map(yr => data[yr].filter(info=>info.type === type))
        const dataSet =  yearDataSet.filter(el => el.length > 0)
        const dataBox = []
        dataSet.forEach(el => dataBox.push(...el))

        this.setState({
            [type]:dataBox
        })
    }

    getSkill = (type) => {
        const skillSet = skills[type]

        this.setState({
            [type]:skillSet
        })
    }


    render() {

        return (
            <ProfileConsumer>
                {({state,actions})=> (
                    <div className="cv">
                        <CV_exp title="work experience" data={this.state.work}/>
                        <CV_exp title="education" data={this.state.edu}/>
                        <CV_Skills title="skills-computer" data={this.state.computer}/>
                        <CV_Skills title="skills-language" data={this.state.language}/>
                    </div>
                )}
            </ProfileConsumer>
        )
    }
}
