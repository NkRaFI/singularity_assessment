import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mianLayout/MainLayout'
import MusicPage from './pages/music/MusicPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<MusicPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
