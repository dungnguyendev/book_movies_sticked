import React, { Component } from 'react';
import { connect } from 'react-redux';
import Seats from './Seats'
class Box_left extends Component {
    renderSoCot = () => {
        let { seatList } = this.props
        return seatList.map((item) => {
            if (item.hang === '') {

                return item.danhSachGhe.map((ite, i) => {
                    return (<td key={i}>{ite.soGhe}</td>)
                })
            }
        })
    }
    render() {
        return (
            <div className='title1'>
                <h1 >ĐẶT VÉ XEM PHIM CYPERLEARN.VN</h1>
                <p >Màn hình</p>
                <div className='screen'></div>
                <div className="seatStructure txt-center" >
                    <Seats />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        seatList: state.bookMoviesReducer123.seatList,
    };
};
export default connect(mapStateToProps, null)(Box_left);
