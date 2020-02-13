import React, { Component } from 'react'
import fullDataSet from '../../Data/fullDataSet';
import Work from './Work.js';

export default class Works extends Component {

    render() {
        const {works} = fullDataSet;
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
