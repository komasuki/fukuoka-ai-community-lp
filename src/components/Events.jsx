import { useEffect, useRef } from 'react'

function Events() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const upcomingEvents = [
    {
      date: '準備中',
      month: '',
      title: 'キックオフイベント',
      description: 'コミュニティ発足を記念した初回イベント。自己紹介とAIへの想いを共有しましょう。',
      type: 'オフライン',
      location: '福岡市内（調整中）',
      capacity: '先着20名'
    },
    {
      date: '準備中',
      month: '',
      title: 'ChatGPT入門ハンズオン',
      description: '初心者向けのChatGPT体験会。基本的な使い方から、仕事に活かすコツまで。',
      type: 'ハイブリッド',
      location: 'オンライン参加可',
      capacity: '制限なし'
    },
    {
      date: '準備中',
      month: '',
      title: '画像生成AI体験会',
      description: 'Midjourney、Stable Diffusionなど話題の画像生成AIを実際に触ってみる会。',
      type: 'オンライン',
      location: 'Discord',
      capacity: '制限なし'
    }
  ]

  const regularEvents = [
    {
      icon: '💻',
      title: 'もくもく会',
      frequency: '月1回',
      description: '各自が好きなAI学習をする作業会。質問し合える環境で集中して学習。'
    },
    {
      icon: '🎤',
      title: 'LT（ライトニングトーク）大会',
      frequency: '不定期',
      description: 'メンバーが5分間のプレゼンで学んだことや作ったものを共有。'
    },
    {
      icon: '📖',
      title: '読書会',
      frequency: '月1回',
      description: 'AI関連の本や記事を一緒に読んで議論する会。一人では読みきれない本も。'
    },
    {
      icon: '🍻',
      title: '交流会',
      frequency: '不定期',
      description: 'カジュアルに交流する懇親会。AIの話も、それ以外の話も。'
    }
  ]

  return (
    <section id="events" className="cases" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">イベント・活動</h2>
        <p className="section-subtitle">オンライン・オフラインで楽しく学ぶ</p>

        <div className="events-upcoming">
          <h3 className="events-subtitle">開催予定のイベント</h3>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-date-badge">
                  <span className="event-date">{event.date}</span>
                  <span className="event-month">{event.month}</span>
                </div>
                <div className="event-content">
                  <div className="event-tags">
                    <span className={`event-type ${event.type === 'オフライン' ? 'offline' : event.type === 'オンライン' ? 'online' : 'hybrid'}`}>
                      {event.type}
                    </span>
                    <span className="event-capacity">{event.capacity}</span>
                  </div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <div className="event-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events-regular">
          <h3 className="events-subtitle">定期イベント（予定）</h3>
          <div className="regular-grid">
            {regularEvents.map((event, index) => (
              <div className="regular-card" key={index}>
                <span className="regular-icon">{event.icon}</span>
                <div className="regular-content">
                  <h4>{event.title}</h4>
                  <span className="regular-frequency">{event.frequency}</span>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events-cta">
          <p>イベント情報はコミュニティ参加後にお届けします</p>
          <a href="#join" className="btn btn-secondary">
            コミュニティに参加する
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events
