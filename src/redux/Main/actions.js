import * as type from './action-type';

export const queryChannelInfo = value => {
    return {
        type:type.CHANNELINFO,
        payload:value
    }
}

//记录选中的channelId

export const queryChannelId = value => {
    return {
        type: type.CHANNELID,
        channelId:value
    }
}