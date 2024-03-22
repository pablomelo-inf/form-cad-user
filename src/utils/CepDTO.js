class CepDTO {
    constructor(cep, logradouro, bairro, cidade, estado) {
      this.cep = cep || '';
      this.logradouro = logradouro || '';
      this.bairro = bairro || '';
      this.cidade = cidade || '';
      this.estado = estado || '';
    }
  }
  
  export default CepDTO;