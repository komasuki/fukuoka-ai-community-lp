import { useEffect, useRef } from 'react'

function Benefits() {
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

    const cards = sectionRef.current?.querySelectorAll('.solution-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      number: '01',
      title: '追いたい仲間ができる',
      description: '「この人の次の一手が気になる」そう思える仲間と出会えます。お互いの挑戦を見守り、応援し合う関係。それがあなた自身の自分ブランドを育てる土壌になります。',
      example: '成功も失敗も共有し合える、長期的な関係づくり'
    },
    {
      number: '02',
      title: '発信が届くようになる',
      description: '一人で発信しても届く範囲は限定的。でも、コミュニティのメンバーが相互に応援・シェアすることで、あなたの発信はより遠くまで届くようになります。',
      example: 'メンバー同士のSNS相互フォロー、コンテンツ拡散協力'
    },
    {
      number: '03',
      title: '実践と発信の場がある',
      description: 'ただ学ぶだけでなく、学んだことを発信する機会を提供。LT大会や勉強会での登壇経験が、あなたの自分ブランドとして積み上がっていきます。',
      example: '5分LT、ブログ執筆会、YouTube企画など'
    },
    {
      number: '04',
      title: '文脈と歴史を共有できる',
      description: '「誰が」「なぜ」やっているのか。その文脈こそが差別化の本質。コミュニティの歴史を共に作ることで、あなた自身のストーリーも豊かになります。',
      example: '「福岡AI Community立ち上げメンバー」という文脈'
    }
  ]

  return (
    <section id="benefits" className="solutions" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">参加するメリット</h2>
        <p className="section-subtitle">Fukuoka AI コミュニティで得られること</p>
        <div className="solution-grid">
          {benefits.map((benefit, index) => (
            <div
              className="solution-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="solution-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <div className="solution-example">
                <span>{benefit.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
