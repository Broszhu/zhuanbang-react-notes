import React, { Component } from 'react';
import './footer.css'

function formatName(user) {
    if (user.firstName === 'zhu') {
        return <strong>{user.firstName} + ' ' + {user.lastName}</strong>
    }
    return <strong>body</strong>
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div onClick={()=>{alert('222')}}>
                {this.state.date.toLocaleTimeString()}
                <br/>
                <strong>Local:{this.props.local}</strong>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        const user = {
            firstName: 'zhu',
            lastName: 'an2'
        };
        return (
            <div className="page-foot">
                Hello, {formatName(user)}!
                <br/>
                time:<Clock local ="Beijing"/>
            </div>
        )
    }
}
export default Footer;