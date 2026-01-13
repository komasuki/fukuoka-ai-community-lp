import { useEffect, useRef } from 'react'

function FounderMessage() {
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

    const elements = sectionRef.current?.querySelectorAll('.founder-content, .founder-quote')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="founder" className="founder-message" ref={sectionRef}>
      <div className="container">
        <div className="founder-wrapper">
          <div className="founder-content">
            <div className="founder-label">なぜ、このコミュニティを始めるのか</div>
            <h2 className="founder-title">
              「誰が」「なぜ」やるのか。<br />
              それが、これからの時代の<br />
              差別化になる。
            </h2>
            <div className="founder-text">
              <p>
                情報もツールもコモディティ化した今、
                機能や価格だけでは差別化できない時代になりました。
              </p>
              <p>
                残る差別化要素は、<strong>「誰がやっているのか」「なぜやっているのか」</strong>という
                歴史や文脈そのもの。
              </p>
              <p>
                コンテンツは消費される。でも、<strong>自分ブランドは積み上がる。</strong>
              </p>
              <p>
                フォロワー数ではなく、<br />
                「この人の次の一手が気になる」<br />
                「成功も失敗も含めて追いたい」<br />
                そう思われる存在になること。
              </p>
              <p>
                それは単なるSNS戦略ではなく、<br />
                <strong>長期的な人生や事業の戦略</strong>に近いものです。
              </p>
            </div>
          </div>
          <div className="founder-quote">
            <div className="quote-mark">"</div>
            <blockquote>
              このコミュニティは、<br />
              AIを学ぶ場であると同時に、<br />
              <strong>あなた自身の自分ブランドを<br />
              仲間と一緒に育てていく場</strong><br />
              でありたいと思っています。
            </blockquote>
            <div className="quote-context">
              <p>
                一人で発信しても届かない。<br />
                でも、同じ志を持つ仲間と一緒なら、<br />
                お互いの活動を応援し、広げ合える。
              </p>
              <p>
                福岡という地で、<br />
                AIを軸に、長期で追いたいと思える<br />
                人たちが集まるコミュニティを作りたい。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderMessage
