import React, { FC, Fragment } from 'react';
import styles from './InitialInterview.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';



interface InitialInterviewProps {
  candidatesList: Candidate[] | undefined;
  handleChangeStep: any
}

const InitialInterview: FC<InitialInterviewProps> = ({candidatesList, handleChangeStep}) => {
  const nexStep = "Entrevista técnica";

  return (
      <Fragment>
        <Card className={styles.card}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Entrevista Inicial
            </Typography>
            {candidatesList?.map((item, i) =>
              (
                <CardItem item={item} key={i} handleChangeStep={handleChangeStep} nexStep={nexStep}/>
              )
            )}
          </CardContent>
          <CardActions  className={styles.actions}>
            <Button size="small" className={styles.button}>Agregar Candidato</Button>
          </CardActions>
        </Card>
      </Fragment>
  )

}

export default InitialInterview;
