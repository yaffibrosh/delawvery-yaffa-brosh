import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Invitation from '../Invitation/Invitation';


function mapStateToProps(state) {

  return {

    orders: state.OrdersReducer.orders,
    order: state.OrderReducer.order,

  };
}
const mapDispatchToProps = (dispatch) => ({


});


function Invitations(props) {
  

  let orderNum = props.orders.length ;
  return (
    <div >
      <h3 style={{ textAlign: "center" }}>רשימת הזמנות</h3>
      <p style={{ textAlign: "center" }}>מספר הזמנות: {orderNum} </p>
      {props.orders.map(element => {
        return <Invitation item={element}></Invitation>
      })}


    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Invitations);