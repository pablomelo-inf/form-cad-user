import React, { useState } from "react";
import { 
  TextField,
  Grid
} from "@mui/material";

import './FormFieldsAddress.css'
import CepRepository from "../../infrastructure/repository/CepRepository";


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
    //Optional Chaining .?  JavaScript ES2020
    try{      
      const data = await CepRepository.buscarCep(formData.cep)
      console.log(data)
      setFormData({
        ...formData,
        endereco: `${data?.logradouro}`,
        cidade: data?.cidade,
        estado: data?.estado
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
            name="cep"
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
            name="endereco"
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
            name="cidade"
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
            name="estado"
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