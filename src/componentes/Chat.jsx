import React from 'react';
import '../Estilos/chat.css';


function Chat(){

    return ( 
        <div className="container-fluid">
<div className="page-content page-container" id="page-content">
    
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-12">
                <div className="card card-bordered">
                    <div className="card-header">
                   
                        <h4 className="card-title"><strong>CHAT</strong></h4> <a class="btn btn-xs btn-secondary" href="#" data-abc="true"></a>
                    
              </div>
                    <div className="ps-container ps-theme-default ps-active-y" id="chat-content" >
                        <div className="media media-chat"> <img className="chat" src="https://img.icons8.com/color/36/000000/administrator-male.png " alt="..."/>
                            <div className="">
                                <p>Hi</p>
                                <p>How are you ...???</p>
                                <p>What are you doing tomorrow?<br/> Can we come up a bar?</p>
                                <p class="meta"><time datetime="2018">23:58</time></p>
                            </div>
                        </div>
                    
                        <div class="media media-chat"> <img className="chat" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                            <div class="media-body">
                                <p>Okay</p>
                                <p>We will go on sunday? </p>
                                <p class="meta"><time datetime="2018">00:07</time></p>
                            </div>
                        </div>
                        <div class="media media-chat media-chat-reverse"><img className="chat" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                            <div class="media-body">
                                <p>That's awesome!</p>
                                <p>I will meet you Sandon Square sharp at 10 AM</p>
                                <p>Is that okay?</p>
                                <p class="meta"><time datetime="2018">00:09</time></p>
                            </div>
                        </div>
                        <div class="media media-chat"> <img className="chat" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                            <div class="media-body">
                                <p>Okay i will meet you on Sandon Square </p>
                                <p class="meta"><time datetime="2018">00:10</time></p>
                            </div>
                        </div>
                        <div class="media media-chat media-chat-reverse"><img className="chat" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                            <div class="media-body">
                                <p>Do you have pictures of Matley Marriage?</p>
                                <p class="meta"><time datetime="2018">00:10</time></p>
                            </div>
                        </div>
                        <div class="media media-chat"> <img className="chat" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                            <div class="media-body">
                                <p>Sorry I don't have. i changed my phone.</p>
                                <p class="meta"><time datetime="2018">00:12</time></p>
                            </div>
                        </div>
                        
                        <div class="ps-scrollbar-x-rail" >
                            <div class="ps-scrollbar-x" tabindex="0" ></div>
                        </div>
                        <div class="ps-scrollbar-y-rail">
                            <div class="ps-scrollbar-y" tabindex="0" ></div>
                        </div>
                    </div>
                    <div class="publisher bt-1 border-light"> <input class="publisher-input" type="text" placeholder="Write something"/> <span class="publisher-btn file-group"> <i class="fa fa-paperclip file-browser"></i> <input type="file"/> </span> <a class="publisher-btn" href="#" data-abc="true"><i class="fa fa-smile"></i></a> <a class="publisher-btn text-info" href="#" data-abc="true"><i class="fa fa-paper-plane"></i></a> </div>
                <button>Enviar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    )
 
}
export default Chat;