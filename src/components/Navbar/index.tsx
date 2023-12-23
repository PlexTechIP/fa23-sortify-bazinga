import { Link } from "react-router-dom";
import "./index.css"
import React from 'react'
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';



const Navbar = () => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/"><img src="/logo.png" alt="Logo" className="logo" /></Link>
      </div>
      <div className="nav-buttons">
        <Link to="/videos"><button className="nav-button">Library</button></Link>
        <Link to="/dashboard"><button className="nav-button">Account</button></Link>
        <button className="nav-button login-button" onClick={handleOpen}>Login</button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Sign In
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              This is where the Log in Goes
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </div>
    </div>
  );
};

export default Navbar;





 