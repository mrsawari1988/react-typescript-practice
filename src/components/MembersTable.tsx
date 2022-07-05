import { useEffect, useState } from 'react';
import { getMembersCollection } from '../api/memberApi';
import { Members } from '../api/newMemberApi';
import { Member } from '../types/Member';
import MemberRow from './MemberRow';
export default function MembersTable() {
    const [membersCollection, setMembersCollection] = useState<Member[]>([]);
    useEffect(() => {
        // getMembersCollection().then((collection) => {
        //     setMembersCollection(collection);
        // });
        Members.getMembrs().then((data) => setMembersCollection(data));
    }, []);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {membersCollection.map((member) => (
                        <MemberRow key={member.id} member={member} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
