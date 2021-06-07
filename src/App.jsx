import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import Login from './components/Login/Login';
import Registration from './components/registration/Registration';

// import {Test} from './components/Login/Test';


function App() {


  return (
    <Provider store={store}>
      <Login />
      <Registration />
      {/* <Test /> */}
    <div className="App">
      <h1 style={{fontSize : "64px", color: "red"}}>REDUX FIRST</h1>
    </div>
    </Provider>
  );
}

export default App;
