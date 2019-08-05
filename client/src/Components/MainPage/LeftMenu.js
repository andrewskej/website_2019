import React, {Component} from 'react'

export default class Leftmenu extends Component {

    render(){
        return(
            <div className="leftMenu">
            
                <div className="myProfile">사진,얼굴</div>

                <div className="menus">
                    <div>뉴스피드</div>
                    <div>Messenger</div>
                    <div>Watch</div>
                </div>
            
                <div className="goto"> 바로가기
                </div>

                <div className="takeAlook"> 둘러보기
                </div>

            </div>
        )
    }

}