import { Modal,Button,InputGroup,FormControl} from "react-bootstrap"
import { useState } from "react";
import ControlledRating from "./ControlledRating";

function AddModal({tab,setTab}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [textTitre,setTextTitre] = useState('')
    const [textDescription,setTextDescription] = useState('')
    const [textAffiche,setTextAffiche] = useState('')
    const[rate,setRate]=useState(0)
    const handleAdd =()=>setTab([...tab,{ title:textTitre, description:textDescription, posterURL:textAffiche, rating:rate,id: Math.random() }]) 
    
return (
    <div>
    <Button className="bluesky" onClick={handleShow}>
        Ajouter un film
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{color:'#4682B4'}}>Ajouter un film</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
      <InputGroup className="mb-3">
    <InputGroup.Text  id="inputGroup-sizing-default">Film</InputGroup.Text>
   
    <FormControl
    onChange={(e)=>setTextTitre(e.target.value)}
    aria-label="Nom "
    aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
    <FormControl
      onChange={(e)=>setTextDescription(e.target.value)}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Affiche</InputGroup.Text>
    <FormControl
    onChange={(e)=>setTextAffiche(e.target.value)}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <ControlledRating rate={rate} setRate={setRate}/>
</Modal.Body>
        <Modal.Footer>
        
        <Button variant="secondary" onClick={handleClose}>
            Anuler
        </Button>
        <Button variant="dark"onClick={ ()=>{handleAdd();handleClose()}}>
            Ajouter
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
)}

export default AddModal