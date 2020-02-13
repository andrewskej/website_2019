import React, { Component } from 'react'
import { ProfileConsumer } from '../../Contexts/ProfileStore';
import CvSkills from './CvSkills';
import CvExp from './CvExp';
import fullDataSet from '../../Data/fullDataSet';
export default class CV extends Component {

    state = {}

    componentDidMount (){
        ['edu','work','computer','language','others'].map(section => 
            this.getData(section)
        )
    }


    getData = (type) => {
        let dataBox = []
        const {skills, career} = fullDataSet;

        if(['edu', 'work'].includes(type)){
            const yearSet = Object.keys(career).reverse()
            const yearDataSet = yearSet.map(yr => career[yr].filter(info => info.type === type))
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
