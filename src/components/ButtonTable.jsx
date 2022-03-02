import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";

import Swal from "sweetalert2";

import { connect } from "react-redux";
import { changePage } from "../redux/actions";

const ButtonTable = ({ page, setPage, ...props }) => {
  const nextPage = () => {
    let newPage = page;
    if (page < props.totalPages) {
      newPage = page + 1;
    } else if (newPage >= props.totalPages) {
      Swal.fire("No hay mas informacion que mostrar");
    }
    setPage(newPage);
    props.changePage(newPage);
  };
  const backPage = () => {
    if (page >= 1) {
      let back = page - 1;
      setPage(back);
      props.changePage(back);
    }
  };
  return (
    <>
      <Button id="back" onClick={backPage}>
        <AiOutlineStepBackward />
      </Button>
      <span className="h4">
        Pagina: {page + 1} de {props.totalPages}
      </span>
      <Button id="next" onClick={nextPage}>
        <AiOutlineStepForward />
      </Button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    totalPages: state.totalPages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: (payload) => dispatch(changePage(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTable);
