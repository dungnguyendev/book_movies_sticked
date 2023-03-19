import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actSelectSeat } from './duck/action'
class SeatsItem extends Component {
    renderRowNumber = () => {
        const { seat } = this.props;

        return (
            <tr>
                <th className='firstChar'>{seat.hang}</th>
                {seat.danhSachGhe.map((item) => {
                    return (
                        <th key={item.soGhe} className="rowNumber">
                            {item.soGhe}
                        </th>
                    )
                })}
            </tr>

        )
    }
    renderRow = () => {
        const { seat } = this.props;
        const { seatChecked } = this.props;
        return (
            <tr>
                <th className='firstChar'>{seat.hang}</th>
                {seat.danhSachGhe.map((item) => {

                    if (item.daDat) {
                        return (
                            <td key={item.soGhe}>
                                <button
                                    className='ghe gheDuocChon'

                                >
                                    {item.soGhe}
                                </button>
                            </td>
                        );
                    } else {
                        const foundSeat = seatChecked.find((seat) => {
                            return seat.soGhe === item.soGhe
                        })
                        if (foundSeat) {
                            return (
                                <td key={item.soGhe}>
                                    <button
                                        className='ghe gheDangChon'
                                    >
                                        {item.soGhe}
                                    </button>
                                </td>
                            )
                        } else {
                            return (
                                <td key={item.soGhe}>
                                    <button
                                        className="ghe"
                                        onClick={() => {
                                            this.props.onSelectSeat(item);
                                        }}
                                    >
                                        {item.soGhe}
                                    </button>
                                </td>
                            );
                        }

                    }
                })}
            </tr>
        )
    }
    render() {
        const { seat } = this.props
        return (
            <>{seat.hang === "" ? this.renderRowNumber() : this.renderRow()}</>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectSeat: (seatItem) => {
            dispatch(actSelectSeat(seatItem))
        }
    }
}
export default connect(null, mapDispatchToProps)(SeatsItem)
