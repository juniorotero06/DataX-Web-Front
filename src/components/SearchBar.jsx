import React, { useState } from "react";
import { connect } from "react-redux";
import { onSearch } from "../redux/actions";
import { Button, Form, FormControl } from "react-bootstrap";

export function SearchBar(props) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Form
        className="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSearch(search.toLowerCase());
        }}
      >
        <FormControl
          type="search"
          className="me-2"
          aria-label="Search"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          disabled={props.loading === true}
          variant="outline-success"
          type="submit"
        >
          Buscar
        </Button>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (payload) => dispatch(onSearch(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
