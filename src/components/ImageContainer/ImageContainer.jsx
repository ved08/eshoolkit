const ImageContainer = (props) => {
    const handlePopUp = () => {
        
    }
    return (
        <div>
            <img src={props.src} onClick={handlePopUp}/>
            <div className={props.show ? "show" : "hide"}>

            </div>
        </div>
    );
}