import React from 'react';

// props = {
//     text: "Go Naver",
//     href: "http://naver.com",
//     userID: "SMJ"
// }

// export default function MainHeader(props) {
//   return (
//     <div>
//       <h1>{props.userID}님 반갑습니다!</h1>
//       <a href={props.href}>{props.text}</a>
//     </div>
//   );
// }

// export default function MainHeader({ text, href, userID }) {
//   return (
//     <div>
//       <h1>{userID}님 반갑습니다!</h1>
//       <a href={href}>{text}</a>
//     </div>
//   );
// }

export default function MainHeader(props) {
  const { text, href, userID } = props;

  return (
    <div>
      <h1>{userID}님 반갑습니다!</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
