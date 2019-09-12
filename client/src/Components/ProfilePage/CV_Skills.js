import React, { Component } from 'react'

export default class CV_Skills extends Component {
    render() {
        return (
            <div className="cv__skills">
                <div className="cv__skills__subtitle">{this.props.title}</div>
                <div classname="cv__skills__skillsList">
                    {this.props.data && this.props.data.map((skillImgPath,i) => 
                        <li key={i} className="cv__skills__skillsList__skill">
                            <img src={skillImgPath} alt={skillImgPath.split('/skills_dev/')[1]}/>
                        </li> 
                    )}
                </div>
            </div>
        )
    }
}
