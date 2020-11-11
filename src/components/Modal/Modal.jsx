import { Modal, Button } from "react-bootstrap"

const PopupModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Drag and Drop the image here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{height: '50vh'}}>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default PopupModal