import { useEffect, useRef } from 'react'

function Solutions() {
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

  const solutions = [
    {
      number: '01',
      title: '小さく始めて、確実に成果を出す',
      description: 'いきなり大規模なシステム導入はしません。まずは1つの業務にAIを導入し、効果を実感してから次のステップへ。リスクを最小限に抑えながら進めます。',
      example: '例：見積書作成の自動化から始めて月20時間削減'
    },
    {
      number: '02',
      title: 'ROIを明確にご提示',
      description: '「投資対効果」を数字で明確にお伝えします。導入前に想定効果を試算し、導入後は実際の削減時間・コスト効果を毎月レポート。経営判断に必要な情報をご提供します。',
      example: '例：月額5万円の投資で、月40時間（人件費換算60万円）を削減'
    },
    {
      number: '03',
      title: 'IT担当者がいなくても大丈夫',
      description: '専門のサポートチームが伴走します。導入から運用まで、わからないことは何でもご相談ください。社員の方への操作研修も行います。',
      example: '例：週1回のオンライン相談会で疑問を即解決'
    },
    {
      number: '04',
      title: '地場企業の実績多数',
      description: '福岡・九州を中心に、製造業・建設業・卸売業など50社以上の導入実績。同じような規模・業種の成功事例をご紹介できます。',
      example: '例：福岡県の金属加工業（従業員50名）で導入成功'
    }
  ]

  return (
    <section id="solution" className="solutions" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">私たちが選ばれる理由</h2>
        <p className="section-subtitle">中小製造業に特化した、現場がわかるAI活用支援</p>
        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <div
              className="solution-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className="solution-number">{solution.number}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="solution-example">
                <span>{solution.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
