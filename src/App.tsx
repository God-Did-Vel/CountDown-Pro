"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  // Set your target date here
  const targetDate = "2025-12-31T23:59:59"

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
        setIsExpired(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">🚀</div>
            <span className="logo-text">CountDown Pro</span>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Events
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>
          </nav>
          <button className="header-btn">Get Started</button>
        </div>
      </header>

      {/* Main Content */}                                        
      <main className="main">
        <div className="container">
          <div className="hero-section">
            <h1 className="main-title">New Year Countdown 2025</h1>
            <p className="main-subtitle">Get ready for an amazing celebration!</p>
          </div>

          {isExpired ? (
            <div className="expired">
              <h2>🎉 Time's Up!</h2>
              <p>Happy New Year! The countdown has ended.</p>
            </div>
          ) : (
            <div className="timer">
              <div className="time-unit">
                <div className="time-value">{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="time-label">Days</div>
              </div>
              <div className="separator">:</div>
              <div className="time-unit">
                <div className="time-value">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="time-label">Hours</div>
              </div>
              <div className="separator">:</div>
              <div className="time-unit">
                <div className="time-value">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="time-label">Minutes</div>
              </div>
              <div className="separator">:</div>
              <div className="time-unit">
                <div className="time-value">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="time-label">Seconds</div>
              </div>
            </div>
          )}

          <div className="cta-section">
            <p className="cta-text">Don't miss out on this special moment!</p>
            <button className="cta-button">Set Reminder</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-logo-icon">🚀</div>
                <span className="footer-logo-text">CountDown Pro</span>
              </div>
              <p className="footer-description">
                The ultimate countdown timer for all your special events and important moments. Beautiful, reliable, and
                easy to use.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  🐦
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
                <a href="#" className="social-link">
                  💼
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Create Timer</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Newsletter</h3>
              <p className="newsletter-text">Stay updated with our latest features and events!</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {new Date().getFullYear()} CountDown Pro. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
