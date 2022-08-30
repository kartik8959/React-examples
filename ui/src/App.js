import './App.css';
import Header from './Header/index'
import Footer from './Footer/index';
import {BeforeLogin} from './BeforeLogin';
import {AfterLogin} from './AfterLogin';
import {connect} from 'react-redux'

function App({isLoggedIn}) {
  return (
    <div className="App">
        <Header />
          {isLoggedIn ? <AfterLogin /> : <BeforeLogin />}
          
        <Footer />
    </div>
  );
}

App=connect((state)=>{
   return {
     isLoggedIn:state.reducer.isLoggedIn
   }
})(App)
export default App;
