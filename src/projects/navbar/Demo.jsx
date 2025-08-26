import NavBar from './components/NavBar'
import LayoutExamples from './components/LayoutExamples'

export default function Demo() {
  return (
    <>
      <NavBar />
      <main>
        <header className="py-5 border-bottom">
          <div className="container">
            <h1 className="fw-bold">React Navbar + Layout Kit</h1>
            <p className="text-body mb-0">
              Bootstrap 5 offcanvas navigation, dark mode toggle (localStorage), and ready-to-copy layouts.
            </p>
          </div>
        </header>
        <LayoutExamples />
        <footer className="py-4 border-top">
          <div className="container small text-body">
            Built with React + Vite + Bootstrap.
          </div>
        </footer>
      </main>
    </>
  )
}
