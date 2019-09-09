import * as type from './action-type';

export const sidebarCreator = value => {
    return {
        type:type.SIDEBAR,
        payload:value
    }
}