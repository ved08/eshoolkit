import axios from "axios";
import Auth from "../../auth"

const InputData = () => {
    return(
        <div>
            <input type="file" onChange={e => {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    const data = await Auth.onAuthStateChanged()
                    await axios.post('http://localhost:3001/', {
                       base64: reader.result,
                       uid: data.uid,
                       rand: Math.floor(Math.random() * 100) 
                    })
                }
                reader.readAsDataURL(e.target.files[0])
            }} />
            <button>Dummy Button</button>
        </div>
    );
}
export default InputData;