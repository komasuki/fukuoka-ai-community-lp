import { useEffect, useRef } from 'react'

function Hero() {
  const statsRef = useRef([])

  useEffect(() => {
    const animateNumber = (element, target) => {
      const duration = 2000
      const startTime = performance.now()

      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(target * easeOut)
        element.textContent = current
        if (progress < 1) requestAnimationFrame(update)
      }

      requestAnimationFrame(update)
    }

    const timer = setTimeout(() => {
      statsRef.current.forEach((el) => {
        if (el) {
          const target = parseInt(el.dataset.target)
          animateNumber(el, target)
        }
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: 0, unit: '人', label: '現在のメンバー', note: '一緒に始めよう' },
    { value: 2025, unit: '年', label: '福岡から始動', note: '' },
    { value: 100, unit: '%', label: '参加無料', note: '' }
  ]

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <span className="badge-pulse"></span>
            2025年、福岡から始まる
          </div>
          <h1 className="hero-title fade-in delay-1">
            <span className="gradient-text">AI × 福岡</span><br />
            一緒に学び、<br />
            一緒に創る仲間を募集中
          </h1>
          <p className="hero-description fade-in delay-2">
            AIに興味はあるけど、何から始めればいいかわからない。<br />
            一人で学ぶのは心細い。一人で発信しても届かない。<br />
            <strong>だから、福岡で仲間と一緒に学び、発信し、<br />
            お互いのIPを育てていくコミュニティを作ります。</strong>
          </p>
          <div className="hero-stats fade-in delay-3">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-value">
                  {stat.note ? (
                    <span className="stat-note">{stat.note}</span>
                  ) : (
                    <>
                      <span
                        className="stat-number"
                        data-target={stat.value}
                        ref={(el) => (statsRef.current[index] = el)}
                      >
                        0
                      </span>
                      <span className="stat-unit">{stat.unit}</span>
                    </>
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-cta fade-in delay-4">
            <a href="#join" className="btn btn-primary btn-large">
              <span>コミュニティに参加する</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="cta-note">※ 参加費無料・初心者大歓迎</p>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
