import React, { Component } from 'react'
import './MainPage.css' 
import Leftmenu from '../Components/MainPage/LeftMenu';
import CenterContent from '../Components/MainPage/CenterContent';
import { MainProvider, MainConsumer } from '../Contexts/MainStore';

export default class MainPage extends Component {

  render() {
    return (
        <MainProvider>
            <MainConsumer>
            {({state, actions})=> (
                <div className="mainFrame">
            
                    <div className="headerBar"></div>

                    <div className="contents">
                        <Leftmenu/>
                        <CenterContent/>
                        <div className="rightContacts"> rightContacts </div>
                    </div>

                </div>
            )}
            </MainConsumer>
        </MainProvider>

    )
  }
}
