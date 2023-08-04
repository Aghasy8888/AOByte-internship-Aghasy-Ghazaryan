import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import PostApp from './components/PostApp/PostApp';
import Login from "./pages/Login/Login";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<PostApp />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        </Routes>
        
      </BrowserRouter>        
    </div>
  );
}

export default App;
