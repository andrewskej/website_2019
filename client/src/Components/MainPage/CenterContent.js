import React, {Component} from 'react'
import { MainConsumer } from '../../Contexts/MainStore';

export default class CenterContent extends Component {
    render(){
        return(
            <MainConsumer>
                {({state, actions})=> (
                <div className="centerContent"> 
                
                    <div className="create">
                        <div className="createHead"><span>New Comment</span></div>
                        
                        <div className="whatDoYouThink">
                            <div className="myPhoto">myPhoto</div>
                            <input className="writeHere" onInput={e => actions.onInput(e)} placeholder="Leave a new Comment!"></input>
                            <button className="submit" onClick={()=>actions.onPost()}>post</button>
                        </div>

                        <div className="createBottom">
                            <div className="imageFile" onClick={actions.attachWindow}>Photo/Video</div>
                        </div>

                    </div>
                 
                    {state.attach && (
                        <div className="attachFile">
                            <span>attach image</span>
                            <input type="file" className="fileUp"/>
                        </div>
                    )}


                    <div className="board">
                        {
                            state.fromDB.map((el,i) => 
                            <div className="eachThread" key={i} style={{display:'flex'}}>
                                <li style={{listStyle:'none'}}>
                                     {/* {el.regdate} */}
                                     {/* {el.writer} */}
                                    {el.content}
                                </li>
                                <button className="delThread" onClick={()=>actions.onDelete(el.seq)}>x</button>
                            </div>
                        )}
                    </div>

                </div> 
                
                )}
            </MainConsumer>
                
        )
    }


}