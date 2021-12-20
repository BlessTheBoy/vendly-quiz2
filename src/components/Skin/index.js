import "./style.css";


function Skin({children}) {
    return (
        <div className="skin">
            <div className="skin-container" >        
      {children}
    </div>
        </div>
    )
}

export default Skin
