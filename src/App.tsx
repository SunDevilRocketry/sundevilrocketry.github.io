import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { MembersPage } from './pages/MembersPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <title>Sun Devil Rocketry</title>
      </head>
      <div className="site-shell">
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
