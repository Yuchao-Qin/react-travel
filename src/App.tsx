import React from 'react';
import styles from './App.module.css';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { HomePage,Register,SigIn ,DetailPage} from "./pages"
import "./i18n/configs"
function App() {
  return (
    <div  className={styles.App}>

        <BrowserRouter>
        <Routes>
        <Route  path='/' element={<HomePage />}></Route>
        <Route  path='/Register' element={<Register/>}></Route>
        <Route  path='/SigIn' element={<SigIn/>}></Route>
        <Route path='/detail/:tourisRouteId' element={<DetailPage/>}></Route>
        <Route   path='*' element={<h1>404</h1> }></Route>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
