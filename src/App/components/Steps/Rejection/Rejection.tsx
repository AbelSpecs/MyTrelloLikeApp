import React, { FC, Fragment } from 'react';
import styles from './Rejection.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';

interface RejectionProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any
}

const Rejection: FC<RejectionProps> = ({candidatesList, handleChangeStep}) => {
  const backStep = "Asignación";

  return (
    <Fragment>
      <Card className={styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Rejection
          </Typography>
          {
            candidatesList?.length === 0
            ? <p>No hay Candidatos</p>
            :
              (candidatesList?.map((item, i) =>
                (
                  <CardItem item={item} key={i} handleChangeStep={handleChangeStep} backStep={backStep}/>
                )
              ))
          }
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default Rejection;
