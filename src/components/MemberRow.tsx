import { Member } from './../types/Member';

export default function MemberRow({ member }: { member: Member }) {
    return (
        <tr>
            <td>
                <img src={member.avatar_url} style={{ maxWidth: '10rem' }} />
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    );
}
