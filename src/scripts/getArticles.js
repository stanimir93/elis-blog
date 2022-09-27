import axios from "axios";

export default async function getArticles() {
  // Enter article ID's
  const {
    data: { contents },
  } = await axios.get(window.location.origin + "/articles/contents.json");

  const articles = [];
  for (const id of contents) {
    const { data } = await axios.get(
      window.location.origin + "/articles/article-" + id + ".html"
    );
    const articleObj = parseArticle(data, id);
    articles.push(articleObj);
  }
  return articles;
}

function parseArticle(html, id) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  const title = wrapper.querySelector("h1").textContent;
  const dateObj = new Date(
    Date.parse(wrapper.querySelector(".date").textContent)
  );
  const firstPara = wrapper.querySelector("p").textContent;
  const imageUrl = wrapper.querySelector("img");
  const labels = [...wrapper.querySelectorAll(".labels li")];
  let subheadings = [];
  wrapper
    .querySelectorAll("h3")
    .forEach((h3) => h3.textContent && subheadings.push(h3.textContent));

  return { id, title, dateObj, imageUrl, firstPara, labels, html, subheadings };
}
