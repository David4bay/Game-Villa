import React from 'react'
import { Slide } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Box,
    Container,
} from '@material-ui/core'

interface Props {
  window?: () => Window;
  children?: React.ReactElement
}
  
  function HideOnScroll(props: Props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
 }

function Header(props: Props) {

  const navItems = ['All Games', 'Signin', 'Signup']

  return (
    <React.Fragment>
      <CssBaseline  />
      <HideOnScroll {...props}>
      <div>
        <AppBar>
          <Toolbar className="navContainer">
          <Box className="titleSearchContainer">
           <strong className="homeTitle">GameVilla</strong>
          </Box>
           <ul className='navList'>
           {navItems.map((page) => ( 
                <li key={page}>
                  {page}
                </li>
              ))}
           </ul>
          </Toolbar>
        </AppBar>
        <input type="search" name="search" id="search" placeholder="Search Games..." />
      </div>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 120 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Header