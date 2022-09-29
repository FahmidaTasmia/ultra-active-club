import logo from './logo.svg';
import './App.css';
import ActivityDetail from './components/ActivityDetail/ActivityDetail';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <h1 className='text'>Select Your Today's Activity</h1>
      <ActivityDetail></ActivityDetail>
    
  <Blog></Blog>
      
     
    </div>
  );
}

export default App;
