import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../Store/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function mapStateToProps(state) {
  return {

    orders: state.OrdersReducer.orders,
    order: state.OrderReducer.order,

  };
}
const mapDispatchToProps = (dispatch) => ({
  setOrderProp: (name) => dispatch(actions.setOrderProp(name)),
  addOrder: (name) => dispatch(actions.addOrder(name)),
  
});


function OrderAdd(props) {

  console.log(props.orders)

  return (
    <div className="orderBox">
      <h1 >הזמנה חדשה</h1>
      <Box onBlur={ () => props.setOrderProp([props.orders.length+1, "_id"])}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>

          <TextField id="outlined-basic" label="שם פרטי" variant="outlined" onChange={(e) => props.setOrderProp([e.target.value, "firstName"])} />
          <TextField id="outlined-basic" label="שם משפחה" variant="outlined" onChange={(e) => props.setOrderProp([e.target.value, "lastName"])} />
          <br></br>
          <TextField
            id="date"
            label="תאריך"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => props.setOrderProp([e.target.value, "date"])}
          />
          <br></br>
          <Button variant="outlined" onClick={() => props.addOrder(props.order),() => props.initialemptyOrder()}>הוספה</Button>
        </div>
      </Box>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderAdd);