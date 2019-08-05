import React, { Component } from 'react'

export default class Work extends Component {
    
    render() {
        const {worked} = this.props

        return (
            <div className="work">
                <div className="work_imgLink">
                {worked 
                    ? 
                    <a className="work_imgLink_link" target="_blank" rel="noopener noreferrer" href={worked.links}>
                        <img className="work_imgLink_img" src={worked.thumbnail} alt="thumbnail"/>
                        <div className="work_shortDesc">
                            <span className="desc_title">{worked.title}</span>
                            <span className="desc_desc">{worked.desc}</span>
                            <span className="desc_skills">{worked.skills}</span>
                        </div>
                    </a>
                    :
                    <div>loading...</div>
                }
                </div>
            </div>
        )
    }
}
