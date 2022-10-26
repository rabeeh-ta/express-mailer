function NavBar() {
  const [totalMailSend, setTotalMailSend] = React.useState();

  React.useEffect(() => {
    fetch('https://pace-mail-service.onrender.com/mails-stat')
      .then((res) => res.json())
      .then((data) => {
        setTotalMailSend(data.count);
      });
  }, []);

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
    setMailData({
      ...mailData,
      [e.target.name]: e.target.value,
    });
  }

  async function loadFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('load', () => {
      setMailData((prevData) => ({ ...prevData, attachment: reader.result }));
    });
  }

  function sendMail(event) {
    event.preventDefault();
    fetch('https://pace-mail-service.onrender.com/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailData),
    })
      .then((res) => res.json())
      .then((json) => {
        alert(json.response);
        location.reload();
      })
      .catch((err) => console.error('error:' + err));
  }

  return (
    <section className="letter">
      <form onSubmit={sendMail}>
        <label className="form--label">To</label>
        <input
          className="form--input"
          type="text"
          name="toEmail"
          placeholder="username@example.com"
          value={mailData.toEmail}
          onChange={handleChange}
        />

        <br />
        <label className="form--label">Subject</label>
        <input
          className="form--input"
          type="text"
          name="subject"
          placeholder=""
          value={mailData.subject}
          onChange={handleChange}
        />

        <br />
        <label className="form--label">Subject</label>
        <textarea
          className="form--textarea"
          name="message"
          id=""
          value={mailData.message}
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>

        <br />
        <label className="form--label">Attachment</label>
        <input
          type="file"
          accept="image/*"
          name="attachment"
          onChange={loadFile}
        />

        <br />
        <button onClick={sendMail}>send</button>
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
