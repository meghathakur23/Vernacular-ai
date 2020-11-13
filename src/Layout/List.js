import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Letter from '../Assets/img/icons/letter.png'
import Image from '../Assets/img/icons/image.png'
import Atom from '../Assets/img/icons/atom.png'
import Block  from '../Assets/img/icons/block.png'
import Credit from '../Assets/img/icons/credit-card.png'
import sheild from '../Assets/img/icons/shield.png'


const useStyles = makeStyles((theme) => ({
  root: {
      fontWeight:"500",
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
      <React.Fragment>
      <div>
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <img src={Letter} width="40"/>
        </ListItemAvatar>
        <ListItemText primary="Corporis voluptates sit" secondary="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <img src={Image} width="40"/>

        </ListItemAvatar>
        <ListItemText primary="Labore consequatar" secondary="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <img src={Atom} width="40"/>

        </ListItemAvatar>
        <ListItemText primary="Molestiate dolor" secondary="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </ListItem>
    </List>
    </div>
<div>
<List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
        <img src={Block} width="40"/>

        </ListItemAvatar>
        <ListItemText primary="Corporis voluptates sit" secondary="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <img src={sheild} width="40"/>

        </ListItemAvatar>
        <ListItemText primary="Labore consequatar" secondary="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
        <img src={Credit} width="40"/>

        </ListItemAvatar>
        <ListItemText primary="Molestiate dolor" secondary="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </ListItem>
    </List>
</div>
</React.Fragment>
  );
}
