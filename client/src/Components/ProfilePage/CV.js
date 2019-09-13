import React, { Component } from 'react'
import { ProfileConsumer } from '../../Contexts/ProfileStore';
import data from '../../Data/data.js'
import skills from '../../Data/skills.js'
import CvSkills from './CvSkills';
import CvExp from './CvExp';
export default class CV extends Component {

    state = {}

    componentDidMount (){
        ['edu','work','computer','language','others'].map(section => 
            this.getData(section)
        )
    }


    getData = (type) => {
        let dataBox = []

        if(['edu', 'work'].includes(type)){
            const yearSet = Object.keys(data).reverse()
            const yearDataSet = yearSet.map(yr => data[yr].filter(info => info.type === type))
            const dataSet =  yearDataSet.filter(el => el.length > 0)
            dataSet.forEach(el => dataBox.push(...el))
        }else{
            dataBox = skills[type]
        }

        this.setState({
            [type]:dataBox
        })
    }




    render() {

        return (
            <ProfileConsumer>
                {({state,actions})=> (
                    <div className="cv">
                        <CvExp title="work experience" data={this.state.work}/>
                        <CvExp title="education" data={this.state.edu}/>
                        <CvSkills title="skills-computer" data={this.state.computer}/>
                        <CvSkills title="skills-language" data={this.state.language}/>
                    </div>
                )}
            </ProfileConsumer>
        )
    }
}
