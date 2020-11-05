import axios from "axios";
import Auth from "../../auth"

const InputData = () => {
    return(
        <div>
            <input type="file" accept=".jpg .jpeg .png .jfif" onChange={e => {
                const reader = new FileReader();
                reader.onloadend = async () => {
                    const data = await Auth.onAuthStateChanged()
                    await axios.post('http://localhost:3001/', {
                       base64: reader.result,
                       uid: data.uid
                    })
                }
                reader.readAsDataURL(e.target.files[0])
            }} />
            <div onDragOver={e => {
                e.stopPropagation();
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
            }} onDrop={e => {
                e.stopPropagation();
                e.preventDefault();
                const fileList = e.dataTransfer.files;
                const reader = new FileReader();
                reader.onloadend = async () => {
                    console.log(reader.result)
                }
                reader.readAsDataURL(fileList[0])
            }} style={{width: '100px', height: '100px', backgroundColor:"cyan", textAlign: 'center'}}>

            </div>
            <button>Dummy Button</button>
        </div>
    );
}
export default InputData;