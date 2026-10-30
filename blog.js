/* =========================================
   記念祭ブログ
   記事の追加・一覧表示・詳細表示
========================================= */

/*
  記事を追加するときは、この articles 配列に
  新しい記事オブジェクトを追加してください。

  新しい記事は一覧の先頭に表示されます。
*/

const articles = [
  {
    id: "festival-start",

    title: "記念祭の準備がスタート！",

    date: "2026-10-30",

    image: "background.png",

    description:
      "記念祭に向けた準備の様子や、企画が完成するまでの活動を紹介していきます。",

    content: `
      <p>
        こんにちは！
        こちらでは、記念祭に向けて活動する生徒たちの様子を紹介していきます。
      </p>

      <h2>制作の裏側をお届けします</h2>

      <p>
        各クラスの企画や制作の進捗など、
        去年までとは違い、準備日の風景／様子などもお伝えしていきます。
      </p>

      <p>
        これからの記事も、ぜひ楽しみにしていてください！
      </p>
    `
  }
];


/* ===== 日付表示 ===== */

function formatDate(dateString) {
  if (!dateString) return "";

  const parts = dateString.split("-");

  if (parts.length !== 3) {
    return dateString;
  }

  return `${parts[0]}.${parts[1]}.${parts[2]}`;
}


/* ===== HTML表示用のエスケープ ===== */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}


/* ===== 記事一覧ページ ===== */

function renderArticleList() {
  const list = document.getElementById("article-list");
  const count = document.getElementById("article-count");

  if (!list) return;

  // 新しい記事を先頭に表示
  const sortedArticles = [...articles].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  if (count) {
    count.textContent = `${sortedArticles.length} ARTICLES`;
  }

  if (sortedArticles.length === 0) {
    list.innerHTML = `
      <p class="empty-message">
        現在、公開中の記事はありません。
      </p>
    `;
    return;
  }

  list.innerHTML = sortedArticles.map(article => {
    const articleURL =
      `blog-article.html?id=${encodeURIComponent(article.id)}`;

    return `
      <article class="article-card">
        <a
          class="article-card-link"
          href="${articleURL}"
          aria-label="${escapeHTML(article.title)}を読む"
        >
          <img
            class="article-card-image"
            src="${escapeHTML(article.image)}"
            alt="${escapeHTML(article.title)}"
            loading="lazy"
          >

          <div class="article-card-body">
            <p class="article-date">
              ${escapeHTML(formatDate(article.date))}
            </p>

            <h3>${escapeHTML(article.title)}</h3>

            <p class="article-description">
              ${escapeHTML(article.description)}
            </p>

            <span class="article-more">
              MORE <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      </article>
    `;
  }).join("");
}


/* ===== 記事詳細ページ ===== */

function renderArticleDetail() {
  const detail = document.getElementById("article-detail");

  if (!detail) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const article = articles.find(item => item.id === id);

  if (!article) {
    detail.innerHTML = `
      <div class="error-message">
        <h1>記事が見つかりません</h1>
        <p>
          指定された記事が存在しないか、
          公開されていない可能性があります。
        </p>
        <a class="back-button" href="blog.html">
          ブログ一覧に戻る
        </a>
      </div>
    `;

    document.title = "記事が見つかりません | 記念祭ブログ";
    return;
  }

  document.title = `${article.title} | 記念祭ブログ`;

  detail.innerHTML = `
    <header class="article-detail-header">
      <p class="eyebrow">SEIGAKUIN FESTIVAL BLOG</p>

      <h1>${escapeHTML(article.title)}</h1>

      <time
        class="article-detail-date"
        datetime="${escapeHTML(article.date)}"
      >
        ${escapeHTML(formatDate(article.date))}
      </time>
    </header>

    <img
      class="article-hero-image"
      src="${escapeHTML(article.image)}"
      alt="${escapeHTML(article.title)}"
    >

    <div class="article-content">
      ${article.content}
    </div>
  `;
}


/* ===== ページに応じて表示 ===== */

document.addEventListener("DOMContentLoaded", () => {
  renderArticleList();
  renderArticleDetail();
});