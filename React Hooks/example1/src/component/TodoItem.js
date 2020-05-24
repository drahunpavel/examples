import React from 'react'
import { StylesProvider } from '@material-ui/core/styles';
// import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'red'
    },
  }));

export default function TodoItem({ title, id, completed }) {

    const classes = useStyles();
    console.log('--classes', classes)
    return (
        <StylesProvider>
            <li className="todo">
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={false}
                    />
                    <span className={classes.root}>{title}</span>

                    <i
                        className="material-icons red-text"
                    >
                        delete
                    </i>
                </label>
            </li>
        </StylesProvider>

    )
}