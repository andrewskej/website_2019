import React, { Component } from 'react'

export default class CV_exp extends Component {

    
    render() {


        return (
            <div className="cv_exp">
                <div className="cv_subtitle">{this.props.title}</div>
                {this.props.data && this.props.data.map(job => 
                    ( 
                        <div className="cv_work">
                            <div className="cv_work_basicInfo">
                                <div className="cv_work_position">{job.subTitle}</div>
                                <div className="cv_work_period">{job.from}-{job.to}</div>
                            </div>
                            <div className="cv_work_addInfo">
                                <div className="cv_work_subtitle">{job.title}</div>
                                <div className="cv_work_location">{job.where}</div>
                            </div>
                            <div className="cv_work_desc">{job.desc.map(line => <li>-{line}</li>)}</div>
                        </div> 
                    )
                )}
            </div>
        )
    }
}
