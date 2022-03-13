export enum LocalEndpoint {
  // Restaurant endpoints
  UPDATE_FOLLOW_STATUS = '/api/restaurant/updateFollowStatus',
  GET_BOOKING_SLOTS = '/api/restaurant/getBookingSlots',
  GET_OPEN_TIMES = '/api/restaurant/getOpenTimes',

  // Invites
  GET_PREREGISTER = '/api/invite/getPreregister',
  SUBMIT_WAITLIST_TO_ZAPIER = '/api/invite/submitWaitlistToZapier',
  SUBMIT_RECOMMEND_TO_ZAPIER = '/api/invite/submitRecommendToZapier',
}
