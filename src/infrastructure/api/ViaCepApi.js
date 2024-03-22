
import CepDTO from "../../utils/CepDTO";

async function ViaCepApi(cep){
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const data = await response.json();  

        if(data.errors){
            console.error('Erro ao buscar CEP:', data.errors.message);      
            throw new Error('CEP não encontrado');
        
        }else{
            return new CepDTO(
                data.cep,
                data.logradouro,
                data.bairro,
                data.localidade,
                data.uf
            );
        }

    }catch(error){
        throw new Error('Erro ao buscar CEP');

    }
}

export {ViaCepApi};