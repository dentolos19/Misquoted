export type Author = {
  _id: string;
  bio: string;
  description: string;
  link: string;
  name: string;
  slug: string;
  quoteCount: number;
};

export type Quote = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

export function getAuthor(authorSlug: string) {
  return fetch(`https://api.quotable.io/authors?slug=${authorSlug}`)
    .then((res) => {
      if (!res.ok) {
        return undefined;
      }
      return res.json();
    })
    .then((data) => data.results[0] as Author);
}

export function getQuote(quoteId: string) {
  return fetch(`https://api.quotable.io/quotes/${quoteId}`)
    .then((res) => {
      if (!res.ok) {
        return undefined;
      }
      return res.json();
    })
    .then((data) => data as Quote);
}

export function getRandomQuote() {
  return fetch("https://api.quotable.io/random")
    .then((res) => {
      if (!res.ok) {
        return undefined;
      }
      return res.json();
    })
    .then((data) => data as Quote);
}

export function getQuotesByAuthor(authorSlug: string) {
  return fetch(`https://api.quotable.io/quotes?author=${authorSlug}`)
    .then((res) => {
      if (!res.ok) {
        return undefined;
      }
      return res.json();
    })
    .then((data) => data.results as Quote[]);
}