import './index.css'
import SearchBar from '../SearchBar/index'
import Recommended from '../Recommended'
import React from 'react'
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

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
    color: '#FFF',
    justifyContent: 'space-between'
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
                        <div>
                            <Typography id="modal-modal-title">Upload Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                            <hr />
                            <div className='filter'>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Last hour</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Today</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>This week</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>This month</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>This year</Button>
                            </div>
                        </div>
                        <div>
                            <Typography id="modal-modal-title">Content Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                            <hr />
                            <div className='filter'>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Short Video</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Full Video</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Slideshow</Button>
                            </div>
                        </div>
                        <div>
                            <Typography id="modal-modal-title">Video Length&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                            <hr />
                            <div className='filter'>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Under 30 seconds</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>30-60 seconds</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>1-3 minutes</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>3-10 minutes</Button>
                            </div>
                        </div>
                        <div>
                            <Typography id="modal-modal-title">Sort By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                            <hr />
                            <div className='filter'>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Relevance</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Upload date</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>View count</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Rating</Button>
                            </div>
                        </div>
                        <div>
                            <Typography id="modal-modal-title">List In&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                            <hr />
                            <div className='filter'>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Ascending order</Button>
                                <Button variant="text" color='inherit' size='medium' style={{textTransform: 'none'}}>Descending order</Button>
                            </div>
                        </div>
                        
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