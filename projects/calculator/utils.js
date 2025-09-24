// utils.js

// 1. Camelize a string: 'background-color' => 'backgroundColor'
export function camelize(str) {
  let s = str.split('-');
  s[0] = s[0].toLowerCase();
  for (let i = 1; i < s.length; i++) {
    s[i] = s[i][0].toUpperCase() + s[i].slice(1);
  }
  return s.join('');
}

// 2. Filter array within range (returns new array)
export function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);
}

// 3. Filter array in place (modifies original array)
export function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// 4. Sort ascending / descending
export function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

export function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

// 5. Get average from array of numbers or object array
export function average(arr, key) {
  if (key) {
    return arr.reduce((sum, item) => sum + item[key], 0) / arr.length;
  }
  return arr.reduce((sum, item) => sum + item, 0) / arr.length;
}

// 6. Map column from object array
export function pluck(arr, key) {
  return arr.map(item => item[key]);
}

// 7. Group array of objects by key
// Create keyed object from array
export function groupBy(arr, key) {
  return arr.reduce((obj, item) => {
    const k = item[key];
    if (!obj[k]) obj[k] = [];
    obj[k].push(item);
    return obj;
  }, {});
}

// 8. Remove duplicates from array
export function unique(arr) {
  return [...new Set(arr)];
}

// 9. Shuffle array
export function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 10. Deep clone object/array
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 11. Capitalize first letter
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 12. Convert first letter to lowercase
export function decapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 13. Check if value is empty
export function isEmpty(value) {
  if (value == null) return true; // null or undefined
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

// 14. Clamp number to range
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// 15. Debounce function
export function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 16. Throttle function
export function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// 17. Wait for a given time
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 18. Random integer between min and max inclusive
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 19. Flatten array (one level)
export function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

// 20. Pick random element from array
export function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 21. Format date to yyyy-mm-dd
export function formatDate(date) {
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
