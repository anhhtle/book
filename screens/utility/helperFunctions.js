import moment from 'moment';

export function renderDate(date) {
    let a = moment(date);
    let b = moment(new Date());
    if (b.diff(a, 'hours') < 1) {
        return b.diff(a, 'minutes') + 'm'
    } else if (b.diff(a, 'days') < 1) {
        return b.diff(a, 'hours') + 'h'
    } else if(b.diff(a, 'days') >= 1 && b.diff(a, 'days') < 7) {
        return b.diff(a, 'days') + 'd'
    } else {
        return b.diff(a, 'weeks') + 'w'
    }
}