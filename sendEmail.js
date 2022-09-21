import nodemailer from 'nodemailer';

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: 'gmail', //i use outlook
    auth: {
      user: process.env.USER_MAIL, // email
      pass: process.env.PASSWORD_MAIL, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};


// send email
const EmailSender = ({ services, firstName, lastName, email, phoneNumber, city, experience, budget, message }) => {
  const options = {
    from: `Франшиза ШАУROOM  <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: 'Заявка на сотрудничество ШАУROOM',
    html: `
        <div style="width: 100%; background-color: #white; padding: 5rem 0">
        <div style="max-width: 700px; background-color: white; margin: 0 auto">
          <div style="width: 100%; background-color: #000000; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              src="https://res.cloudinary.com/dzuvfplbl/image/upload/v1663655260/shauroom/white-logo_o2t2ir.png"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <div style="font-size: .8rem; margin: 0 30px">
              <p>Способ: <b>${services}</b></p>
              <p>Имя: <b>${firstName}</b></p>
              <p>Фамилия: <b>${lastName}</b></p>
              <p>Почта: <b>${email}</b></p>
              <p>Номер: <i>${phoneNumber}</i></p>
              <p>Город: <i>${city}</i></p>
              <p>Опыт: <i>${experience}</i></p>
              <p>Сумма: <i>${budget}</i></p>
              <p>Сообщение: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>
        `,
  };

  Email(options)
};

export default EmailSender
