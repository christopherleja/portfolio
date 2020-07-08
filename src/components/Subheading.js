import React from 'react';
// import {makeStyles } from "@material-ui/core/styles"
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import { Link, ListItem, ListItemIcon, List } from "@material-ui/core";

// const styles = makeStyles((theme) => ({
//   root: {
//   ".MuiListItemIcon-root": {
//     minWidth: "0",
//   }
// }
// }));


const Subheading = () => {
  
  return (
    <>
      <List className="icon-list">
        <ListItem button component={Link} target="_blank" rel="noopener noreferrer" href="https://github.com/christopherleja"> 
          <ListItemIcon className="list__icon"> <GitHub className='icon'/> </ListItemIcon>
          {/* <ListItemText> GitHub </ListItemText> */}
        </ListItem> 

        <ListItem button component={Link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopherleja/"> 
          <ListItemIcon> <LinkedIn/> </ListItemIcon>
          {/* <ListItemText> LinkedIn </ListItemText> */}
        </ListItem> 

        <ListItem button component={Link} target="_blank" rel="noopener noreferrer" href={"mailto: christopher.leja@gmail.com"}> 
          <ListItemIcon> <Email/> </ListItemIcon>
          {/* <ListItemText> Email </ListItemText> */}
        </ListItem> 
      </List>
    </>
  )
}

export default Subheading
