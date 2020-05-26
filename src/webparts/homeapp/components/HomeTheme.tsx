import { createMuiTheme } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal';
import lightBlue from '@material-ui/core/colors/lightBlue';

const Theme = createMuiTheme({
    palette:{
        primary: {
            main: lightBlue[600]
        },
        secondary:{
            main:teal[600]
        }
    }
})

export default Theme;