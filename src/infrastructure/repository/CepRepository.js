import { OpenCepApi} from "../api/OpenCepApi";
import { ViaCepApi} from "../api/ViaCepApi";
import { BrasilApi } from "../api/BrasilApiCep";

class CepRepository {
    static async buscarCep(cep){
        const apis = [
            BrasilApi,
            OpenCepApi,
            ViaCepApi
        ];

        for(const apiCep of apis){
            try{
                const result = await apiCep(cep)
                return result;
            }catch(err){
                console.error(err.message);
            }
        }

        throw new Error('Erro ao buscar CEP')
        
    }
}

export default CepRepository;