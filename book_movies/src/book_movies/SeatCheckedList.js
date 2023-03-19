import React, { Component } from 'react'
import SeatCheckedItem from './SeatCheckedItem'
import { connect } from 'react-redux'
import { actPay } from './duck/action'
class SeatCheckedList extends Component {
    renderChecked = () => {
        const { seatChecked } = this.props
        return seatChecked.map((item) => {
            return <SeatCheckedItem key={item.soGhe} item={item} />
        })
    }
    sumPrice = () => {
        const { seatChecked } = this.props
        return seatChecked.reduce((acc, item) => {
            return (acc += item.gia)
        }, 0)
    }
    render() {

        return (
            <div className="box_table">
                <table  className="table1 table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Số ghế</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Huỷ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderChecked()}
                        <tr>
                            <th className='sumPrice' scope="row">Tổng tiền: </th>
                            <td className='Price'>{new Intl.NumberFormat().format(this.sumPrice())}</td>
                            <td className='PAYMENT'>
                                <button
                                    className="btn btn-success1"
                                    onClick={() => { this.props.onChangePay(this.props.seatChecked) }}
                                >
                                    Thanh toán
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        seatChecked: state.bookMoviesReducer123.seatChecked
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePay: (seatChecked) => {
            dispatch(actPay(seatChecked))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatCheckedList) 
