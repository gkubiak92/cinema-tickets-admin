import React, { useEffect } from "react";
import { IRootState } from "redux/types";
import { ScreeningsListProps } from "./types";
import { selectAllScreenings } from "redux/screenings/selectors";
import {
  fetchScreeningsStart,
  deleteScreeningStart,
} from "redux/screenings/actions";
import { connect } from "react-redux";
import List from "components/List/List";

const ScreeningList = ({
  screenings,
  fetchScreeningsStart,
  deleteScreeningStart,
  isDataLoaded,
}: ScreeningsListProps) => {
  useEffect(() => {
    if (!isDataLoaded) {
      fetchScreeningsStart();
    }
  }, [fetchScreeningsStart, isDataLoaded]);

  return (
    <List
      collectionName="screenings"
      collectionTitle="Screenings"
      fieldsToDisplay={["id", "movieId", "hallId", "dateAndHour"]}
      itemName="screening"
      items={screenings}
      onRefresh={fetchScreeningsStart}
      onDeleteItem={deleteScreeningStart}
    />
  );
};

const mapStateToProps = (state: IRootState) => ({
  screenings: selectAllScreenings(state),
  isDataLoaded: state.screenings.isDataLoaded,
});

const mapDispatchToProps = { fetchScreeningsStart, deleteScreeningStart };

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningList);
