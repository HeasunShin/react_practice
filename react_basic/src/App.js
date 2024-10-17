// 컴포넌트 만들기
import React, { Component } from 'react';

class Myheader extends Component {
  render() {
    return (
      <header>
        <h1 className='logo'>React</h1>
        <p>Single Page Application</p>
      </header>
    )
  }
}

class Mynav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">HTML</a></li>
          <li><a href="">CSS</a></li>
          <li><a href="">Javascript</a></li>
        </ul>
      </nav>
    )
  }
}

class Myarticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>HTML</h2>
          <p>Hypertext Markup Language</p>
        </article>
      </section>
    )
  }
}



export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Myheader/>
        <Mynav/>
        <Myarticle/>
      </div>
    )
  }
}

