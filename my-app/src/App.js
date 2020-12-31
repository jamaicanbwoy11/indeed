import Header from './Components/Layout/Header/Header';
import Home from './Components/Layout/Forms/SearchForm/SearchForm';
import { ThemeProvider } from '@material-ui/core';
import theme from './Utils/theme';
import Routes from './Routes/Routes';
import { useSelector } from 'react-redux';
    

function App() {
  const isAuth = useSelector(state=>state.login.isAuth)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
       {
         isAuth ? <Header /> : <></>
       } 
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
