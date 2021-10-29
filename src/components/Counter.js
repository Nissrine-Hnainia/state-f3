import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        console.log('construction')
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({count: this.state.count+1})
    }

    decrement() {
        this.setState({count: this.state.count >0 ? this.state.count-1 : this.state.count })
    }

    componentDidMount() {
        console.log("component did mount")
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    render() {
        console.log("rendering")
        return (
            <div>
                <button onClick={() => this.decrement()}>-</button>
                {" "}
                <span>{this.state.count}</span>
                {" "}
                <button onClick={() => this.increment()}>+</button>
            </div>
        )
    }
}
