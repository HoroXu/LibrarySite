import * as type from "./action-type";

export const channelInfoArr = (state = [], action) => {
  switch (action.type) {
    case type.CHANNELINFO:
      return action.payload;
    default:
      return state;
  }
};
