import React, { useEffect, useRef, useState } from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';

function SideBar() {
  return (
    <Drawer anchor="left" open={true}>
      <List>
        <ListItem button>
          PROFILE
        </ListItem>
        <ListItem button>
          NOTICES
        </ListItem>
        <ListItem button>
          CHAT
        </ListItem>
        <ListItem button>
          NETWORK
        </ListItem>
        <ListItem button>
          OTHER
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar
