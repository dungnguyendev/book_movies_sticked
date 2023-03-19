import data from '../data.json';
import { SELECT_SEAT, DELETE_SEAT, PAY } from './type'
const initiaState = {
    seatList: data,
    seatChecked: [],
}
const bookMoviesReducer = (state = initiaState, action) => {
    console.log(action);
    const deepCopyFunction = (inObject) => {
        let outObject, value, key;

        if (typeof inObject !== "object" || inObject === null) {
            return inObject; // Return the value if inObject is not an object
        }

        // Create an array or object to hold the values
        outObject = Array.isArray(inObject) ? [] : {};

        for (key in inObject) {
            value = inObject[key];

            // Recursively (deep) copy for nested objects, including arrays
            outObject[key] = deepCopyFunction(value);
        }

        return outObject;
    };
    switch (action.type) {
        case SELECT_SEAT: {
            const seatChecked = deepCopyFunction(state.seatChecked)
            const foundSeat = seatChecked.find((item) => {
                return item.soGhe === action.payLoad.soGhe;
            })
            if (!foundSeat && !action.payLoad.daDat) {
                seatChecked.push(action.payLoad);
                state.seatChecked = seatChecked;
            }
            return { ...state }
        }
        case DELETE_SEAT: {

            const seatChecked = deepCopyFunction(state.seatChecked)
            const foundSeat = seatChecked.find((item) => {
                return item.soGhe === action.payLoad;
            })
            if (foundSeat !== -1) {
                seatChecked.splice(foundSeat, 1);
            }
            state.seatChecked = seatChecked

            return { ...state }
        }
        case PAY: {
            var seatChecked = deepCopyFunction(state.seatChecked);
            const seatList = deepCopyFunction(state.seatList);
            console.log(seatChecked);
            seatChecked.forEach((item) => {
                seatList.forEach((listRow) => {
                    if (listRow.hang !== "") {
                        listRow.danhSachGhe.forEach((seat) => {
                            if (seat.soGhe === item.soGhe) {
                                seat.daDat = true;
                                console.log(listRow);
                            }
                        });
                    }
                });
            });

            seatChecked = [];
            state.seatChecked = seatChecked;
            state.seatList = seatList;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default bookMoviesReducer;