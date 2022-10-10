import React from "react";
import LearnJSX2 from "./LearnJSX2";

export default class LearnJSX extends React.Component {


    state = {
        num: 1,
        name: 'Alex',
    }

    add() {
        this.setState({
            num: this.state.num + 1,
        })
    }

    render() {
        return (
            <div>
                <div>你好，我是 LearnJSX 111</div>
                <LearnJSX2></LearnJSX2>
                <button name="click" onClick={() => this.add()}>点击+1</button>
                <div>{this.state.num}</div>
                <div>{this.state.name}</div>
            </div>
        );
    }

}
