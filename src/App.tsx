import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/appRouters";

const App: React.FC = () => (
  <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
)

export default App;
