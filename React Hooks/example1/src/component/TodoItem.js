import React from 'react'
import { StylesProvider } from '@material-ui/core/styles';
// import { ThemeProvider, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    todo: {
        marginBottom: '1rem',

        completed: {
            span: {
                textDecoration: 'line-through',
                color: 'blue'
            }
        }
    },
  };


function TodoItem({ title, id, completed, classes}) {

    return (

        <li className={classes.todo}>
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={false}
                    />
                    <span >{title}</span>

                    <i
                        className="material-icons red-text"
                    >
                        delete
                    </i>
                </label>
            </li>

    )
}

export default withStyles(styles)(TodoItem);