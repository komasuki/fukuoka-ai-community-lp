import { useEffect, useRef } from 'react'

function Flow() {
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
      title: '無料相談（30分〜1時間）',
      description: '現状の課題をヒアリングし、AI活用の可能性をご説明します。オンラインでも対面でも対応可能です。',
      note: '※ この段階で費用は一切かかりません'
    },
    {
      step: 'STEP 2',
      title: '現状分析・ご提案（1〜2週間）',
      description: '業務フローを確認し、最も効果が出やすい領域を特定。具体的な導入プランと想定ROIをご提示します。',
      note: '※ ご納得いただけなければお断りいただいて構いません'
    },
    {
      step: 'STEP 3',
      title: 'スモールスタート（1〜2ヶ月）',
      description: 'まずは1つの業務でAIを導入。実際に効果を確認しながら、必要に応じて調整を行います。',
      note: '※ 効果が出なければ、ここで終了も可能です'
    },
    {
      step: 'STEP 4',
      title: '効果検証・展開（継続）',
      description: '効果を数字で確認し、経営判断の材料をご提供。成果が出れば、他の業務への展開をご検討いただけます。',
      note: '※ 月次レポートで効果を可視化'
    }
  ]

  return (
    <section id="flow" className="flow" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">導入の流れ</h2>
        <p className="section-subtitle">まずは小さく始めて、成果を確認しながら進めます</p>

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

export default Flow
