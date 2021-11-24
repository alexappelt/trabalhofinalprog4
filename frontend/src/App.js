import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function enviaDados() {

  let nomeMarca = document.querySelector('#formBasicMarca').value;
  let idMarca = parseInt(document.querySelector('#formBasicIdMarca').value);




  let data = [{ id: idMarca, nome: nomeMarca }]

  console.log("Dados a Serem Enviados:", data)

  axios.post('http://localhost:4000/marcas', data).then(function (response) {
    toast.success("Marca cadastrada com sucesso!");
    console.log('Success: ', response);
  }).catch(function (error) {
    toast.error( error.response.data.message);
  });

}


function App() {
  return (


    <div className="container mt-5" >
      <Form >

        <Form.Group className="mb-3" controlId="formBasicIdMarca">

          <Form.Control placeholder="ID" type="text" />
          <Form.Text className="text-muted" >
          </Form.Text>

        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicMarca">

          <Form.Control placeholder="Descrição" type="text" />
          <Form.Text className="text-muted" >
          </Form.Text>

        </Form.Group>


        <Button variant="success" type="button" onClick={enviaDados}>
          Cadastrar
        </Button>

      </Form>
      <ToastContainer />
    </div>

  );
}

export default App;
