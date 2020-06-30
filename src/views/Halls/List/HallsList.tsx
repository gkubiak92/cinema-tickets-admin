import React, { useEffect } from "react";
import { fetchHallsStart } from "redux/halls/actions";
import { connect } from "react-redux";
import { IHallsListProps } from "./types";
import { IRootState } from "redux/types";
import { selectAllHalls } from "redux/halls/selectors";
import { setHallToEdit } from "redux/hall/actions";
import { deleteHallStart } from "redux/halls/actions";
import List from "components/List/List";

const HallsList = ({
  fetchHallsStart,
  setHallToEdit,
  deleteHallStart,
  halls,
  isDataLoaded,
}: IHallsListProps) => {
  useEffect(() => {
    if (!isDataLoaded) {
      fetchHallsStart();
    }
  }, [fetchHallsStart, isDataLoaded]);

  return (
    <List
      collectionName="halls"
      collectionTitle="Halls"
      fieldsToDisplay={["id", "name"]}
      itemName="hall"
      items={halls}
      onRefresh={fetchHallsStart}
      onDeleteItem={deleteHallStart}
    />
  );
};

const mapStateToProps = (state: IRootState) => ({
  halls: selectAllHalls(state),
  isDataLoaded: state.halls.isDataLoaded,
});

const mapDispatchToProps = {
  fetchHallsStart,
  setHallToEdit,
  deleteHallStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(HallsList);
