import React, { Component } from 'react'
import works from '../../Data/works.js'
import Work from './Work.js';

export default class Works extends Component {

    render() {
        const {enm, hellonature, etc} = works

        return (
            <div className="works">
                <Work worked={enm}/>
                <Work worked={hellonature}/>
                <Work worked={etc}/>
            </div>
        )
    }
}
