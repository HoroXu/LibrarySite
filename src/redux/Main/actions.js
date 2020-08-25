import * as type from './action-type';

export const queryChannelInfo = value => {
    return {
        type:type.CHANNELINFO,
        payload:value
    }
}