import React, { Component } from 'react'
import Left from './Box_left';
import Right from './Box_right';
import "./BookingTicket.css";

export default class Index extends Component {

    render() {
        return (
            <div className="bround">
                <div className="mist">
                </div>
                <div className='container'>
                    <div className="box_gr">
                        <div className="box_l">
                            <Left />
                        </div>
                        <div className="box_l">
                            <Right />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


