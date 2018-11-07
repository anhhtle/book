import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export function renderLongDate(date) {
    let a = moment(date);
    let b = moment(new Date());
    if (b.diff(a, 'hours') < 1) {
        return b.diff(a, 'minutes') + 'm'
    } else if (b.diff(a, 'days') < 1) {
        return b.diff(a, 'hours') + 'h'
    } else {
        return a.format('MMM DD, YYYY');
    }
}

export function renderRatingStars(ratingNum) {
    let fullStar = Math.floor(ratingNum / 1);
    let halfStar = Math.round(ratingNum % fullStar);
    let emptyStar = 5 - fullStar - halfStar;

    let starTemplate = [];
    for (let i = 1; i <= fullStar ; i++) {
        starTemplate.push(<Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} key={`full${i}`} />)
    }
    for (let i = 1; i <= halfStar ; i++) {
        starTemplate.push(<Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} key={`half${i}`}/>)
    }
    for (let i = 1; i <= emptyStar ; i++) {
        starTemplate.push(<Ionicons name={Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline'} color={'gold'} size={16} key={`empty${i}`}/>)
    }

    return starTemplate;
}

export function renderUserRatingStars(ratingNum) {
    let fullStar = Math.floor(ratingNum / 1);
    let halfStar = Math.round(ratingNum % fullStar);
    let emptyStar = 5 - fullStar - halfStar;

    let starTemplate = [];
    for (let i = 1; i <= fullStar ; i++) {
        starTemplate.push(
            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16} key={`full${i}`} />
        )
    }
    for (let i = 1; i <= halfStar ; i++) {
        starTemplate.push(
            <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'#8c1515'} size={16} key={`half${i}`}/>
        )
    }
    for (let i = 1; i <= emptyStar ; i++) {
        starTemplate.push(
            <Ionicons name={Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline'} color={'#8c1515'} size={16} key={`empty${i}`}/>
        )
    }

    return starTemplate;
}