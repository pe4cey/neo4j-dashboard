export const applyDataLimit = (array, limit = 10) =>
  (array.length > limit)
    ? [...array.slice(1, limit + 1)]
    : [...array];
