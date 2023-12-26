import { lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mianLayout/MainLayout'
import ReactSuspense from './components/reactSuspense/ReactSuspense'
const MusicPage = lazy(() => import('./pages/music/MusicPage'))
const PlayMusicPage = lazy(() => import('./pages/playMusic/PlayMusicPage'))

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ReactSuspense />}>
          <Route element={<MainLayout />}>
            <Route path='/' element={<MusicPage />} />
            <Route path='/music/play/:id' element={<PlayMusicPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
