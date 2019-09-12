import React, { Component } from 'react'

export default class Work extends Component {
    
    render() {
        const {worked} = this.props
        return (
            <div className="works__work">
                <div className="works__work__imgLink">
                {worked 
                    ? 
                    <a className="works__work__imgLink__link" target="_blank" rel="noopener noreferrer" href={worked.links}>
                        <img className="works__work__imgLink__img" src={worked.thumbnail} alt="thumbnail"/>
                        <div className="works__work__imgLink__shortDesc">
                            <span className="works__work__imgLink__shortDesc__title">{worked.title}</span>
                            <span className="works__work__imgLink__shortDesc__desc">{worked.desc}</span>
                            <span className="works__work__imgLink__shortDesc__skills">{worked.skills}</span>
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
