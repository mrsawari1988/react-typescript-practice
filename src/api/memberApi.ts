import { Member } from '../types/Member';
import Axios, { AxiosResponse } from 'axios';

const gitHubURL = 'https://api.github.com';
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getMembersCollection = (): Promise<Member[]> => {
    const promise = new Promise<Member[]>((resolve, reject) => {
        Axios.get<Member[]>(gitHubMembersUrl)
            .then((response) => resolve(mapReponseToMember(response)))
            .catch((err) => reject(err));
    });

    return promise;
};

const mapReponseToMember = ({ data }: AxiosResponse<any[]>): Member[] =>
    data.map((gitMember) => ({
        id: gitMember.id,
        login: gitMember.login,
        avatar_url: gitMember.avatar_url,
    }));
