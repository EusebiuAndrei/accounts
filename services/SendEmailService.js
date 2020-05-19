const nodemailer = require('nodemailer');

const Logger = require('../loaders/logger');

class SendEmailService {

    constructor(){

    }

    async sendConfirmEmail(emailToken,email){
        
        var auth = {
            type: 'oauth2',
            user: 'cozmacatalin33@gmail.com',
            clientId: '240398453424-pgn2b6upbtqpqgas47t55aai542bmtd9.apps.googleusercontent.com',
            clientSecret: 'Jxf8WeNko0wF6rsyaMhXAgf_',
            refreshToken: '1//041nQRiX4Ml7WCgYIARAAGAQSNwF-L9IrOenzINB48KJF2kzpCQpyRBXdy15BjpZQe8DvlTL7H5IDEFKueP3QWMEPgjrTSYV2ClQ',
            accessToken: 'ya29.a0Ae4lvC2Z7ofd2HTXxyK8Ni0R9FeGnDuNR55chthr2AuMHSCSijEMMmqnGf_Kuw_Vy6A2ClglBnkqJCeea7w7uHyNEpI2t9TCicPKVgOOSUKuofsVDjWQRsGGsv6AmP7xHXIjRv3AF-qXYwitpxE472fZYSAnWtyPruQ',
            authorizationCode: '4/ywGYK2YA-4pe6waM5s-qgRYNHuqE0n9_E_x7l5NMP7JgpaysvvMRiOvJ8eILJlXSitn24EeyyYQWtMqJ3yc3acY'
        };

        var mailOptions = {
            from: 'cozmacatalin33@gmail.com',
            to: email,
            subject: 'Salutare din partea echipei accounts',
            html: '<h1>Confirmare email</h1> </br> <p>Pentru a confirma email-ul te rog apasa aici</p> </br> 127.0.0.1:3000/api/users/confirm'+ emailToken
        };

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: auth,
        });

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(JSON.stringify(res));
            }
        });
    }

    async sendNewPassword(password,email){
        var auth = {
            type: 'oauth2',
            user: 'cozmacatalin33@gmail.com',
            clientId: '240398453424-pgn2b6upbtqpqgas47t55aai542bmtd9.apps.googleusercontent.com',
            clientSecret: 'Jxf8WeNko0wF6rsyaMhXAgf_',
            refreshToken: '1//041nQRiX4Ml7WCgYIARAAGAQSNwF-L9IrOenzINB48KJF2kzpCQpyRBXdy15BjpZQe8DvlTL7H5IDEFKueP3QWMEPgjrTSYV2ClQ',
            accessToken: 'ya29.a0Ae4lvC2Z7ofd2HTXxyK8Ni0R9FeGnDuNR55chthr2AuMHSCSijEMMmqnGf_Kuw_Vy6A2ClglBnkqJCeea7w7uHyNEpI2t9TCicPKVgOOSUKuofsVDjWQRsGGsv6AmP7xHXIjRv3AF-qXYwitpxE472fZYSAnWtyPruQ',
            authorizationCode: '4/ywGYK2YA-4pe6waM5s-qgRYNHuqE0n9_E_x7l5NMP7JgpaysvvMRiOvJ8eILJlXSitn24EeyyYQWtMqJ3yc3acY'
        };

        var mailOptions = {
            from: 'cozmacatalin33@gmail.com',
            to: email,
            subject: 'Salutare din partea echipei accounts',
            html: '<h1>Parola noua este</h1> </br> <p>'+password+'</p>'
        };

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: auth,
        });

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(JSON.stringify(res));
                        }
        });
    }
}

module.exports = SendEmailService;
