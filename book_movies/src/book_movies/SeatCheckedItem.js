import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actDeleteSeat } from './duck/action'
class SeatCheckedItem extends Component {
    render() {
        const { item } = this.props

        return (

            <tr>
                <th scope="col">{item.soGhe}</th>
                <th scope="col">{new Intl.NumberFormat().format(item.gia)}</th>
                <td>
                <i  onClick={()=>{
                            this.props.onDelete(item.soGhe)
                        }} class="fa-solid fa-xmark"></i>
                </td>
            </tr>

        )
    }
}
const mapDipatchToProps = (dispatch)=>{
    return {
        onDelete: (seat)=>{
            dispatch(actDeleteSeat(seat))
        }
    }
}
export default connect(null,mapDipatchToProps) (SeatCheckedItem)