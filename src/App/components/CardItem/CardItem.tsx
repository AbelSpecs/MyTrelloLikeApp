import React, { FC, useRef } from 'react';
import styles from './CardItem.module.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Candidate } from '../../../types/candidate';


interface CardItemProps {
  item: Candidate,
  handleChangeStep: any,
  nexStep?: string,
  backStep?: string,
  // checked: boolean,
}

const CardItem: FC<CardItemProps> = React.forwardRef((props, ref) => {
  const {item, handleChangeStep, nexStep, backStep} = props;
  // ref = ref == null ? useRef<HTMLDivElement>(null) : ref;
  // console.log(ref);
  return (
      // <div ref={ref}>
        <Card className={styles.cardItem} data-testid="Card">
          <CardHeader
            className={styles.cardItemContent}
            title={item.name}
            subheader={item.comments}
          >
          </CardHeader>
          <CardActions className={styles.itemCardActions}>
            <Button size="small" className={styles.arrowBtnRight} onClick={() => {handleChangeStep(item.id, backStep)}}><ArrowBackIosIcon/></Button>
            <Button size="small" className={styles.arrowBtnLeft} onClick={() => {handleChangeStep(item.id, nexStep)}}><ArrowForwardIosIcon/></Button>
          </CardActions>
        </Card>
      // </div>
  )
});



export default CardItem;
