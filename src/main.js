// main.js
// ----------------------------
// Reads live rows from a Google Sheet
// Published as CSV
// ----------------------------

// REPLACE with your published CSV URL
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv';

async function fetchSheet() {
  const response = await fetch(SHEET_URL);
  const csv = await response.text();
  return csv.split('\n').slice(1).map(row => row.split(',')); // simple CSV parser
}

async function renderLabels() {
  const rows = await fetchSheet();
  const container = document.getElementById('labels');
  container.innerHTML = '';

  rows.forEach(row => {
    const div = document.createElement('div');
    div.textContent = `Name: ${row[0]}, Meal: ${row[1]}`;
    container.appendChild(div);
  });
}

// Run the app
renderLabels();
