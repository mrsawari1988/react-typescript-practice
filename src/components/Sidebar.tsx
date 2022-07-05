import React from 'react';
interface Props {
    isVisible: boolean;
    children: React.ReactNode;
}

const divStyle = (props: Props): React.CSSProperties => ({
    width: props.isVisible ? '23rem' : '0rem',
});
export default function SideBar(props: Props) {
    return (
        <div id='mySidenav' className='sidenav' style={divStyle(props)}>
            {props.children}
        </div>
    );
}
