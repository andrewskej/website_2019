import React, { Component } from 'react'

export default class CV_Skills extends Component {
    render() {
        return (
            <div className="cv_skills">
                <div className="cv_subtitle">{this.props.title}</div>
                <div classname="cv_skillsList">
                    {this.props.data && this.props.data.map((skillImgPath,i) => 
                        <li key={i} className="cv_skill">
                            <img src={skillImgPath} alt={skillImgPath.split('/skills_dev/')[1]}/>
                        </li> 
                    )}
                </div>
            </div>
        )
    }
}
