import './App.css';

function App() {
  const handleButtonClick = () => {
    window.open('https://linktr.ee/barcampsk', '_blank');
  };
  

  return (
    <div>
      <div className="container">
        <div className="content">
          <p><span>BARCAMP SONGKHLA 9</span> WEBSITE</p>
          <h1>We’re <span>Launching</span> Soon</h1>
          <div className="button">
            <button type="button" onClick={handleButtonClick}>
              FOLLOW US &gt;&gt;&gt;
            </button>
          </div>
        </div>
        <div className="content-video">
          <video controls preload="metadata" muted loop playsInline autoPlay src="images/barcamp09_announcement.mp4"
            poster="images/thumbnail.png">
            <source src="images/barcamp09_announcement.mp4" type="video/mp4" />
            <source src="images/barcamp09_announcement.webm" type="video/webm" />
            <source src="images/barcamp09_announcement.ogv" type="video/ogg" />
            This browser does not support HTML5
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
