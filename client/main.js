import {
  insertLast,
  tiger,
  delayP,
  getNode,
  renderUserCard,
} from './lib/index.js';

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList() {
  let response = await tiger.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  let userData = response.data;

  renderUserCard(userCardContainer, userData);
}

rendingUserList();
