const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const IDEAS_DIR = path.join(__dirname, "../ideas");

const args = process.argv.slice(2);

const filterCategory = args.find(a => a.startsWith("--cat="))?.split("=")[1];
const filterStatus = args.find(a => a.startsWith("--status="))?.split("=")[1];
const topN = parseInt(args.find(a => a.startsWith("--top="))?.split("=")[1] || "10");
const search = args.find(a => a.startsWith("--search="))?.split("=")[1];


function loadIdeas() {
  const files = fs.readdirSync(IDEAS_DIR);

  return files
    .filter(f => f.endsWith(".md"))
    .map(file => {
      const content = fs.readFileSync(path.join(IDEAS_DIR, file), "utf8");
      const parsed = matter(content);

      const fm = parsed.data;

      const score =
        (fm.market_size || 0) +
        (fm.pain_level || 0) +
        (fm.willingness_to_pay || 0) +
        (fm.competition_gap || 0) +
        (fm.founder_fit || 0);

      return {
        title: fm.title,
        category: fm.category,
        status: fm.status,
        score,
      };
    });
    const args = process.argv.slice(2);

const filterCategory = args.find(a => a.startsWith("--cat="))?.split("=")[1];
const filterStatus = args.find(a => a.startsWith("--status="))?.split("=")[1];
const topN = parseInt(args.find(a => a.startsWith("--top="))?.split("=")[1] || "10");
const search = args.find(a => a.startsWith("--search="))?.split("=")[1];
}

function render(ideas) {
  ideas
  .sort((a, b) => b.score - a.score)
  .slice(0, topN)
  console.log("\nIDEA DISCOVERY DASHBOARD\n");

  console.log("Total Ideas:", ideas.length);

  console.log("\nTop Ideas:");
  ideas
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .forEach(i => {
      console.log(`- ${i.title}  |  ${i.score}`);
    });

  const categoryMap = {};
  ideas.forEach(i => {
    categoryMap[i.category] = (categoryMap[i.category] || 0) + 1;
  });

  console.log("\nBy Category:");
  Object.entries(categoryMap).forEach(([k, v]) => {
    console.log(`- ${k}: ${v}`);
  });

  console.log("");
}

const ideas = loadIdeas();
render(ideas);