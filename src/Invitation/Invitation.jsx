import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../Store/actions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton  from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import history from '../history.js';


function mapStateToProps(state) {
  return {
   
    orders: state.OrdersReducer.orders,

  };
}
const mapDispatchToProps = (dispatch) => ({
  removeOrder:(name)=> dispatch(actions.removeOrder(name)),

});


function Invitation(props) {

  const order = props.item;

  const navigateToOrder = (order) => {
    history.push(`/editOrder/${order._id}`);
    }
  return (
    <>
      <Card className="orderCard" sx={{ minWidth: 150}}>
    <div className="cardHeader" >
          <IconButton className="floatLeft" marginRight="0 !important"
            onClick={()=>props.removeOrder(order._id)}><CloseIcon fontSize="small" ></CloseIcon>
          </IconButton>
          <IconButton className="floatLeft" marginLeft="0 !important" textAlign="left"
          onClick={()=>navigateToOrder(order)}>
            <EditIcon fontSize="small" ></EditIcon>
          </IconButton>
              <Typography className="floatLeft orderNum" variant="h6"    >
         {order._id}  הזמנה 
              </Typography>
        
              {/* <Button size="small"></Button> */}
      </div>
      <CardContent padding="0 !important">
      
        <Typography textAlign="right" sx={{ fontSize: 15 }}  component="div">
          פרטים
        </Typography>
        
        <Typography textAlign="right" variant="body2">
        {order.firstName} {order.lastName}   
              </Typography>
           
              <Typography textAlign="right" variant="body2">
              {order.date}  
        </Typography>
      </CardContent>
     
    </Card>
   
   
  </>
  );
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Invitation);