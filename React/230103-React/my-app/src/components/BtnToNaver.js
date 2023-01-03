import React, { Component } from 'react';

// function BtnToNaver() {
//     return (
//         <button onClick={()=> {
//             document.location.href='https://www.naver.com/'
//         }}>Naver</button>
//     )
// }

class BtnToNaver extends Component {
    render() {
        return(
            <button onClick={()=> {
                document.location.href='https://www.naver.com/'
            }}>Naver</button>
        )
    }
}

export default BtnToNaver ;