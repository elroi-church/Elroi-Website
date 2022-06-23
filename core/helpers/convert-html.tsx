import escapeHtml from "escape-html";
import { Text } from "slate";

const serialize = (node) => {
  console.log("serialize", node);
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    return string;
  }

  if (node && !node.children) {
    return node.map((n) => serialize(n)).join("");
  }

  let children;

  // // have children, so serialize them
  // if (node.children) {
  //   return node.children.map(serialize).join("");
  // }
  let style = {};
  if (node?.align) {
    style = "text-align:" + node.align;
  }

  children = node?.children.map(serialize).join("");

  switch (node?.type) {
    case "quote":
      return `<blockquote><p>${children}</p></blockquote>`;
    case "paragraph":
      return `<p>${children}</p>`;
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    case "list-item":
      return `<li style=${style}>${children}</li>`;
    case "numbered-list":
      return `<ol>${children}</ol>`;
    default:
      return children;
  }
};

export const ConvertHTML = {
  serialize,
};
