# Movie Sorting Algorithms (Comparisons)

## Sorting by Recent Year

The `sortByRecentYear` function takes an array of movie objects and sorts them in descending order based on the year of release. The most recent movies appear first in the sorted array.

**CODE**

```javascript
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
```
