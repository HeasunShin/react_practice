import React, { Component } from "react";

// 헤더

// 방식1. 함수방식(ES5 javascript)
// function Myheader(props) {
//   return <h1>Hello, {promps.title}</h1>
// }

// 방식2. class방식(ES5 class)
export default class Myheader extends Component {
  render() {
    console.log("Myheader.js 실행됨");
    return (
      <header>
        <h1 className="logo">
          <a
            href=""
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}
// export default Myheader;
