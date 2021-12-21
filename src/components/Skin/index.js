import "./style.css";


function Skin({skinHeight = 568, children}) {
    return (
        <div className="skin">
            <div className="skin-container" style={skinHeight && {height: `${skinHeight}px`}}>        
      {children}
    </div>
        </div>
    )
}

export default Skin
