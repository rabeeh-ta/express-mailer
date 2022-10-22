function NavBar() {
  const [totalMailSend, setTotalMailSend] = React.useState();

  fetch('https://pace-mail-service.onrender.com/mailsStat')
    .then((res) => res.json())
    .then((data) => {
      setTotalMailSend(data.count);
    });

  return (
    <nav>
      <img src="./postbox.png" />
      <h2> Pace Post Service</h2>
      <p>Total Mails Send {totalMailSend}</p>
    </nav>
  );
}

function LetterBody() {
  const [mailData, setMailData] = React.useState({
    toEmail: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setMailData({
      ...mailData,
      [e.target.name]: e.target.value,
    });
  }

  function sendMail() {
    console.log(mailData);
  }

  return (
    <section className="letter">
      <form>
        <label className="form--label">To</label>
        <input
          className="form--input"
          type="text"
          name="toEmail"
          placeholder="username@example.com"
          onChange={handleChange}
        />

        <br />
        <label className="form--label">Subject</label>
        <input
          className="form--input"
          type="text"
          name="subject"
          placeholder=""
          onChange={handleChange}
        />

        <br />
        <label className="form--label">Subject</label>
        <textarea
          className="form--textarea"
          name="message"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>

        <br />
        <label className="form--label">Attachment</label>
        <input type="file" />

        <br />
        <button type="button" onClick={sendMail}>
          send
        </button>
      </form>
    </section>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <LetterBody />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
