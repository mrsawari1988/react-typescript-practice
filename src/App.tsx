import React, { useState } from 'react';
import ColorBrowser from './components/ColorBrowser';
import ColorPicker from './components/ColorPicker';
import EditName from './components/EditName';
import Hello from './components/Hello';
import MembersTable from './components/MembersTable';
import SideBar from './components/SideBar';
import { Color } from './types/Color';

function App() {
    const [name, setName] = useState('default');
    const [editingName, setEditingName] = useState('default');
    const [isVisible, setIsVisible] = useState(false);
    const [color, setColor] = useState<Color>({
        red: 20,
        green: 40,
        blue: 180,
    });
    const setUsernameState = () => {
        setName(editingName);
    };
    return (
        <div className='App'>
            <SideBar isVisible={isVisible}>
                <h1>Cool Scfi movies</h1>
                <ul>
                    <li>
                        <a href='https://www.imdb.com/title/tt0816692/'>Interstellar</a>
                    </li>
                    <li>
                        <a href='https://www.imdb.com/title/tt0083658/'>Blade Runner</a>
                    </li>
                    <li>
                        <a href='https://www.imdb.com/title/tt0062622/'>2001: a space odyssey</a>
                    </li>
                </ul>
            </SideBar>
            <MembersTable />
            <ColorBrowser color={color} />
            <ColorPicker color={color} onColorUpdate={setColor} />
            <Hello name={name} />
            <EditName
                initalUserName={name}
                editingName={editingName}
                onEditingNameUpdate={setEditingName}
                onNameUpdated={setUsernameState}
                disabled={editingName === '' || editingName === name}
            />
            <div style={{ float: 'right' }}>
                <button onClick={() => setIsVisible(!isVisible)}>Toggle Sidebar</button>
            </div>
        </div>
    );
}

export default App;
