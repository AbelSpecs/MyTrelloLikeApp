import React, { FC, Fragment, useState, ChangeEvent } from 'react';
import styles from './InitialInterview.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



interface InitialInterviewProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any,
  addCandidate: any
}

const InitialInterview: FC<InitialInterviewProps> = ({candidatesList, handleChangeStep, addCandidate}) => {
  const nexStep = "Entrevista técnica";
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({name: '', comment: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValues = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [name]: event.target.value});
  }

  const newCandidate = () => {
    const names = values.name.split(" ");

    const candidate: Candidate = {
      id: names.length === 1 ? names[0] : names[1],
      name: values.name,
      step: "Entrevista inicial",
      comments: values.comment
    };

    addCandidate(candidate);
    setValues({name: '', comment: ''});
    handleClose();
  }

  return (

    <Fragment>
      <Card className={styles.card} data-testid="InitialInterview">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Entrevista Inicial
          </Typography>
          {
             candidatesList?.length === 0
             ? <p>No hay Candidatos</p>
             :
              (candidatesList?.map((item, i) =>
                (
                  <CardItem item={item} key={i} handleChangeStep={handleChangeStep} nexStep={nexStep}/>
                )
              ))
          }
        </CardContent>
        <CardActions  className={styles.actions}>
          <Button size="small" className={styles.button} onClick={handleClickOpen}>Add Candidate</Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={styles.dialogTitle}>Add Candidate</DialogTitle>
        <DialogContent className={styles.dialogFields}>
          <TextField
            autoFocus
            margin="dense"
            name='name'
            label="Name"
            type="text"
            variant="standard"
            value={values.name}
            onChange={handleValues("name")}
          />
          <TextField
            margin="dense"
            name='comment'
            label="Comment"
            type="text"
            variant="standard"
            value={values.comment}
            onChange={handleValues("comment")}
          />
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button onClick={handleClose} className={styles.button}>Cancelar</Button>
          <Button onClick={newCandidate} className={styles.button}>Agregar</Button>
        </DialogActions>
      </Dialog>
    </Fragment>

  )

}

export default InitialInterview;
