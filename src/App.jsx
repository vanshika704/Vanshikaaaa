import MyBook from "./components/mybook";
import "./index.css"
import Page1 from "./ui/page1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App (){
  return (<>  <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<Page1/>} />
      <  Route path="/aboutme" element={<MyBook/>}/>
      
     
        
      </Routes>
    </div>
  </Router></>)
}
export default App;