import React, { FC, Fragment } from 'react';
import styles from './Assignment.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';

interface AssignmentProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any
}

const Assignment: FC<AssignmentProps> = ({candidatesList, handleChangeStep}) => {
  const nexStep = "Rechazo";
  const backStep = "Oferta";

  return (
    <Fragment>
      <Card className={styles.card} data-testid="Assignment">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Assignment
          </Typography>
          {
            candidatesList?.length === 0
            ? <p>No hay Candidatos</p>
            :
              (candidatesList?.map((item, i) =>
                (
                  <CardItem item={item} key={i} handleChangeStep={handleChangeStep} nexStep={nexStep} backStep={backStep}/>
                )
              ))
          }
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default Assignment;
