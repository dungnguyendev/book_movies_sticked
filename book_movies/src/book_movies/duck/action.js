import { SELECT_SEAT, DELETE_SEAT, PAY }  from './type'

export const actSelectSeat = (seatItem) => {
    return {
       type: SELECT_SEAT,
       payLoad: seatItem,
    };
 };
export const actDeleteSeat = (seatItem) =>{
   return {
      type: DELETE_SEAT,
      payLoad: seatItem,
   };
};
export const actPay = (seatItem) => {
   return {
      type: PAY,
      payLoad:seatItem,
   };
};