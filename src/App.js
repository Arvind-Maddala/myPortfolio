import './App.css';
//components
import MyNavbar from './components/my-navbar/mynavbar.component';
import Mycarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';

const App = () => {
  
  return (
    <div className="App">
     <MyNavbar/>
     <Mycarousal/>
     <TitleMessage/>
    </div>
  );
}

export default App;
