const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/send', sendMail)

//이거아니고 나한테 익명으로 이메일을 보낼수 있게...
//전송용 가상 계정을 만들어야 되지 않을까?
function sendMail(req,res){
    const email = req.body
    const {sender, title, contents} = email

    console.log(email)
  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'andrewskej',  // gmail 계정 아이디를 입력
        pass: 'wjsdbtlr2017!'          // gmail 계정의 비밀번호를 입력
      }
    });
  
    let mailOptions = {
      from: sender,    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
      to: 'andrewskej' ,                     // 수신 메일 주소
      subject: title,   // 제목
      text: contents  // 내용
    };
  
    console.log('send this:', mailOptions)

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log('error:', error);
      }
      else {
        console.log('Email sent: ' + info.response);
      }
    });
  
    res.redirect("/");
    
    
    // return email ? 'success' : 'fail'


}

module.exports = router;
