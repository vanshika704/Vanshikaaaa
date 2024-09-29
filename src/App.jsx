
import "./index.css"
import Page1 from "./ui/page1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatedPinDemo } from "./components/projects1";
import Page2 from "./ui/page2";
import MyBook from "./components/mybook";
function App (){
  return (<>  <Router>
    <div>
      
      <Routes>
        <Route path="/" element={<Page1/>} />
      <  Route path="/aboutme" element={<Page2/>}/>
      <  Route path="/projects" element={<AnimatedPinDemo/>}/>

       <  Route path="/books" element={<MyBook/>}/>
      
     
        
      </Routes>
    </div>
  </Router></>)
}
export default App;