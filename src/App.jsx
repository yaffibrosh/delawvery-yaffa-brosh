import { Router, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './history.js';
import './App.css';
import ButtonAppBar from './Header/Header.jsx';
import Grid from '@mui/material/Grid';
import Invitations from './Invitations/Invitations';
import OrderAdd from './OrderAdd/OrderAdd';
import OrderEdit from './OrderEdit/OrderEdit';


function mapStateToProps(state) {
  return {

    orders: state.OrdersReducer.orders,
    order: state.OrderReducer.order,


  };
}
const mapDispatchToProps = (dispatch) => ({


});


function App(props) {


  return (
    <Router history={history}>
      <Switch>
        <>
          {/* <ButtonAppBar></ButtonAppBar> */}
          <Route path={`*`} component={ButtonAppBar}></Route>

          <Grid className="home" container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={11} sm={10} md={10}>

              <Route exact path={`/`} component={OrderAdd}></Route>
              <Route path={`/editOrder/:orderId`} component={OrderEdit}>
              </Route>

            </Grid>
            <Grid className="invitations" item xs={1} sm={2} md={2}>

              <Route path={`*`} component={Invitations}></Route>

            </Grid>
          </Grid>
        </>
      </Switch>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
