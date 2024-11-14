// 컴포넌트 만들기
import React, { Component } from "react";
import Myheader from "./Myheader";
import Mynav from "./Mynav";
import Myarticle from "./Myarticle";

// constructor 은 export>render 보다 위에 위치하여야 한다.
export default class App extends Component {
  constructor(props) {
    super(props);
    // 여기서 this.setState()를 호출하면 안된다!
    this.state = {
      mode: "welcome",
      selected_id: 2,
      subject: { title: "React", desc: "Single Page Application" },
      welcome: { title: "Welcome", desc: "Welcome to React" },
      menus: [
        { id: 1, title: "HTML", desc: "Hypertext Markup Language" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interactive" },
      ],
    };
  }

  render() {
    console.log("App.js 실행됨");
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      // _title = this.state.menus[0].title;
      // _desc = this.state.menus[0].desc;
      // 반복문
    }

    return (
      <div className="App">
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />
        {/* <header>
          <h1 className="logo">
            <a
              href=""
              onClick={function (e) {
                // 기존 a태그의 기능을 먼저 막는다
                e.preventDefault();
                // alert(1);
                // this.state.mode = "welcome";
                this.setState({ mode: "welcome" });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          <p>{this.state.subject.desc}</p>
        </header> */}
        <Mynav
          data={this.state.menus}
          onChangePage={function () {
            this.setState({ mode: "read" });
          }.bind(this)}
        />
        <Myarticle title={_title} desc={_desc} />
      </div>
    );
  }
}
