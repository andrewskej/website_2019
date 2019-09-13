import React, { Component } from 'react'
import './ProfilePage.css'
import Bio from '../Components/ProfilePage/Bio'
import Chrono from '../Components/ProfilePage/Chrono'
import CV from '../Components/ProfilePage/CV'
import Works from '../Components/ProfilePage/Works'
import { ProfileProvider, ProfileConsumer } from '../Contexts/ProfileStore';


export default class ProfilePage extends Component {

    
    render() {

        return (
            <ProfileProvider>
                <ProfileConsumer>
                    {({state,actions})=> (

                        <div className="mainframe">
                            <div className="myName">
                                <span>You sik Jeon</span>
                            </div>

                            <div className="router">
                                <div className="router__bio" onClick={()=> actions.viewMode('bio')}>Bio</div>
                                <div className="router__chrono" onClick={()=> actions.viewMode('chrono')}>Chrono</div>
                                <div className="router__CV" onClick={()=> actions.viewMode('CV')}>CV</div>
                                <div className="router__works" onClick={()=> actions.viewMode('works')}>Works</div>
                            </div>

                            {state.mode === 'bio' && <Bio/> }
                            {state.mode === 'chrono' && <Chrono/> }
                            {state.mode === 'CV' && <CV/> }
                            {state.mode === 'works' && <Works/> }

                            <div className = 'contact'>
                                <div className="contact__linkUrl">
                                    <a target="_blank" rel="noopener noreferrer" href={state.contact.linkedin}>
                                        <img src="/images/contact/linkedin.png" alt="linkedIn icon"/>
                                    </a>
                                </div>

                                <div className="contact__info">
                                    <div>{state.contact.email}</div>
                                    <div>{state.contact.phone}</div>
                                    <div>{state.contact.address}</div>
                                </div>

                                <div className="contact__linkUrl">
                                    <a target="_blank" rel="noopener noreferrer" href={state.contact.github}>
                                        <img src="/images/contact/github.png" alt="github icon"/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    )}

                </ProfileConsumer>
            </ProfileProvider>

        )
    }
}



