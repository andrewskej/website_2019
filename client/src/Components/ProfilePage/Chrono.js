import React, { Component } from 'react'
import { ProfileConsumer } from '../../Contexts/ProfileStore';

export default class Chrono extends Component {
    render() {
        return (
            <ProfileConsumer>
                {({state,actions})=>(
                    <div className="chrono">
                        { state.yearSet.reverse().map(year => actions.event(year)).reverse() }
                    </div>
                )}
            </ProfileConsumer>
        )
    }
}
