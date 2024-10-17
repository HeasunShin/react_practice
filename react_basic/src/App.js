// 컴포넌트 만들기
import React, { Component } from 'react';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Myarticle from './Myarticle';

// constructor 은 export>render 보다 위에 위치하여야 한다.
export default class App extends Component {
  constructor(props) {
    super(props);
    // 여기서 this.setState()를 호출하면 안된다!
    this.state = {
      subject:{title:'React', desc:'Single Page Application'},
      menus:[
        {id:1, title:'HTML', desc:'Hypertext Markup Language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }

  render(){
    return (
      <div className='App'>
        <Myheader 
          title={this.state.subject.title}
          desc={this.state.subject.desc}
        />
        <Mynav data={this.state.menus}/>
        <Myarticle title="HTML" desc="Hypertext Markup Language" />
      </div>
    )
  }
}

