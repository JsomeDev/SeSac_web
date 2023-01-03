// import React, { Component } from 'react';
//  import logo from '../logo.svg';

// class ImgComponent extends Component {
//     render() {
//         const Styles = {width: "200px", height: "200px"}

//         return(
//             <img src={logo} alt="로고" style={Styles}></img>
//         )
//     }
// }

function ImgComponent() {
    const Styles = {width: "200px", height: "200px"}
    return (
        <img src="/logo192.png" alt="로고" style={Styles}></img>
    )
}

export default ImgComponent;