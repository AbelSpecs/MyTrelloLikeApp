import React, { FC, Fragment } from 'react';
import styles from './TechnicalInterview.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';

interface TechnicalInterviewProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any
}

const TechnicalInterview: FC<TechnicalInterviewProps> = ({candidatesList,  handleChangeStep}) => {
  const nexStep = "Oferta";
  const backStep = "Entrevista inicial";

  return (
    <Fragment>
      <Card className={styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Technical Interview
          </Typography>
          {candidatesList?.map((item, i) =>
            (
              <CardItem item={item} key={i} handleChangeStep={handleChangeStep} nexStep={nexStep} backStep={backStep}/>
            )
          )}
        </CardContent>
      </Card>
    </Fragment>
  )
}


export default TechnicalInterview;
