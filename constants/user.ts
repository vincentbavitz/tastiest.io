const MIN_AGE = '10';
const MAX_AGE = '90';

const YOUNGEST_BIRTH_YEAR = String(
  new Date().getFullYear() - Number(MIN_AGE) - 1,
);
const OLDEST_BIRTH_YEAR = String(
  new Date().getFullYear() - Number(MAX_AGE) - 1,
);

const USER = { MIN_AGE, MAX_AGE, YOUNGEST_BIRTH_YEAR, OLDEST_BIRTH_YEAR };

export default USER;
