import { useState, useEffect, useRef } from 'react'

function Cases() {
  const [activeCase, setActiveCase] = useState(0)
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

  const cases = [
    {
      industry: '金属加工業',
      location: '福岡県 / 従業員42名',
      result: { value: '月35時間', label: 'の業務削減' },
      title: '見積書作成をAIで自動化。熟練者の知見をデジタル化',
      before: [
        '見積作成に1件あたり2時間かかっていた',
        'ベテラン社員しか正確な見積ができなかった',
        '過去の見積データが活用できていなかった'
      ],
      after: [
        '見積作成時間が1件30分に短縮',
        '若手社員でも精度の高い見積が可能に',
        '年間420万円のコスト削減効果'
      ],
      voice: '正直、最初は半信半疑でした。でも、まず1つの業務から始めてみようと言われて踏み切りました。3ヶ月で効果が出て、今では他の業務にも展開しています。',
      name: '代表取締役 K様'
    },
    {
      industry: '機械部品製造',
      location: '佐賀県 / 従業員28名',
      result: { value: '月50時間', label: 'の業務削減' },
      title: '日報・報告書作成を自動化。現場の負担を大幅軽減',
      before: [
        '毎日の日報作成が現場の負担になっていた',
        '報告書のフォーマットがバラバラだった',
        'データの集計・分析に時間がかかっていた'
      ],
      after: [
        '音声入力で日報作成が5分で完了',
        '自動でフォーマット統一・データ集計',
        '現場からの不満の声が激減'
      ],
      voice: 'うちにはIT担当がいないので不安でしたが、手取り足取りサポートしてもらえて助かりました。今では現場の若手が率先して使いこなしています。',
      name: '代表取締役 M様'
    },
    {
      industry: 'プレス加工',
      location: '熊本県 / 従業員55名',
      result: { value: '年間600万円', label: 'のコスト削減' },
      title: '受発注業務をAI化。ミスゼロ・残業ゼロを実現',
      before: [
        'FAXやメールでの受注処理に時間がかかる',
        '入力ミスによるクレームが月に数件発生',
        '月末は残業が常態化していた'
      ],
      after: [
        '受注データを自動でシステムに取り込み',
        '入力ミスがゼロに',
        '事務担当者の残業がほぼゼロに'
      ],
      voice: '商工会議所のセミナーで知りました。地元の企業の事例を見せてもらえたので、うちでもできると確信が持てました。',
      name: '代表取締役 S様'
    }
  ]

  return (
    <section id="cases" className="cases" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">導入事例</h2>
        <p className="section-subtitle">同業・同規模の企業様での成功事例</p>

        <div className="case-tabs">
          {cases.map((c, index) => (
            <button
              key={index}
              className={`case-tab ${activeCase === index ? 'active' : ''}`}
              onClick={() => setActiveCase(index)}
            >
              <span className="tab-industry">{c.industry}</span>
              <span className="tab-location">{c.location}</span>
            </button>
          ))}
        </div>

        <div className="case-content">
          {cases.map((c, index) => (
            <div
              key={index}
              className={`case-card ${activeCase === index ? 'active' : ''}`}
            >
              <div className="case-header">
                <div className="case-info">
                  <span className="case-industry">{c.industry}</span>
                  <span className="case-location">{c.location}</span>
                </div>
                <div className="case-result">
                  <span className="result-value">{c.result.value}</span>
                  <span className="result-label">{c.result.label}</span>
                </div>
              </div>

              <h3 className="case-title">{c.title}</h3>

              <div className="case-comparison">
                <div className="case-before">
                  <h4>導入前の課題</h4>
                  <ul>
                    {c.before.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="case-after">
                  <h4>導入後の効果</h4>
                  <ul>
                    {c.after.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-voice">
                <div className="voice-quote">"</div>
                <p>{c.voice}</p>
                <span className="voice-name">— {c.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
