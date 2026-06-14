let ideas = [];

fetch('./data.json')
  .then(r => r.json())
  .then(data => {
    ideas = data;
    init();
    render();
  });

function init() {
  const categories = [...new Set(ideas.map(i => i.category))];

  const cat = document.getElementById("category");

  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    cat.appendChild(opt);
  });

  document.getElementById("search").oninput = render;
  document.getElementById("category").onchange = render;
  document.getElementById("status").onchange = render;
}

function getFiltered() {
  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("category").value;
  const status = document.getElementById("status").value;

  return ideas
    .filter(i => {
      return (
        (!search || i.title.toLowerCase().includes(search)) &&
        (!category || i.category === category) &&
        (!status || i.status === status)
      );
    })
    .sort((a, b) => b.score - a.score);
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  getFiltered().forEach(i => {
    const div = document.createElement("div");
    div.className = "idea-card";

    div.innerHTML = `
      <div class="title">${i.title}</div>
      <div class="meta">${i.category} | ${i.status}</div>
      <div class="score">Score: ${i.score}</div>
    `;

    div.onclick = () => showDetail(i);

    list.appendChild(div);
  });
}

function showDetail(i) {
  const d = document.getElementById("detail");

  d.innerHTML = `
    <h2>${i.title}</h2>

    <div class="section">
      <b>امتیاز:</b> ${i.score}
    </div>

    <div class="section">
      <b>دسته:</b> ${i.category}
    </div>

    <div class="section">
      <b>وضعیت:</b> ${i.status}
    </div>

    <div class="section">
      <b>نمونه خارجی:</b>
      <ul>${i.foreign.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <b>نمونه داخلی:</b>
      <ul>${i.iran.length ? i.iran.map(x => `<li>${x}</li>`).join("") : "<li>ندارد</li>"}</ul>
    </div>

    <div class="section">
      <b>تگ‌ها:</b>
      <div>
        ${i.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `;
}