import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "config/firebase";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ChartForm = () => {
  const classes = useStyles();
  const firebaseCollectionName = "charts";
  const second = 1000;
  const toastDuration = second * 5;

  const [program, setProgram] = useState([]);
  const [totalOfInvitaion, setTotalOfInvitaion] = useState([]);
  const [roundDateTime, setRoundDateTime] = useState([]);
  const [lowestScore, setLowestScore] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const onSubmitChart = () => {
    const db = firebase.firestore();
    const newChartToAdd = {
      Program: program.toUpperCase(),
      TotalOfInvitaion: totalOfInvitaion,
      RoundDateTime: roundDateTime,
      LowestScore: lowestScore,
    };

    //1. Add a new Chart dataset to db
    db.collection(firebaseCollectionName)
      .add(newChartToAdd)
      .then(function (docRef) {
        setSuccessMsg(true);
      })
      .catch(function (error) {
        setErrorMsg(true);  
        console.error("Error adding document: ", error);
      });

    //2. Reset form
    resetForm();
  };

  const resetForm = () => {
    setProgram([]);
    setTotalOfInvitaion([]);
    setRoundDateTime([]);
    setLowestScore([]);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessMsg(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorMsg(false);
  };

  return (
    <>
      {/* Toast Msg Component */}
      <Snackbar open={successMsg} autoHideDuration={toastDuration} onClose={handleSuccessClose}>
        <Alert onClose={handleSuccessClose} severity="success">
          New chart dataset has been successfully added!
        </Alert>
      </Snackbar>

      <Snackbar open={errorMsg} autoHideDuration={toastDuration} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error">
          An error has been occured!
        </Alert>
      </Snackbar>
      
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-password-input"
            label="Program"
            value={program}
            onChange={(e) => {
              setProgram(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Total Of Invitaion"
            type="number"
            value={totalOfInvitaion}
            onChange={(e) => {
              setTotalOfInvitaion(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            id="datetime-local"
            label="Round DateTime"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={roundDateTime}
            onChange={(e) => {
              setRoundDateTime(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Lowest Score"
            type="number"
            value={lowestScore}
            onChange={(e) => {
              setLowestScore(e.target.value);
            }}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={onSubmitChart}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChartForm;
