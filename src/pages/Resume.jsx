export default function Resume() {
  return (
    <main className="container py-5">
      <h1 className="fw-bold mb-3">Resume</h1>
      <p className="mb-3">
        Download: <a href="/resume.pdf" target="_blank" rel="noreferrer">resume.pdf</a>
      </p>
      <iframe
        src="/resume.pdf"
        title="Resume"
        style={{ width: '100%', height: '80vh', border: '1px solid #e5e7eb' }}
      />
    </main>
  )
}
