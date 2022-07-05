import { Member } from '../types/Member';
import Axios, { AxiosResponse } from 'axios';

const instance = Axios.create({
    baseURL: 'https://api.github.com',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const memberRequests = {
    get: (url: string) => instance.get<Member[]>(url).then(responseBody),
};

export const Members = {
    getMembrs: (): Promise<Member[]> => memberRequests.get('/orgs/lemoncode/members'),
};
