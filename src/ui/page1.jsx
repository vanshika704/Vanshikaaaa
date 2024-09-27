
// import { TracingBeamDemo } from "../components/beam";
import TracingBeamDemo1 from "../components/beam";

import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";



function Page1 (){
    return (<><div className="dark:bg-neutral-900 "   style={{ height: '400vh' }}><TracingBeamDemo1/><Page2/><Page3/><Page4/></div></>)
}
export default Page1;