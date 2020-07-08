import React from 'react';
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import { Link, ListItem, ListItemIcon, List } from "@material-ui/core";


const Subheading = () => {
  
  return (
    <>
      <List className="icon-list">
        <ListItem button component={Link} target="_blank" rel="noopener noreferrer" href="https://github.com/christopherleja"> 
          <ListItemIcon className="list__icon"> <GitHub className='icon'/> </ListItemIcon>
        </ListItem> 

        <ListItem button component={Link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopherleja/"> 
          <ListItemIcon> <LinkedIn/> </ListItemIcon>
        </ListItem> 

        <ListItem button component={Link} target="_blank" rel="noopener noreferrer" href={"mailto: christopher.leja@gmail.com"}> 
          <ListItemIcon> <Email/> </ListItemIcon>
        </ListItem> 
      </List>
    </>
  )
}

export default Subheading
