import FirstComponent from "../component/FirstComponent"
import SecondComponent from "../component/SecondComponent"
import ThirdComponent from "../component/ThirdComponent"


 function GlobalComponent(){
    return(
<div>
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent/>
</div>
    )
}
export default GlobalComponent