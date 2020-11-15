import axios from "axios";
import { useState } from "react";
import Auth from "../../auth"

const InputData = () => {
    let [hovered, setHovered] = useState(false);
    return(
        <div>
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
            }} style={{ height: '60vh', backgroundColor:"cyan", textAlign: 'center'}}>
                <label>
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
                    }} style={{display: 'none'}} />
                    <a 
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={ hovered ? {
                        cursor: 'pointer',
                        color: 'blue'
                    } : {
                        cursor: 'default'
                    }}
                    >Or click this to upload</a>
                </label>
            </div>
        </div>
    );
}
export default InputData;