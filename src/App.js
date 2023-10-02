import React, { useState, useEffect } from "react";
import Home from './page/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jasa from './page/Jasa';
import Layanan from './page/Layanan';
import Produk from './page/Produk';
import Chat1 from './components/Chat1';
import Fpengajuan from './page/Fpengajuan';
import './App.css';

function App() {

  return (
    <>
    
    <BrowserRouter>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/jasa' component={Jasa} />
       <Route path='/layanan' component={Layanan} />
       <Route path='/produk' component={Produk} />
       <Route path='/chat' component={Chat1} />
       <Route path='/form' component={Fpengajuan} />

       
     </Switch>
   </BrowserRouter>
      
 </>
  );
}

export default App;
