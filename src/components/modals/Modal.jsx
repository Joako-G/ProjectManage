import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export function Modal ({ open, handleClose, handleClickYes }) {
  const buttonYes = () => {
    handleClickYes()
    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        ¿Esta seguro que desea eliminar este proyecto?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Una vez eliminado el proyecto no podra volver a recuperarlo.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={buttonYes}>Si</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
}
