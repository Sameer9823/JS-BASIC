function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log("Querying for:", query);
};

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("hel");
searchWithDebounce("hell");
searchWithDebounce("hello");
searchWithDebounce("hello ");
searchWithDebounce("hello w");
searchWithDebounce("hello wo");
searchWithDebounce("hello world");
