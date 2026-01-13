import { useEffect, useRef } from 'react'

function ROI() {
  const tableRef = useRef(null)

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

    if (tableRef.current) {
      observer.observe(tableRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const data = [
    { area: '見積書・請求書作成', time: '20〜40時間', cost: '240〜480万円', period: '1〜2ヶ月' },
    { area: '日報・報告書作成', time: '30〜50時間', cost: '360〜600万円', period: '1ヶ月' },
    { area: '受発注業務', time: '40〜60時間', cost: '480〜720万円', period: '2〜3ヶ月' },
    { area: '問い合わせ対応', time: '20〜30時間', cost: '240〜360万円', period: '1〜2ヶ月' },
    { area: '技術ノウハウのDB化', time: '—', cost: '属人化リスク解消', period: '3〜6ヶ月' }
  ]

  return (
    <section className="roi">
      <div className="container">
        <h2 className="section-title">導入効果の目安</h2>
        <p className="section-subtitle">投資対効果（ROI）を明確にお伝えします</p>

        <div className="roi-table-wrapper" ref={tableRef}>
          <table className="roi-table">
            <thead>
              <tr>
                <th>業務領域</th>
                <th>削減時間（月）</th>
                <th>コスト効果（年間）</th>
                <th>導入期間</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <td>{row.area}</td>
                  <td>{row.time}</td>
                  <td className="cost-cell">{row.cost}</td>
                  <td>{row.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="roi-note">
          ※ 効果は企業規模・業務内容により異なります。詳細は無料相談でお見積りいたします。
        </p>
      </div>
    </section>
  )
}

export default ROI
