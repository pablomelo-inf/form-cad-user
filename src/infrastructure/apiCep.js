
async function buscaEnderecoPorCep(cep){
    try{
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        const data = await response.json();  

        if(data.errors){
            console.error('Erro ao buscar CEP:', data.errors.message);      
            throw new Error('CEP não encontrado');
        
        }else{
            await response.json();  
        }

    }catch(error){
        throw new Error('Erro ao buscar CEP');

    }
}

export {buscaEnderecoPorCep};