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
    id: "seitokai",

    title: "忙しそうな記念祭本部",

    date: "2026-10-31",

    image: "images/IMG_0898.png",

    description:
      "この福地学年からは生徒会や記念祭本部",

    content: `
  <p>
    この福地学年からは生徒会や記念祭本部
    に属する人が多いです。
    
    記念祭準備日には忙しそうな本部の生徒
    たちが見られました。
  </p>

  <h2>忙しそうに働く生徒会の姿</h2>

  <p>
    生徒会または記念祭本部の生徒は赤いパ
    ーカーを着ています。

    記念祭当日、何か質問があれば是非本部
    の生徒に質問を！
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0898.png",
    caption: "各階段に階段アートを貼る"
  },
  {
    src: "images/IMG_1004.png",
    caption: "黄昏てる生徒会"
  }
])}

  <p>
    ぜひ当日は高校一年に足をお運びください！
  </p>
`
  },
  {
    id: "costume",

    title: "衣装やコスプレ！",

    date: "2026-10-31",

    image: "images/IMG_1010.png",

    description:
      "企画には、衣装やコスプレをして挑む企",

    content: `
  <p>
    企画には、衣装やコスプレをして挑む企
    画もあります。
    生徒一同は試しに衣装を着て、リハーサ
    ルも始めています！
  </p>

  <h2>多種多様なコスチューム</h2>

  <p>
    各クラス、衣装を着るなり、他クラスや友達に
    見せるよう、廊下を徘徊していました。
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0976.png",
    caption: "流行の過ぎたトゥントゥンさフール"
  },
  {
    src: "images/IMG_0972.png",
    caption: "サングラスがいい味出してるE組生徒"
  },
  {
    src: "images/IMG_1010.png",
    caption: "イケてる3人衆"
  }
])}

  <p>
    ぜひ当日は高校一年に足をお運びください！
  </p>
`
  },
  {
    id: "2days",

    title: "2日目の作業が開始！",

    date: "2026-10-31",

    image: "images/IMG_0970.png",

    description:
      "記念祭の準備は2日目に突入しました！",

    content: `
  <p>
    記念祭の準備は2日目に突入しました！
    昨日の作業から引き続き、全員力を入れ
    て作業を始めています。
    
    一日経ち、最初はみんな気が抜けていま
    したが、だんだん全員作業に集中してき
    ました。
  </p>

  <h2>2日目の作業の様子</h2>

  <p>
    各クラス、朝礼が終わり続々と生徒たち
    は忙しくなって行きました。
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0968.png",
    caption: "ネオンライトで遊ぶ生徒"
  },
  {
    src: "images/IMG_0970.png",
    caption: "台車を魔改造するD組"
  }
])}

  <p>
    ぜひ当日は高校一年に足をお運びください！
  </p>
`
  },
  {
    id: "lunch-1",

    title: "ちょっと休憩",

    date: "2026-10-30",

    image: "images/IMG_0944.png",

    description:
      "1日目の作業が進んだところで、午前の",

    content: `
  <p>
    1日目の作業が進んだところで、午前の
    作業が終了しました。
    そこで、各自休憩をとり、みんな仲良く
    ご飯を食べました。
  </p>

  <h2>食事中の様子</h2>

  <p>
    各クラスでは、作業のキリのいいところで
    ご飯の時間をはじめ、教室の机や床を使い
    輪を作ってご飯を食べていました。
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0943.png",
    caption: ""
  },
  {
    src: "images/IMG_0947.png",
    caption: ""
  }
])}

  <p>
    午前頑張ったぶん、たくさん休憩してまた午後に挑みます！
    ぜひ当日は高校一年に足をお運びください！
  </p>
`
  },
  {
    id: "making-3",

    title: "装飾作り",

    date: "2026-10-30",

    image: "images/IMG_0929.png",

    description:
      "教室内の装飾で、段ボールを切ったり絵を描いたり",

    content: `
  <p>
    教室内の装飾で、段ボールを切ったり絵を描いたり
    工作をしていく高校一年生徒たち。
    教室の床に座り込み、作業に没頭しています。
  </p>

  <h2>工作の様子</h2>

  <p>
    
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0928.png",
    caption: ""
  },
  {
    src: "images/IMG_0910.png",
    caption: ""
  },
  {
    src: "images/IMG_0916.png",
    caption: ""
  }
])}

  <p>
    気になった方はぜひ、当日足を運びください！
  </p>
`
  },
  {
    id: "making-2",

    title: "高一記念祭 デジタル部門たち",

    date: "2026-10-30",

    image: "images/IMG_0914.png",

    description:
      "今年の記念祭では、今までとは一味違います。",

    content: `
  <p>
    今年の記念祭では、今までとは一味違います。
    今年はデジタルの力をふんだんに扱い、雰囲気
    作りに力を注いでいます。
  </p>

  <h2>プログラム制作の様子</h2>

  <p>
    各クラスでは、それぞれの用途でテクノロジーが
    用いられてます。

    C組ではプロジェクションマッピングを。
    D組ではシューティングゲームのプログラミング。
    E組は企画の広報活動としてインスタグラムの動画を
    制作しております。
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0934.png",
    caption: "C組"
  },
  {
    src: "images/IMG_0914.png",
    caption: "D組"
  },
  {
    src: "images/IMG_0917.png",
    caption: "E組"
  }
])}

  <p>
    気になった方はぜひ、当日足を運びください！
  </p>
`
  },
  {
    id: "making-1",

    title: "自分の特技を最大限に発揮する生徒たち。",

    date: "2026-10-30",

    image: "images/IMG_0902.png",

    description:
      "記念祭当日に向けて、企画の看板や、黒板アートを描いていく一同。",

    content: `
  <p>
    記念祭に向けて、教室を魔改造していく高一生徒たち。
    開始から1時間ほどで教室がどんどん変わって行きます！
  </p>

  <h2>記念祭で手を合わせて共同作業</h2>

  <p>
    生徒たちが一致団結して、準備しています。
  </p>

  ${articleGallery([
  {
    src: "images/IMG_0901.png",
    caption: "看板を描く生徒"
  },
  {
    src: "images/IMG_0896.png",
    caption: "黒板アートを仕上げる生徒"
  },
  {
    src: "images/IMG_0918.JPG",
    caption: "新たに看板を描き始めるE組生徒"
  }
])}

  <p>
    これからの記事も、ぜひ楽しみにしていてください！
  </p>
`
  },
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

/* ===== 記事本文の写真 ===== */

function articleImage(src, caption = "", alt = "") {
  return `
    <figure class="article-inline-image">
      <img
        src="${escapeHTML(src)}"
        alt="${escapeHTML(alt || caption)}"
        loading="lazy"
      >
      ${caption
        ? `<figcaption>${escapeHTML(caption)}</figcaption>`
        : ""}
    </figure>
  `;
}


/* ===== 複数写真のギャラリー ===== */

function articleGallery(images) {
  return `
    <div class="article-gallery">
      ${images.map(image => `
        <figure class="article-inline-image">
          <img
            src="${escapeHTML(image.src)}"
            alt="${escapeHTML(image.alt || image.caption || "")}"
            loading="lazy"
          >
          ${image.caption
            ? `<figcaption>${escapeHTML(image.caption)}</figcaption>`
            : ""}
        </figure>
      `).join("")}
    </div>
  `;
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
