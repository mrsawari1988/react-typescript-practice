interface Props {
    name: string;
}
export default function Hello({ name }: Props) {
    return <div>Hello {name}</div>;
}
// export const  Hello:React.FC<Props> = (props) => {
//     return <div>Hello</div>;
// }
