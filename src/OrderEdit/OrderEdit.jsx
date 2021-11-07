import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { actions } from '../Store/actions';
import { useParams } from 'react-router-dom';
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
    updateOrder:(name)=> dispatch(actions.updateOrder(name)),
    setOrderProp: (name) => dispatch(actions.setOrderProp(name)),

  });
  

function OrderEdit(props) {

  let { orderId } = useParams();

  useEffect(() => {
    props.setOrderProp([orderId - 0, "_id"])

  },[props.order])
 
  console.log("in order edit")

  return (
    <div className = "orderBox">
    <h1 >עדכון הזמנה</h1>
      <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div key = {orderId}>
      <TextField id="outlined-basic" label="שם פרטי" variant="outlined" defaultValue={props.orders[orderId-1].firstName} onChange={(e) => props.setOrderProp([e.target.value, "firstName"])} />
          <TextField id="outlined-basic" label="שם משפחה" variant="outlined" defaultValue={props.orders[orderId-1].lastName} onChange={(e) => props.setOrderProp([e.target.value, "lastName"])} />
          <br></br>
          <TextField
            id="date"
            label="תאריך"
            type="date"
            defaultValue={props.orders[orderId-1].date}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => props.setOrderProp([e.target.value, "date"])}
          />
          <br></br>
          <Button variant="outlined" onClick={() => props.updateOrder(props.order)}>עדכון</Button>
      </div>
      </Box>
      </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderEdit);




