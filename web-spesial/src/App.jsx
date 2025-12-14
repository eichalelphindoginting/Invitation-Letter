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
              <div className="ornament">💌</div>
              <h1 className="title">Invitation Letter</h1>
              <div className="divider"></div>
            </div>

            <div className="letter-body">
              <div className="christmas-icon">🎄</div>
              
              <p className="greeting">
                Halo <strong>Gresia Enzelika Hutahean</strong>,<br /><br />
                maukah kamu pergi bersamaku ke malam natal dan juga natal di tanggal 
                <strong> 24 dan 25 Desember</strong> untuk bersama merayakan natal?
              </p>

              <div className="heart-decoration">
                <span>💝</span>
                <span>✨</span>
                <span>💝</span>
              </div>

              <div className="response-section">
                <p className="response-text">
                  Ketik <strong className="yes-text">Yes</strong> kalau kamu mau<br />
                  dan ketik <strong className="no-text">No</strong> kalau gak mau
                </p>
                <p className="hope-text">
                  I hope you will say yes 💕
                </p>
              </div>

              <div className="footer-ornament">
                <span>✨</span>
                <span>🎄</span>
                <span>✨</span>
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
