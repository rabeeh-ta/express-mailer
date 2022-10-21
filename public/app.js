function NavBar() {
  const [totalMailSend, setTotalMailSend] = React.useState({});

  fetch('https://pace-mail-service.onrender.com/mailsStat')
    .then((res) => res.json())
    .then((data) => setTotalMailSend(data));
  return (
    <nav>
      <img src="./postbox.png" />
      <h2> Pace Post Service</h2>
      <p>Total Mails Send {totalMailSend.count}</p>
    </nav>
  );
}

function LetterBody() {
  return <section className="letter"></section>;
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
