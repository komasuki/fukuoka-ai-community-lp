import { useEffect, useRef } from 'react'

function WhyJoin() {
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

    const cards = sectionRef.current?.querySelectorAll('.problem-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: 'コンテンツは消費される、自分ブランドは積み上がる',
      description: '情報発信は大事。でも、ただ発信するだけでは消費されて終わり。「この人を追いたい」と思われる存在＝自分ブランドを育てることが、長期的な資産になります。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: '一人だと届かない',
      description: 'いくらコンテンツを増やしても、一人では届く範囲は限定的。同じ志を持つ仲間がいれば、お互いの活動を応援し、広げ合えます。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      title: '福岡から、文脈を作る',
      description: '東京にはAIコミュニティがたくさんあるけど、福岡にはまだ少ない。だからこそ「福岡でAIといえば」という文脈を、一緒に作れるチャンスがあります。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: '初期メンバーとして歴史を作る',
      description: 'コミュニティの立ち上げから関わるということは、その歴史と文脈の一部になるということ。「最初からいた人」という唯一無二のポジションを得られます。'
    }
  ]

  return (
    <section id="why" className="problems" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">なぜ今、AIコミュニティ？</h2>
        <p className="section-subtitle">2025年、AIを学ぶなら今がベストタイミング</p>
        <div className="problem-grid">
          {reasons.map((reason, index) => (
            <div
              className="problem-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="problem-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoin
