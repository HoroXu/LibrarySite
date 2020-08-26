import * as type from "./action-type";

export const channelInfoArr = (state = [], action) => {
  switch (action.type) {
    case type.CHANNELINFO:
      return action.payload;
    default:
      return state;
  }
};

export const channelId = (state = "", action) => {
  switch (action.type) {
    case type.CHANNELID:
      return action.channelId;
    default:
      return state;
  }
};
