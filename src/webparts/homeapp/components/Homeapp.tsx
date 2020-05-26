import * as React from 'react';
import { IHomeappProps } from './IHomeappProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './HomeTheme'
import Navbar from './Navbar'
import Listbar from './Listbar'

const HomeApp = (IHomeappProps) => {

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <div>
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
          Eliminar
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddIcon />}
        >
          Agregar
        </Button>
        <Listbar/>
      </div>
    </ThemeProvider>
  );
}

export default HomeApp; 
