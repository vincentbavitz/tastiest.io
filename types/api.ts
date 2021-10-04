export enum LocalEndpoint {
  REGISTER = '/api/register',
  CREATE_NEW_ORDER = '/api/payments/createNewOrder',
  UPDATE_ORDER = '/api/payments/updateOrder',
  GET_ORDER = '/api/payments/getOrder',
  PAY = '/api/payments/pay',

  // Restaurant endpoints
  UPDATE_FOLLOW_STATUS = '/api/restaurant/updateFollowStatus',
  GET_BOOKING_SLOTS = '/api/restaurant/getBookingSlots',
}
