import { useNavigate } from "react-router-dom";


function withNavigation(component){
 return(props)=><component {...props} navigate={useNavigate()}/>;
 
}

export default withNavigation;