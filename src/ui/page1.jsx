
// import { TracingBeamDemo } from "../components/beam";
import TracingBeamDemo1 from "../components/beam";

import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";



function Page1 (){
    return (<><div className="dark:bg-neutral-900 "   style={{ height: '700vh' }}><TracingBeamDemo1/><Page2/><Page3/><Page4/><Page5/></div></>)
}
export default Page1;