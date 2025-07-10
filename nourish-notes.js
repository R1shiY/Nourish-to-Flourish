// Placeholder articles data
const articles = [
  {
    id: 1,
    title: "Understanding Food Labels: What Do All Those Ingredients Mean?",
    excerpt: "Learn how to decode food labels and spot hidden additives, preservatives, and chemicals in your everyday groceries.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&h=400&fit=crop",
    date: "2024-06-01",
    keywords: ["labels", "ingredients", "additives"]
  },
  {
    id: 2,
    title: "The Truth About Artificial Sweeteners",
    excerpt: "Are artificial sweeteners safe? We break down the latest research and what it means for your health.",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=400&fit=crop",
    date: "2024-05-20",
    keywords: ["sweeteners", "research", "health"]
  },
  {
    id: 3,
    title: "Natural vs. Artificial Flavors: What's the Difference?",
    excerpt: "Explore the science behind natural and artificial flavors, and how to make informed choices at the store.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop",
    date: "2024-05-10",
    keywords: ["flavors", "natural", "artificial"]
  },
  {
    id: 4,
    title: "How to Avoid Harmful Additives in Everyday Foods",
    excerpt: "A practical guide to identifying and avoiding the most common harmful food additives.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    date: "2024-04-28",
    keywords: ["additives", "guide", "health"]
  },
  {
    id: 5,
    title: "Volunteer Spotlight: Meet Emily, Our Community Educator",
    excerpt: "Emily shares her journey and why she's passionate about ingredient transparency.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
    date: "2024-04-15",
    keywords: ["volunteer", "community", "education"]
  }
];

// Render articles
function renderArticles(list) {
  const container = document.getElementById('blogArticles');
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<p style="color:#5a6c7d;text-align:center;">No articles found.</p>';
    return;
  }
  container.innerHTML = list.map(article => `
    <div class="article-card">
      <img class="article-card-img" src="${article.image}" alt="${article.title}">
      <div class="article-card-body">
        <div class="article-card-title">${article.title}</div>
        <div class="article-card-meta">${formatDate(article.date)}${article.keywords && article.keywords.length ? ' &mdash; ' + article.keywords.map(k=>`<span style=\"color:#4a7c59;font-size:0.95em;\">#${k}</span>`).join(' ') : ''}</div>
        <div class="article-card-excerpt">${article.excerpt}</div>
        <div class="article-card-footer">
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Format date as Month Day, Year
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

// Search and filter logic
function filterAndRenderArticles() {
  const searchInput = document.getElementById('blogSearchInput').value.trim().toLowerCase();
  const sortValue = document.getElementById('sortSelect').value;
  let filtered = articles.filter(article => {
    const inTitle = article.title.toLowerCase().includes(searchInput);
    const inKeywords = article.keywords.some(k => k.toLowerCase().includes(searchInput));
    const inExcerpt = article.excerpt.toLowerCase().includes(searchInput);
    return inTitle || inKeywords || inExcerpt;
  });
  // Sort
  if (sortValue === 'date-desc') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortValue === 'date-asc') {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortValue === 'title-az') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === 'title-za') {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }
  renderArticles(filtered);
}

// No articles yet — coming soon.
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('blogArticles');
  if (container) {
    container.innerHTML = '<div class="blog-placeholder">No articles yet — coming soon.</div><div class="blog-controls-disabled-msg">Search and filter will be available once articles are added.</div>';
  }
  // Disable search/filter controls
  const searchInput = document.getElementById('blogSearchInput');
  const searchBtn = document.getElementById('blogSearchBtn');
  const sortSelect = document.getElementById('sortSelect');
  if (searchInput) searchInput.disabled = true;
  if (searchBtn) searchBtn.disabled = true;
  if (sortSelect) sortSelect.disabled = true;
  // Go to News Page button - functional navigation
  const goToNewsPageBtn = document.getElementById('goToNewsPageBtn');
  if (goToNewsPageBtn) {
    goToNewsPageBtn.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = 'news.html';
    });
  }
}); 