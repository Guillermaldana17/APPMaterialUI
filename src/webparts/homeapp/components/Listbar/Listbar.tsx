import * as React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
const Listbar = () => {
    return ( 
    <div>
    <List component='nav'>
        <ListItem button>
            <ListItemIcon>
            <AccessAlarmIcon/>
            </ListItemIcon>
            <ListItemText>
            Alarma
            </ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <LocalGasStationIcon/>
            </ListItemIcon>
            <ListItemText>
            Estacionamiento
            </ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <AccessAlarmIcon/>
            </ListItemIcon>
            <ListItemText>
            Alarma
            </ListItemText>
        </ListItem>
        <Divider/>
    </List>
    </div>
     );
}
 
export default Listbar;