* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', Arial, sans-serif; background: #f0f4f8; color: #222; }

/* Language switcher */
.lang-switcher {
  position: sticky; top: 0; z-index: 100;
  background: #1a3a6b;
  display: flex; justify-content: flex-end; gap: 6px;
  padding: 8px 20px;
}
.lang-btn {
  padding: 5px 14px;
  border: 1.5px solid rgba(255,255,255,0.4);
  border-radius: 20px;
  background: transparent;
  color: rgba(255,255,255,0.8);
  font-size: 0.85rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.lang-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }
.lang-btn.active { background: #fff; color: #1a3a6b; border-color: #fff; }

/* Layout */
.container { max-width: 820px; margin: 0 auto; padding: 0 16px 40px; }

.header {
  background: linear-gradient(135deg, #1a3a6b, #2e6da4);
  color: white; padding: 24px 28px; text-align: center;
}
.header h1 { font-size: 1.3rem; margin-bottom: 6px; }
.header p  { font-size: 0.95rem; opacity: 0.85; }

.form-body {
  background: white; padding: 28px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.section { margin-bottom: 32px; }

.section-title {
  background: #1a3a6b; color: white;
  padding: 10px 16px; border-radius: 8px;
  font-size: 0.95rem; font-weight: bold; margin-bottom: 18px;
}

/* Fields & labels */
.field { margin-bottom: 16px; }

label {
  display: block; font-weight: 600;
  font-size: 0.88rem; color: #1a3a6b; margin-bottom: 5px;
}
label.section-label { font-size: 0.95rem; margin-bottom: 8px; }

input[type="text"], input[type="email"],
input[type="date"], input[type="number"],
select, textarea {
  width: 100%; padding: 9px 12px;
  border: 1.5px solid #c8d6e5; border-radius: 7px;
  font-size: 0.92rem; background: #f8fafc;
  transition: border 0.2s;
}
input:focus, select:focus, textarea:focus {
  outline: none; border-color: #2e6da4; background: #fff;
}
textarea { resize: vertical; min-height: 70px; }

/* Grids */
.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }

/* Note box */
.note {
  background: #eef4fb; border-left: 4px solid #2e6da4;
  padding: 10px 14px; border-radius: 0 8px 8px 0;
  font-size: 0.85rem; color: #444; margin-bottom: 16px; line-height: 1.5;
}

/* Radio / checkbox */
.radio-group { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 6px; }
.radio-group label {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.9rem; font-weight: normal; margin-bottom: 0; cursor: pointer;
}
.checkbox-list { display: flex; flex-direction: column; gap: 8px; margin-top: 6px; }
.checkbox-list label {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.88rem; font-weight: normal;
  cursor: pointer; line-height: 1.4; margin-bottom: 0;
}
.checkbox-list input[type="radio"] { margin-top: 2px; flex-shrink: 0; }

/* Family cards */
.family-card {
  border: 1.5px solid #c8d6e5; border-radius: 10px;
  margin-bottom: 14px; overflow: hidden;
}
.family-card-header {
  background: #1a3a6b; color: white;
  padding: 8px 14px;
  display: flex; justify-content: space-between; align-items: center;
}
.family-card-header .card-num { font-weight: bold; font-size: 0.9rem; }
.family-card-body {
  padding: 14px; background: #fff;
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
}
.family-card-body .field-full { grid-column: 1 / -1; }
.family-card label {
  font-size: 0.82rem; font-weight: 600;
  color: #1a3a6b; margin-bottom: 4px;
}
.family-card input[type="text"],
.family-card input[type="date"],
.family-card select {
  width: 100%; padding: 7px 10px;
  border: 1.5px solid #c8d6e5; border-radius: 6px;
  font-size: 0.88rem; background: #f8fafc;
}
.family-card input:focus,
.family-card select:focus { border-color: #2e6da4; outline: none; background: #fff; }

/* Buttons */
.add-row-btn {
  margin-top: 10px;
  background: #e8f0fb; border: 1.5px dashed #2e6da4;
  color: #1a3a6b; padding: 8px 18px; border-radius: 7px;
  cursor: pointer; font-size: 0.85rem; font-weight: 600;
}
.add-row-btn:hover { background: #d0e4f7; }

.del-row-btn {
  background: #fde8e8; border: 1.5px solid #e74c3c;
  color: #c0392b; padding: 4px 12px; border-radius: 6px;
  cursor: pointer; font-size: 0.82rem; font-weight: bold;
}
.del-row-btn:hover { background: #f5b7b1; }

.submit-btn {
  width: 100%; padding: 14px;
  background: linear-gradient(135deg, #1a3a6b, #2e6da4);
  color: white; border: none; border-radius: 9px;
  font-size: 1.05rem; font-weight: bold;
  cursor: pointer; margin-top: 10px; transition: opacity 0.2s;
}
.submit-btn:hover { opacity: 0.9; }
.submit-btn:disabled {
  background: #b0bec5; cursor: not-allowed; opacity: 1;
}

.divider { border: none; border-top: 1.5px solid #e0e8f0; margin: 20px 0; }

/* Responsive */
@media (max-width: 600px) {
  .row2, .row3 { grid-template-columns: 1fr; }
  .family-card-body { grid-template-columns: 1fr; }
}

/* visual cue for required employer email */
#employerEmailRow.required input {
  border-color: #e74c3c;
}

/* spinner for submit */
.spinner {
  display: inline-block;
  width: 16px; height: 16px;
  border: 2px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;
  vertical-align: middle;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
