import React from "react";
import "./Contact.css"; // ใช้ดีไซน์เดิมที่แก้ไขแล้ว

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">📞 ติดต่อเรา</h1>
      
      <div className="contact-info">
        <p><strong>📍 ที่อยู่:</strong> 123/45 ถนนเทพกษัตรีย์, ภูเก็ต</p>
        <p><strong>📧 อีเมล:</strong> 6749010015@phuketvc.ac.th</p>
        <p><strong>📞 โทรศัพท์:</strong> 0638971375</p>
      </div>

      <h2 className="contact-subtitle">💡 เกี่ยวกับเรา</h2>
      <p className="contact-description">
        กินข้าวกับบัง บังทำให้กิน สะอาด อร่อย
        ใครลองกินแล้วรบกวน Comments & Shere ให้บังด้วย
        เดี๋ยวให้บังให้กินฟรี อิอิ ^^
      </p>
    </div>
  );
};

export default Contact;
