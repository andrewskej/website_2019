import React, { Component } from 'react'
import './LoginPage.css' 
import { Route, Link } from 'react-router-dom';

import { LoginProvider, LoginConsumer } from '../Contexts/LoginStore';

export default class LoginPage extends Component {

  render() {
    return (
        <LoginProvider>
            <LoginConsumer>
            {({state, actions})=> (
                <div className="loginMain">
                    <div className="headerBar"></div>


                    <div className="loginWindow">
                        <div className="navTab">
                            <div className="loginTab" onClick={() => actions.switchMode('login')}>Login</div>
                            <div className="joinTab" onClick={() => actions.switchMode('join')}>Join</div>
                        </div>
                        
                        {state.mode === 'login' && 
                            <div className="loginInputs">
                                <input type="text" placeholder="username" onInput={(e) => actions.onInput(e.target.value, 'username')}/>
                                <form><input type="password" autoComplete="password" placeholder="password" onInput={(e)=> actions.onInput(e.target.value, 'password')}/></form>
                                <button className="noLogin"><Link to ="/main">continue as Guest</Link></button>
                                <button className="loginConfirm" onClick={()=>actions.onLogin()}>login</button>
                            </div>
                        }

                        {state.mode === 'join' &&
                            <div className="joinInputs">
                                <input type="text" placeholder="username" onBlur={(e)=> actions.joinDupCheck(e.target.value)} onInput={(e)=> actions.onJoinInput(e.target.value, 'username')}/>
                                <span>{state.joinUserNameCheck}</span>
                                <form><input type="password" autoComplete="password" placeholder="password" onInput={(e)=> actions.onJoinInput(e.target.value, 'password')}/></form>
                                <span>{state.joinPasswordCheck}</span>
                                <input type="email" placeholder="email" onInput={(e)=> actions.onJoinInput(e.target.value, 'email') }/>
                                <input type="text" placeholder="mobile" onInput={(e)=> actions.onJoinInput(e.target.value, 'mobile') }/>
                                <button className="joinConfirm" onClick={(e)=>actions.onJoin(e)}>join</button>
                            </div>
                        }



                    </div>

                </div>
            )}
            </LoginConsumer>
        </LoginProvider>

    )
  }
}
