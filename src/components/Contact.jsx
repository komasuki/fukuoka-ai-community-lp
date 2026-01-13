import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    experience: '',
    interests: [],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value)
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 送信シミュレーション
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const interests = [
    { value: 'chatgpt', label: 'ChatGPT・対話AI' },
    { value: 'image', label: '画像生成AI' },
    { value: 'voice', label: '音声・動画AI' },
    { value: 'coding', label: 'プログラミング×AI' },
    { value: 'business', label: 'ビジネス活用' },
    { value: 'other', label: 'その他・まだわからない' }
  ]

  const benefits = [
    '参加費完全無料',
    '初心者大歓迎',
    'いつでも退会OK'
  ]

  if (isSubmitted) {
    return (
      <section id="join" className="contact">
        <div className="container">
          <div className="contact-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2>登録ありがとうございます！</h2>
            <p>
              メールアドレスにDiscordの招待リンクをお送りします。<br />
              届かない場合は迷惑メールフォルダをご確認ください。
            </p>
            <div className="success-next">
              <h3>次のステップ</h3>
              <ol>
                <li>メールを確認してDiscordに参加</li>
                <li>自己紹介チャンネルで挨拶</li>
                <li>興味のあるチャンネルを覗いてみる</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="contact">
      <div className="container">
        <h2 className="section-title">コミュニティに参加する</h2>
        <p className="section-subtitle">
          福岡でAIを学ぶ仲間になりませんか？<br />
          初心者でも、経験者でも、AIに興味がある方ならどなたでも歓迎です。
        </p>

        <div className="contact-benefits">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <span className="benefit-check">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">
                お名前（ニックネームOK） <span className="required">必須</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="福岡太郎"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                メールアドレス <span className="required">必須</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="occupation">ご職業</label>
              <select
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              >
                <option value="">選択してください</option>
                <option value="student">学生</option>
                <option value="engineer">エンジニア</option>
                <option value="designer">デザイナー</option>
                <option value="marketer">マーケター</option>
                <option value="sales">営業</option>
                <option value="manager">経営者・管理職</option>
                <option value="freelance">フリーランス</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="experience">AIの経験</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">選択してください</option>
                <option value="none">まったく触ったことがない</option>
                <option value="beginner">少し使ったことがある</option>
                <option value="intermediate">日常的に使っている</option>
                <option value="advanced">仕事で活用している</option>
                <option value="expert">AIを開発している</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>興味のある分野（複数選択可）</label>
            <div className="checkbox-group">
              {interests.map((interest) => (
                <label className="checkbox-label" key={interest.value}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest.value}
                    checked={formData.interests.includes(interest.value)}
                    onChange={handleChange}
                  />
                  <span className="checkbox-custom"></span>
                  <span>{interest.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">ひとこと（任意）</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="参加のきっかけや、やってみたいことなど、なんでもどうぞ"
            ></textarea>
          </div>

          <div className="form-submit">
            <button
              type="submit"
              className="btn btn-primary btn-large"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  登録中...
                </>
              ) : (
                '無料で参加する'
              )}
            </button>
            <p className="form-note">
              ※ 登録後、Discordの招待リンクをメールでお送りします
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
