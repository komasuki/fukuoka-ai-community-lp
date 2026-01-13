function Seminar() {
  const features = [
    '地場企業の具体的な導入事例をご紹介',
    '投資対効果（ROI）の考え方を解説',
    '「まず何から始めるべきか」が明確になる',
    '個別相談の時間もご用意'
  ]

  const materials = [
    { icon: '📄', text: '経営者向け説明資料（1枚PDF）' },
    { icon: '🎥', text: '3分でわかる導入効果動画' },
    { icon: '📊', text: 'ROI試算シート' }
  ]

  return (
    <section className="seminar">
      <div className="container">
        <div className="seminar-grid">
          <div className="seminar-main">
            <span className="seminar-badge">商工会議所・業界団体様との連携</span>
            <h2>経営者向けAI活用説明会</h2>
            <p>
              「AIって結局、うちの会社で何ができるの？」<br />
              そんな疑問にお答えする、経営者様向けの説明会を定期開催しています。
            </p>
            <ul className="seminar-features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-secondary">
              説明会の日程を確認する
            </a>
          </div>

          <div className="seminar-sub">
            <h3>社員の方からのご紹介も歓迎</h3>
            <p>
              「社長にAI導入を提案したいけど、どう説明すればいいかわからない」<br />
              そんな現場の方向けに、上司・経営者向け提案テンプレートをご用意しています。
            </p>
            <div className="material-list">
              {materials.map((material, index) => (
                <div className="material-item" key={index}>
                  <span className="material-icon">{material.icon}</span>
                  <span>{material.text}</span>
                </div>
              ))}
            </div>
            <p className="material-note">
              現場の方と経営者様、一緒にご相談いただくことも可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seminar
