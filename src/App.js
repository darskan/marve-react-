import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Header from    './components/Header';
import useFetch from './hooks/useFetch';
import Comics from    './pages/Comics';
import Error404 from  './pages/Error404';
import Home from      './pages/Home';
import Series from    './pages/Series';


function App() {


  const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c142c42fc6f0a64e42394349c89e1db9&hash=4fe71777de7df9670812d8f354578cd7')
  



  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />        } />
          <Route path="/inicio" element={<Home/>   } />
          <Route path="/series" element={<Series/> } />
          <Route path="/comics" element={<Comics/> } />            
          <Route path="*" element={<Error404/> } />
        </Routes>
      </BrowserRouter>
     </div>
   
  );
}

export default App;
