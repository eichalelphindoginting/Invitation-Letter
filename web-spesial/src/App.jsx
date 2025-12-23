import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleOpenEnvelope = () => {
    setIsOpen(true)
    // Coba play musik saat amplop dibuka
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Jika autoplay gagal, user harus klik tombol
          console.log('Autoplay prevented, please click the music button')
        })
        setIsPlaying(true)
      }
    }, 500)
  }

  return (
    <div className="invitation-container">
      {/* Snowflakes falling animation */}
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>

      {/* Main invitation card */}
      <div className={`invitation-card ${isOpen ? 'open' : ''}`}>
        {/* Front of envelope */}
        {!isOpen && (
          <div className="envelope-front" onClick={handleOpenEnvelope}>
            <div className="envelope-top"></div>
            <div className="seal">
              <span className="seal-icon">🎄</span>
            </div>
            <p className="click-hint">Klik untuk membuka</p>
          </div>
        )}

        {/* Letter content */}
        {isOpen && (
          <div className="letter-content">
            <div className="letter-header">
              <div className="ornament">✦</div>
              <h1 className="title">Christmas Invitation</h1>
              <div className="divider"></div>
            </div>

            <div className="letter-body">
              {/* To and From Section */}
              <div className="to-from-section">
                <p className="to-text">
                  <span className="label">To:</span> <strong>Gresia Enzelina Hutahean</strong>
                </p>
                <p className="from-text">
                  <span className="label">From:</span> <strong>Eichal Elphindo Ginting</strong>
                </p>
              </div>

              <div className="christmas-icon">❄</div>
              
              <p className="greeting">
                Dear Gresia, <br />
                Maukah kamu menemaniku merayakan Malam Natal dan juga Natal di :
              </p>

              {/* Event Details */}
              <div className="event-details-card">
                <div className="detail-row">
                  <span className="detail-icon">✧</span>
                  <div className="detail-info">
                    <span className="detail-label">Tanggal</span>
                    <span className="detail-value">24 - 25 Desember 2025</span>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-icon">✧</span>
                  <div className="detail-info">
                    <span className="detail-label">Waktu</span>
                    <span className="detail-value">
                      24 Des: 18.00 WIB - Selesai<br/>
                      25 Des: 08.00 WIB - Selesai
                    </span>
                  </div>
                </div>

                <div className="detail-row">
                  <span className="detail-icon">✧</span>
                  <div className="detail-info">
                    <span className="detail-label">Tempat</span>
                    <span className="detail-value">
                      Gereja Katolik Santa Maria Immaculata<br/>
                      <a 
                        href="https://maps.app.goo.gl/9VXFddm2xfsHanY98" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="location-link"
                      >
                        ↗ Lihat di Google Maps
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="heart-decoration">
                <span>✦</span>
                <span>❄</span>
                <span>✦</span>
              </div>

              <div className="response-section">
                <p className="response-text">
                  Konfirmasi kehadiranmu:
                </p>
                <div className="button-group">
                  <a 
                    href="https://wa.me/6285709269237?text=Mau!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="response-button yes-button"
                  >
                    ✓ Mau
                  </a>
                  <a 
                    href="https://wa.me/6285709269237?text=%20Gak%20bisa!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="response-button no-button"
                  >
                    ✗ Gak Mau
                  </a>
                </div>
                <p className="hope-text">
                  I hope you will say yes ✦
                </p>
              </div>

              <div className="footer-ornament">
                <span>·</span>
                <span>✦</span>
                <span>·</span>
              </div>
            </div>

            {/* Background Music */}
            <audio ref={audioRef} loop>
              <source src="/all-i-want-for-christmas..mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Music Control Button */}
            <button className="music-control" onClick={toggleMusic}>
              {isPlaying ? '🔊 Pause Music' : '🎵 Play Music'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
