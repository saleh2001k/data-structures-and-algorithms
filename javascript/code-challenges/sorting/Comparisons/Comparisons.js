function sortByRecentYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}
function sortByTitle(movies) {
  return movies.sort((a, b) => {
    const titleA = removeArticles(a.title);
    const titleB = removeArticles(b.title);
    if (titleA === titleB) {
      return a.year - b.year;
    }

    return titleA.localeCompare(titleB);
  });
}

function removeArticles(title) {
  return title.replace(/^(A|An|The)\s/i, "");
}

module.exports = {
  sortByRecentYear,
  sortByTitle,
  removeArticles,
};
