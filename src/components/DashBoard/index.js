import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecords, createRecord } from "../../actions";
import { useInput } from "../Hooks/useInput";
import Header from "./Header";
import RecordsTable from "./RecordsTable";
import Modal from "./Modal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const { value: album, bind: bindAlbum, reset: resetAlbum } = useInput("");
  const { value: artist, bind: bindArtist, reset: resetArtist } = useInput("");
  const records = useSelector((state) => state.recordsReducer.records);
  const dispatch = useDispatch();
  const reqObject = {
    recordId: uuidv4(),
    albumName: album,
    artistName: artist,
  };

  const handleSumbit = async () => {
    dispatch(createRecord(reqObject)).then(() => {
      resetAlbum();
      resetArtist();
    });
  };
  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(fetchRecords());
  }, []);

  return (
    <div>
      <Modal
        modal={modal}
        toggle={toggle}
        handleSumbit={handleSumbit}
        bindAlbum={bindAlbum}
        bindArtist={bindArtist}
      />
      <Header />
      <RecordsTable toggle={toggle} records={records} />
    </div>
  );
};

export default Dashboard;
