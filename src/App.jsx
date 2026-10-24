
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import NotFound from './Pages/NotFound'
import RecipeDetail from './Pages/RecipeDetail'


function App() {
  

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipeDetail/>}/>
         <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
