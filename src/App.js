import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Calendar from './components/Calendar/Calendar';
import DayMenu from './components/Menu/DayMenu';
import MenuList from './components/MenuList/MenuList'
import store from './components/store/store';
import { StoreProvider } from 'easy-peasy';
import Header from './components/Header/Header';

function App() {

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/day/:id' element={<DayMenu />} />
            <Route path='/menu-list' element={<MenuList />} />

            <Route path='/analytics' element={<></>} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
