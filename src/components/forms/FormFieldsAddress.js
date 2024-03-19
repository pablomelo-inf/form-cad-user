
import React, { useState } from "react";
import { 
  TextField,
  Grid
} from "@mui/material";

import './FormFieldsAddress.css'
import { buscaEnderecoPorCep } from "../../infrastructure/apiCep";


function FormFieldsAddress() { 

  const [formData, setFormData] = useState({
    cep : '',
    endereco: '',
    cidade: '',
    estado: '',
    erro: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const buscarEndereco = async () => {      
    
    setFormData({
      ...formData,
      erro: '',
      endereco: '',
      cidade: '',
      estado: ''
    });    

    try{      
      const data = await buscaEnderecoPorCep(formData.cep)
      setFormData({
        ...formData,
        endereco: `${data.street}, ${data.neighborhood}`,
        cidade: data.city,
        estado: data.state
      });

    }catch (error){
      console.error('Erro ao buscar CEP:', error.message);      
      setFormData({
        ...formData,
        erro: error.message
      });
    }
  }

  return (
    <> 
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="CEP"
            variant="outlined"
            fullWidth
            value={formData.cep}
            onChange={handleInputChange}
            onBlur={buscarEndereco}
            error={formData.erro !== ''}
            helperText={formData.erro}
            className="formularioCEP-textField"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Endereço"
            variant="outlined"
            fullWidth
            value={formData.endereco}
            onChange={handleInputChange}
            className="formularioCEP-textField"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Cidade"
            variant="outlined"
            fullWidth
            value={formData.cidade}
            onChange={handleInputChange}
            className="formularioCEP-textField"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Estado"
            variant="outlined"
            fullWidth
            value={formData.estado}
            onChange={handleInputChange}
            className="formularioCEP-textField"
          />
        </Grid>

      </Grid>
    </>    
  );
}

export default FormFieldsAddress;