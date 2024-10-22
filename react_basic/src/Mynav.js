import React, { Component } from 'react'

export default class Mynav extends Component {
    render() {
        var lists = [];

        // 리팩토링(기존에 넘어온 값을 새로운 변수에 다시 담아주는 것)
        var data = this.props.data;

        // while 반복문
        // var  i = 0;
        // while(조건){
        //     반복할일
        //     증감
        // }
        // for 반복문
        // for(i=0; i<3; i++){
            
        // }

        var  i = 0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href="">{data[i].title}</a></li>);
            // i++;
            // i = i+1;
            i+=1;
        }

        return (
            <nav>
            <ul>
                {lists}
            </ul>
            </nav>
        )
    }
  }
