import queryString from 'query-string';
import { useRef } from 'react';
import React from 'react';
import { isEqual } from 'lodash';
import { Redirect } from 'react-router-dom';

export const capitalizeFirst = (string) => {
	if (string) return string[0].toUpperCase() + string.slice(1);
};

export const redirect = (to, condition, otherwise) => {
	return condition ? <Redirect to={to} /> : otherwise;
};

export const getLocalAuth = () => {
	try {
		return (
			JSON.parse(localStorage.getItem('auth')) || {
				token: '',
				refreshToken: '',
				user: { verified: false },
			}
		);
	} catch (e) {
		return { token: '', refreshToken: '', user: { verified: false } };
	}
};

export const setLocal = (name, jsonItem) => {
	localStorage.setItem(name, JSON.stringify(jsonItem));
};

export const useDeepCompareMemoize = (value) => {
	const valueRef = useRef();

	if (!isEqual(value, valueRef.current)) {
		valueRef.current = value;
	}
	return valueRef.current;
};

export const queryStringToObject = (str, options = {}) =>
	queryString.parse(str, {
		arrayFormat: 'bracket',
		...options,
	});

export const objectToQueryString = (obj, options = {}) =>
	queryString.stringify(obj, {
		arrayFormat: 'bracket',
		...options,
	});

export const getLocalTimeFormat = (date) => {
	let res = new Date(date);
	return res.toLocaleString();
};

export const calculateTimeSince = (isoString) => {
	let then = new Date(isoString);
	// @ts-ignore
	var seconds = Math.floor((new Date() - then) / 1000); // remove two hours for timezone...

	var interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return interval + (interval === 1 ? ' year' : ' years') + ' ago';
	}
	interval = Math.floor(seconds / 2592000);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' month' : 'months') + ' ago';
	}
	interval = Math.floor(seconds / 86400);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' day' : ' days') + ' ago';
	}
	interval = Math.floor(seconds / 3600);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' hour' : ' hours') + ' ago';
	}
	interval = Math.floor(seconds / 60);
	if (interval >= 1) {
		return interval + (interval === 1 ? ' minute' : ' minutes') + ' ago';
	}
	return (
		Math.floor(seconds) +
		(Math.floor(seconds) === 1 ? ' second' : ' seconds') +
		' ago'
	);
};
