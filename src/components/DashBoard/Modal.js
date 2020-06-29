import React, { Fragment } from "react";

import {
  Card,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  FormFeedback,
} from "reactstrap";

const modal = ({ modal, toggle, handleSumbit, bindAlbum, bindArtist }) => {
  return (
    <Fragment>
      <Modal zIndex={2000} centered isOpen={modal} toggle={toggle}>
        <div>
          <Card className="bg-secondary shadow-none border-0">
            <ModalHeader className="center">Create Vinyl Record</ModalHeader>
            <div className="card-body px-lg-5 py-lg-5">
              <form>
                <FormGroup>
                  <label>Enter Name of Album</label>
                  <Input
                    placeholder="Enter Name of Album"
                    type="text"
                    {...bindAlbum}
                  />
                  <FormFeedback>Invalid city</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <label>Enter Name of Artist/Band</label>
                  <Input
                    placeholder="Enter Name of Album"
                    type="text"
                    {...bindArtist}
                  />
                  <FormFeedback>Invalid city</FormFeedback>
                </FormGroup>
                <div className="text-center mb-5">
                  <Button
                    color="primary"
                    size="lg"
                    block={true}
                    className="mb-5"
                    onClick={handleSumbit}
                  >
                    Create Records
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </Modal>
    </Fragment>
  );
};

export default modal;
