/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];
Array.isArray([]);

function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

function isNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

/* 요소 순환 -------------------------------------------------------------- */

// forEach
const user = {};

arr.forEach((item, index) => {
  this[index] = item;
}, user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join
