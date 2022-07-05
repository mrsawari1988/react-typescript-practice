import { Color } from '../types/Color';
interface Props {
    color: Color;
    onColorUpdate: (color: Color) => void;
}
export default function ColorPicker({ color, onColorUpdate }: Props) {
    return (
        <div>
            <input
                type='range'
                min={0}
                max={250}
                value={color.red}
                onChange={(e) =>
                    onColorUpdate({
                        red: +e.target.value,
                        green: color.green,
                        blue: color.blue,
                    })
                }
            />
            <input
                type='range'
                min={0}
                max={250}
                value={color.green}
                onChange={(e) =>
                    onColorUpdate({
                        red: color.red,
                        green: +e.target.value,
                        blue: color.blue,
                    })
                }
            />
            <input
                type='range'
                min={0}
                max={250}
                value={color.blue}
                onChange={(e) =>
                    onColorUpdate({
                        red: color.red,
                        green: color.green,
                        blue: +e.target.value,
                    })
                }
            />
        </div>
    );
}
