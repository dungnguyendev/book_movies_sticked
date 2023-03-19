import React, { Component } from 'react'
import SeatCheckList from './SeatCheckedList'
export default class Box_right extends Component {
    render() {
        return (
            <div className='title2'>
                <h1 >Danh sách ghế bạn chọn</h1>
                <div className="gr_box">
                    <span><button className='gheDuocChon button1'></button></span>
                    <p>Ghế đã đặt</p>
                </div>
                <div className="gr_box">
                    <span><button className='gheDangChon button1'></button></span>
                    <p>Ghế đang chọn</p>
                </div>
                <div className="gr_box">
                    <span><button className='gheChuaDat button1'></button></span>
                    <p>Ghế chưa đặt</p>
                </div>
                <SeatCheckList />
            </div>
        )
    }
}
