import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5500';

function App() {
  const onLoginClick = async () => {
    window.open(
      `https://wakatime.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=email,read_stats&response_type=code&redirect_uri=http://localhost:3000/login`,
      '_self'
    );
  };

  return (
    <div>
      <h1>Project Time</h1>
      <button onClick={onLoginClick}>login</button>
    </div>
  );
}

export default App;
