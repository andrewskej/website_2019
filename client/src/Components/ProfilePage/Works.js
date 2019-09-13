import React, { Component } from 'react'
import works from '../../Data/works.js'
import Work from './Work.js';

export default class Works extends Component {

    render() {
        const cpNames = Object.keys(works)
        const exp = []
        exp.push(...cpNames.map(cp => works[cp]))

        return (
            <div className="works">
                {exp.map((cp,i) => <Work key={i} worked={cp}/>)}
            </div>
        )
    }
}
