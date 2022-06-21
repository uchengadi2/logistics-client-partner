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
import RemittanceEdit from "./RemittanceEdit";
import RemittanceDelete from "./RemittanceDelete";

class RemittanceList extends React.Component {
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
            history.push("/remittances"),
          ]}
        >
          <DialogContent>
            <RemittanceEdit
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
          // style={{ zIndex: 1302 }}
          open={this.state.deleteOpen}
          onClose={() => [
            this.setState({ deleteOpen: false }),
            history.push(`/remittances`),
          ]}
        >
          <DialogContent>
            <RemittanceDelete
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
      { field: "orderNumber", headerName: "Order Number", width: 300 },

      {
        field: "initalPaymentRemittedAmount",
        headerName: "Initial Payment Remitted Amount",
        width: 250,
      },

      {
        field: "initialPaymentRemittedStatus",
        headerName: "Initial Payment Remitted Status",
        width: 250,
      },
      {
        field: "viewaction",
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
                history.push(`/remittances/view/${params.id}`),
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
      //           history.push(`/remittances/delete/${params.id}`),
      //         ]}
      //       />
      //     </strong>
      //   ),
      // },
    ];
    this.props.remittances.map((remittance) => {
      let row = {
        numbering: ++counter,
        id: remittance.id,
        initalPaymentRemittedAmount:
          remittance.paymentRemittal.initialPayment.amountRemitted,
        orderNumber: remittance.order[0],

        initialPaymentRemittedStatus:
          remittance.paymentRemittal.initialPayment.status,
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
  return { remittances: Object.values(state.payment) };
};

export default connect(mapStateToProps, { fetchPayments })(RemittanceList);
