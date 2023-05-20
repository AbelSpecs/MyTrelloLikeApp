import React, { FC, Fragment, useState, useEffect } from 'react';
import styles from './Dock.module.css';
import { Grid } from '@mui/material';
import InitialInterview from '../Steps/InitialInterview/InitialInterview';
import candidates from '../../../api/index';
import { Candidate } from '../../../types/candidate';
import TechnicalInterview from '../Steps/TechnicalInterview/TechnicalInterview';
import Offer from '../Steps/Offer/Offer';
import Assignment from '../Steps/Assignment/Assignment';
import Rejection from '../Steps/Rejection/Rejection';

interface DockProps {}

const Dock: FC<DockProps> = () => {
  const [candidatesList, setCandidatesList] = useState<Candidate[]>();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if(!localStorage.getItem("candidates")){
      candidates.candidates.list()
      .then(data => {
        setCandidatesList(data);
        localStorage.setItem("candidates", JSON.stringify(data));
      });
    }
    else{
      setCandidatesList(JSON.parse(localStorage.getItem("candidates") as string));
    }

  }, [])

  const handleChangeStep = (id: string, step: string) : any => {
    let index = candidatesList?.findIndex(c => c.id === id) as number;
    const candidatesUpdate = [...candidatesList as Candidate[]];
    const updateCandidate = {...candidatesUpdate[index], step: step};
    candidatesUpdate[index] = updateCandidate;
    setCandidatesList(candidatesUpdate);
    localStorage.removeItem("candidates");
    localStorage.setItem("candidates", JSON.stringify(candidatesUpdate));
  };

  const addCandidate = (candidate: Candidate): any => {
    setCandidatesList([...candidatesList as Candidate[], candidate]);
    const updateCandidates = JSON.parse(localStorage.getItem("candidates") as string);
    localStorage.removeItem("candidates");
    updateCandidates.push(candidate);
    localStorage.setItem("candidates", JSON.stringify(updateCandidates));
  }

  return (
    <Fragment>
      <Grid container justifyContent={'space-around'} >
        <Grid item xs={12} md={2}>
          <InitialInterview candidatesList={candidatesList?.filter(c => c.step === "Entrevista inicial")}
                            handleChangeStep={handleChangeStep} addCandidate={addCandidate}/>
        </Grid>

        <Grid item xs={12} md={2}>
          <TechnicalInterview candidatesList={candidatesList?.filter(c => c.step === "Entrevista técnica")}
                              handleChangeStep={handleChangeStep}/>
        </Grid>

        <Grid item xs={12} md={2}>
          <Offer candidatesList={candidatesList?.filter(c => c.step === "Oferta")}
                 handleChangeStep={handleChangeStep}/>
        </Grid>

        <Grid item xs={12} md={2}>
          <Assignment candidatesList={candidatesList?.filter(c => c.step === "Asignación")}
                      handleChangeStep={handleChangeStep}/>
        </Grid>

        <Grid item xs={12} md={2}>
          <Rejection candidatesList={candidatesList?.filter(c => c.step === "Rechazo")}
                     handleChangeStep={handleChangeStep}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Dock;
