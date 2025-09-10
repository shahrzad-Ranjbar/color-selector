import React, { useState, useEffect } from "react";
import "./../assets/css/styles.css";
export default function ColorSelector() {
  const [bg, setBg] = useState("linear-gradient(to right, #ff7e5f, #feb47b)");

  function changeBgHandler(event) {
    setBg(event.target.value);
  }

  useEffect(() => {
    document.body.style.background = bg;
    document.body.style.transition = "background 0.8s ease";
  }, [bg]);

  return (
    <div className="container">
      <h1 className="title">🎨 انتخاب رنگ پس‌زمینه با شهرزاد رنجبر 🎨</h1>
      <div className="select-wrapper">
        <select className="select-box" onChange={changeBgHandler} value={bg}>
          <option value="red">🔴 قرمز</option>
          <option value="blue">🔵 آبی</option>
          <option value="green">🟢 سبز</option>
          <option value="pink">🌸 صورتی</option>
          <option value="yellow">🟡 زرد</option>
          <option value="white">⚪ سفید</option>
          <option value="purple">🟣 بنفش</option>
          <option value="linear-gradient(to right, #ff7e5f, #feb47b)">
            🌅 گرادینت نارنجی
          </option>
          <option value="linear-gradient(to right, #4facfe, #00f2fe)">
            💧 گرادینت آبی
          </option>
          <option value="linear-gradient(to right, #a18cd1, #fbc2eb)">
            💜 گرادینت بنفش
          </option>
        </select>
        <span className="arrow">▼</span>
      </div>
    </div>
  );
}
