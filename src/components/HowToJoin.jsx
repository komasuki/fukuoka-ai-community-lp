import { useEffect, useRef } from 'react'

function HowToJoin() {
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

    const items = sectionRef.current?.querySelectorAll('.flow-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      step: 'STEP 1',
      title: '参加フォームに登録',
      description: 'このページの参加フォームからメールアドレスを登録。30秒で完了します。',
      note: '※ 完全無料・退会も自由'
    },
    {
      step: 'STEP 2',
      title: 'Discordに参加',
      description: '登録後、Discordの招待リンクが届きます。自己紹介チャンネルで挨拶してみましょう。',
      note: '※ Discordは無料で使えます'
    },
    {
      step: 'STEP 3',
      title: 'イベントに参加',
      description: '興味のあるイベントに参加してみましょう。オンライン参加OK、見学だけでもOKです。',
      note: '※ 強制参加ではありません'
    },
    {
      step: 'STEP 4',
      title: '仲間と一緒に成長',
      description: 'わからないことは質問、できたことは共有。みんなで楽しくAIを学んでいきましょう。',
      note: '※ 初心者大歓迎です'
    }
  ]

  return (
    <section id="how" className="flow" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">参加の流れ</h2>
        <p className="section-subtitle">たった4ステップで仲間になれます</p>

        <div className="flow-timeline">
          {steps.map((item, index) => (
            <div
              className="flow-item"
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flow-marker">
                <span className="flow-step">{item.step}</span>
                <div className="flow-line"></div>
              </div>
              <div className="flow-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="flow-note">{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToJoin
