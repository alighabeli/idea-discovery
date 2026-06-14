const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const IDEAS_DIR = path.join(__dirname, "../ideas");
const OUTPUT_FILE = path.join(__dirname, "../dashboard/data.json");

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
        id: fm.id,
        title: fm.title,
        category: fm.category,
        status: fm.status,
        score,
        tags: fm.tags || [],
        foreign: fm.foreign_examples || [],
        iran: fm.iran_examples || []
      };
    });
}

const ideas = loadIdeas();

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(ideas, null, 2));

console.log("Exported:", ideas.length, "ideas");