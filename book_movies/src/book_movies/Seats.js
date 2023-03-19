import React, { Component } from 'react';
import SeatsItem from './SeatsItem'
import { connect } from 'react-redux';
class Seats extends Component {
    renderSeats = () => {
        const { seatList, seatChecked } = this.props;

        return (
            <tbody>
                {seatList.map((item) => {
                    if (item.hang === "") {
                        return <SeatsItem key={0} seat={item} />
                    }
                    else {
                        if (seatChecked) {
                            return <SeatsItem key={item.hang} seat={item} seatChecked={seatChecked} />
                        }
                        return <SeatsItem key={item.hang} seat={item} />
                    }
                })}
            </tbody>
        )


    };
    render() {
        return (
            <div>
                <table className='table'>{this.renderSeats()}</table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        seatList: state.bookMoviesReducer123.seatList,
        seatChecked: state.bookMoviesReducer123.seatChecked,
    };
};
export default connect(mapStateToProps, null)(Seats);
