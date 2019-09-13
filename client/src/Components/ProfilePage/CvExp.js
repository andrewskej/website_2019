import React, { Component } from 'react'

export default class CvExp extends Component {
    state = {

    }
    render() {
        const monthCal = (mo) => {
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const monNum = months.map(m => m.toUpperCase()).indexOf(mo.toUpperCase()) + 1
            return monNum < 10 ? '0' + monNum : monNum
        }

        const tempJobList = []
        this.props.data && this.props.data.map(job => {
            const beginMonth = job.from.slice(0,3) 
            const beginYear = job.from.slice(beginMonth.length + 1,job.from.length)
            const numCompare = beginYear + monthCal(beginMonth) 
            job = {...job, numCompare}
            tempJobList.push(job)
            return tempJobList.sort(function(a,b){
                return a.numCompare < b.numCompare ? -1 : a.numCompare > b.numCompare ? 1 : 0;
            }).reverse()
        })

        return (
            <div className="cv__exp">
                <div className="cv__exp__subtitle">{this.props.title}</div>
                {tempJobList && tempJobList.map((job) => 
                    ( 
                        <div className="cv__work" key={job.numCompare}>
                            <div className="cv__work__basicInfo">
                                <div className="cv__work__basicInfo__position">{job.subTitle}</div>
                                <div className="cv__work__basicInfo__period">{job.from}-{job.to}</div>
                            </div>
                            <div className="cv__work__addInfo">
                                <div className="cv__work__addInfo__subtitle">{job.title}</div>
                                <div className="cv__work__addInfo__location">{job.where}</div>
                            </div>
                            <div className="cv__work__desc">{job.desc.map((line,i) => <li key={i}>-{line}</li>)}</div>
                        </div> 
                    )
                )}
            </div>
        )
    }
}
