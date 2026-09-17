const settings = {
  image: "cat.gif",
  mainText: "> cd ~/",
  colors: {
    background: "#282828",
    foreground: "#eadbb2",
    link: "#8f9191",
    visitedLink: "#668f8b",
    hoverLink: "#fa7921",
  },
};

const categories = [
  {
    title: "work",
    links: [
      { label: "gmail", url: "https://gmail.com" },
      { label: "outlook", url: "https://outlook.office.com" },
      { label: "linkedin", url: "https://linkedin.com" },
      { label: "vim", url: "https://vim.rtorr.com/" },
    ],
  },
  {
    title: "dev",
    links: [
      { label: "github", url: "https://github.com/" },
      { label: "lobste.rs", url: "https://lobste.rs/" },
      { label: "mankier", url: "https://mankier.com/" },
      { label: "devdocs", url: "https://devdocs.io/" },
    ],
  },
  {
    title: "reddit",
    links: [
      { label: "programming", url: "https://reddit.com/r/programming/" },
      { label: "selfhosted", url: "https://reddit.com/r/selfhosted/" },
      { label: "unixporn", url: "https://reddit.com/r/unixporn/" },
      { label: "mk", url: "https://reddit.com/r/mechanicalkeyboards/" },
    ],
  },
  {
    title: "play",
    links: [
      { label: "monkeytype", url: "https://monkeytype.com/" },
      { label: "youtube", url: "https://youtube.com/" },
      { label: "twitch", url: "https://twitch.tv/" },
      { label: "netflix", url: "https://netflix.com/" },
    ],
  },
];

function applySettings() {
  document.getElementById("wallpaper-image").src = settings.image;
  document.getElementById("main-text").textContent = settings.mainText;

  const colorVariables = {
    "--color-bg": settings.colors.background,
    "--color-fg": settings.colors.foreground,
    "--color-link": settings.colors.link,
    "--color-link-visited": settings.colors.visitedLink,
    "--color-link-hover": settings.colors.hoverLink,
  };

  Object.entries(colorVariables).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
}

function createCategory(category) {
  const categoryElement = document.createElement("div");
  categoryElement.className = "category";

  const linksElement = document.createElement("ul");
  linksElement.className = "links";

  const title = document.createElement("li");
  title.className = "title";

  title.textContent = category.title;
  linksElement.appendChild(title);

  category.links.forEach(({ label, url }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = url;
    link.textContent = label;
    item.appendChild(link);
    linksElement.appendChild(item);
  });

  categoryElement.appendChild(linksElement);
  return categoryElement;
}

function renderCategories() {
  const bookmarkList = document.getElementById("bookmarks");
  const categoryFragment = document.createDocumentFragment();

  categories.forEach((category) => {
    categoryFragment.appendChild(createCategory(category));
  });

  bookmarkList.appendChild(categoryFragment);
}

applySettings();
renderCategories();
