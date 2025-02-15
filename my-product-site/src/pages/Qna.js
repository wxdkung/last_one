import React, { useState } from "react";
import "./Qna.css"; // สร้างไฟล์นี้เพื่อสไตล์เฉพาะของหน้า Q&A

const Qna = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && question.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // ให้ popup หายไปอัตโนมัติ
      setName("");
      setQuestion("");
    }
  };

  return (
    <div className="qna-container">
      <h1 className="qna-title">💬 ถาม-ตอบ (Q&A)</h1>
      <form className="qna-form" onSubmit={handleSubmit}>
        <label>ชื่อของคุณ:</label>
        <input
          type="text"
          placeholder="ใส่ชื่อของคุณ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>คำถามของคุณ:</label>
        <textarea
          placeholder="พิมพ์คำถามของคุณที่นี่..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <button type="submit" className="qna-submit">ส่งคำถาม</button>
      </form>

      {submitted && <div className="qna-popup">✅ รับข้อมูลแล้ว!</div>}
    </div>
  );
};

export default Qna;
