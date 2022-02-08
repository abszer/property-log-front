import logo from './logo.svg';
import './css/App.css';
import UserAuth from './components/UserAuth';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <UserAuth />
      </div>
    </div>
  );
}

export default App;
