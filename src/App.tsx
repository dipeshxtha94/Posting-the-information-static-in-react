import Header from './components/Header';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div className="">
      <header className="">
       <div>
        <Header />
       </div>
       <div>
       <Posts />
       </div>
      </header>
    </div>
  );
}

export default App;
