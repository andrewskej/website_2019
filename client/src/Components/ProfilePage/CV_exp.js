import React, { Component } from 'react'

export default class CV_exp extends Component {

    
    render() {


        return (
            <div className="cv__exp">
                <div className="cv__exp__subtitle">{this.props.title}</div>
                {this.props.data && this.props.data.map(job => 
                    ( 
                        <div className="cv__work">
                            <div className="cv__work__basicInfo">
                                <div className="cv__work__basicInfo__position">{job.subTitle}</div>
                                <div className="cv__work__basicInfo__period">{job.from}-{job.to}</div>
                            </div>
                            <div className="cv__work__addInfo">
                                <div className="cv__work__addInfo__subtitle">{job.title}</div>
                                <div className="cv__work__addInfo__location">{job.where}</div>
                            </div>
                            <div className="cv__work__desc">{job.desc.map(line => <li>-{line}</li>)}</div>
                        </div> 
                    )
                )}
            </div>
        )
    }
}
