import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <div className='app-form'>
        <Grid container spacing={2}>
          <Grid item xs={6} p={2}>
            <label>First Name</label>
            <TextField />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Last Name</label>
            <TextField />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Address</label>
            <TextField />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Salary</label>
            <AmountTextbox value={salary} onChange={setSalary} decimalDigits={2} />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Age</label>
            <TextField />
          </Grid>
          <Grid item xs={6} p={2}>
            <label>Document</label>
            <TextField type='file' />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
