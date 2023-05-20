import React, { FC, Fragment } from 'react';
import styles from './Offer.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';

interface OfferProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any
}

const Offer: FC<OfferProps> = ({candidatesList, handleChangeStep}) => {
  const nexStep = "Asignación";
  const backStep = "Entrevista técnica";

  return (
    <Fragment>
      <Card className={styles.card}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Offer
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
  );
}

export default Offer;
