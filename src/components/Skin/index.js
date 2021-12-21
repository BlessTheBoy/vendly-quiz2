import { forwardRef } from "react";
import "./style.css";


const Skin = forwardRef(({ children}, ref) =>{
    return (
        <div className="skin">
            <div className="skin-container" ref={ref}>        
      {children}
    </div>
        </div>
    )
})

export default Skin
