import React from 'react'
import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { chooseTheme } from '../../slices/Slice'


export const Navbar = () => {

    const dispacth = useDispatch()
    const select_bg = useSelector(state => state.theme.background);
    const select_color = useSelector(state => state.theme.color);

    const change_theme = (e) => {
        const new_theme = {
            background: e.target.value,
            color : select_color == 'white' ? "black" : "white"  
        }
        dispacth(chooseTheme(new_theme))
        console.log(select_color);
        console.log(select_bg);
    }

    return (
        <div style={{background : `${select_bg}`, color: `${select_color}`}} >

            <ul>
                <li>mot1</li>
                <li>mot2</li>
                <li>mot3</li>
                <li>
                    <select onChange={change_theme} id="selecteur">
                        <option value="blue">blue</option>
                        <option value="orange">orange</option>
                        <option value="red">rouge</option>
                        <option value="green">vert</option>
                    </select>
                </li>
            </ul>

        </div>
    )
}
