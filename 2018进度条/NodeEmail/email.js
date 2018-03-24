const nodemailer = require('nodemailer');
const fs = require("fs");

var config = JSON.parse(fs.readFileSync("./config.json"));

const params = {
  host: 'smtp.exmail.qq.com', // 设置服务
  port: 465, // 端口
  sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
  auth: {
    user: config.EmailId, // 邮箱和密码
    pass: config.psw
  }
}

var neir = fs.readFileSync("./email_template.html",'utf-8');
// 邮件信息
const mailOptions = {
    from: "2018进度条 <progress_bar@xluos.com>", // 发送邮箱
    //to: "email@xluos.com", // 接受邮箱
    to: "1360505570@qq.com", // 接受邮箱
    subject: "Hello World", // 标题
    html: neir // 内容
}

//发送邮件
const transporter = nodemailer.createTransport(params);

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
  // success
  // ...
})