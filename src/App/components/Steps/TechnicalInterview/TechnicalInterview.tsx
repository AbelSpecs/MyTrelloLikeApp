import React, { FC, Fragment } from 'react';
import styles from './TechnicalInterview.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface TechnicalInterviewProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any
}

const TechnicalInterview: FC<TechnicalInterviewProps> = ({candidatesList,  handleChangeStep}) => {
  const nexStep = "Oferta";
  const backStep = "Entrevista inicial";
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <Fragment>
      <Card className={styles.card} data-testid="TechnicalInterview">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Technical Interview
          </Typography>
          {
            candidatesList?.length === 0
            ? <p>No hay Candidatos</p>
            :<div ref={parent}>
              {
                (candidatesList?.map((item, i) =>
                  (
                    <CardItem item={item} key={i} handleChangeStep={handleChangeStep} nexStep={nexStep} backStep={backStep}/>
                  )
                ))
              }
            </div>
          }
        </CardContent>
      </Card>
    </Fragment>
  )
}


export default TechnicalInterview;
