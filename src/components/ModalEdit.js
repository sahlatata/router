import { Button,Modal,InputGroup,FormControl} from "react-bootstrap"
import { useState } from "react";
import ControlledRating from "./ControlledRating";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton  } from '@mui/material';


function ModalEdit({tab,setTab,el}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [textTitre,setTextTitre] = useState(el.title)
    const [textDescription,setTextDescription] = useState(el.description)
    const [textAffiche,setTextAffiche] = useState(el.posterURL)
    const[rate,setRate]=useState(el.rating)

    const handleEdit =(a)=>setTab(tab.map(al=>al.id===a?{...al,title:textTitre,description:textDescription,posterURL:textAffiche,rating:rate}:al))
return (
    <div>
  <IconButton style={{color:'#4682B4'}} onClick={handleShow} aria-label="edit">
    <EditIcon />
  </IconButton>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title >Modifier un film</Modal.Title>
        </Modal.Header>
        <Modal.Body>    
    <InputGroup className="mb-3">
    <InputGroup.Text  id="inputGroup-sizing-default">Film</InputGroup.Text>
    <FormControl
    onChange={(e)=>setTextTitre(e.target.value)}
    value={textTitre}
    aria-label="Nom "
    aria-describedby="inputGroup-sizing-default"
    />
</InputGroup>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
    <FormControl
      onChange={(e)=>setTextDescription(e.target.value)}
      value={textDescription}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Affiche</InputGroup.Text>
    <FormControl
    onChange={(e)=>setTextAffiche(e.target.value)}
    value={textAffiche}
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <ControlledRating rate={rate} setRate={setRate} value={rate}/>
</Modal.Body>
        <Modal.Footer>   
        <Button variant="secondary" onClick={handleClose}>
            Anuler
        </Button>
        <Button variant="dark">
            Modifier
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
)}
export default ModalEdit