import React, { FC, Fragment } from 'react';
import styles from './Rejection.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Candidate } from '../../../../types/candidate';
import CardItem from '../../CardItem/CardItem';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface RejectionProps {
  candidatesList: Candidate[] | undefined,
  handleChangeStep: any
}

const Rejection: FC<RejectionProps> = ({candidatesList, handleChangeStep}) => {
  const backStep = "Asignación";
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <Fragment>
      <Card className={styles.card} data-testid="Rejection">
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Rejection
          </Typography>
          {
            candidatesList?.length === 0
            ? <p>No hay Candidatos</p>
            :<div ref={parent}>
              {
                (candidatesList?.map((item, i) =>
                  (
                    <CardItem item={item} key={i} handleChangeStep={handleChangeStep} backStep={backStep}/>
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

export default Rejection;
