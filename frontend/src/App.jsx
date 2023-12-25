import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mianLayout/MainLayout'
import MusicPage from './pages/music/MusicPage'
import PlayMusicPage from './pages/playMusic/PlayMusicPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<MusicPage />} />
          <Route path='/music/play/:id' element={<PlayMusicPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
