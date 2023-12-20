import './index.css'
import SearchBar from '../SearchBar/index'
import Recommended from '../Recommended'
import React from 'react'
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'

const style = {
    display: 'flex',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: '#42505c',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    textColor: 'white'
  };

const ControlCenter = ({ recommended }: { recommended: Array<String> }) => {
    const arr = ['Kanye', 'is', 'the', 'goat', 'and', "there's", 'no', 'debate']
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='backdrop'>
            <div className='row1'>
                <SearchBar />
                <button className='sortify-button' onClick={handleOpen}>Sort</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <div className='row2'>
                <Recommended favs={arr} />
            </div>
        </div>


    );
}
export default ControlCenter;