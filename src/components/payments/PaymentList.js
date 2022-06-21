import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import Typography from "@material-ui/core/Typography";
import history from "../../history";
import { fetchPayments } from "../../actions";
import DataGridContainer from "../DataGridContainer";
import PaymentEdit from "./PaymentEdit";
import PaymentDelete from "./PaymentDelete";

class PaymentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      deleteOpen: false,
      id: null,
      params: {},
    };
  }
  componentDidMount() {
    this.props.fetchPayments(this.props.token);
  }

  handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ deleteOpen: false });
  };

  handleEditDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ editOpen: false });
  };

  renderEditDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.editOpen}
          onClose={() => [
            this.setState({ editOpen: false }),
            history.push("/payments"),
          ]}
        >
          <DialogContent>
            <PaymentEdit
              token={this.props.token}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderDeleteDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.deleteOpen}
          onClose={() => [
            this.setState({ deleteOpen: false }),
            history.push(`/payments`),
          ]}
        >
          <DialogContent>
            <PaymentDelete
              token={this.props.token}
              id={this.state.id}
              handleDialogOpenStatus={this.handleDialogOpenStatus}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };
  renderPaymentsList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 100 },
      { field: "OrderNumber", headerName: "Order Number", width: 300 },
      {
        field: "totalInitialPaymentExpected",
        headerName: "Total Initial Payment Expected",
        width: 300,
      },
      {
        field: "initalPaymentMade",
        headerName: "Initial Payment Made",
        width: 150,
      },
      {
        field: "initialPaymentStatus",
        headerName: "Initial Payment Status",
        width: 150,
      },
      {
        field: "editaction",
        headerName: "",
        width: 30,
        description: "Update row",
        renderCell: (params) => (
          <strong>
            {/* {params.value.getFullYear()} */}
            <EditRoundedIcon
              onClick={() => [
                this.setState({
                  editOpen: true,
                  id: params.id,
                  params: params.row,
                }),
                history.push(`/payments/edit/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
      // {
      //   field: "deleteaction",
      //   headerName: "",
      //   width: 30,
      //   description: "Delete row",
      //   renderCell: (params) => (
      //     <strong>
      //       {/* {params.value.getFullYear()} */}
      //       <DeleteRoundedIcon
      //         style={{ color: "red" }}
      //         onClick={() => [
      //           this.setState({ deleteOpen: true, id: params.id }),
      //           history.push(`/payments/delete/${params.id}`),
      //         ]}
      //       />
      //     </strong>
      //   ),
      // },
    ];
    this.props.payments.map((payment) => {
      let row = {
        numbering: ++counter,
        id: payment.id,
        totalInitialPaymentExpected:
          payment.paymentBreakdown.initialPayment.amountExpected,
        initalPaymentMade: payment.paymentBreakdown.initialPayment.amountPaid,
        OrderNumber: payment.order[0],
        initialPaymentStatus: payment.paymentBreakdown.initialPayment.status,
      };
      rows.push(row);
    });
    return <DataGridContainer columns={columns} rows={rows} />;
  };

  render() {
    return (
      <>
        {this.renderDeleteDialogForm()}
        {this.renderEditDialogForm()}
        {this.renderPaymentsList()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { payments: Object.values(state.payment) };
};

export default connect(mapStateToProps, { fetchPayments })(PaymentList);
