import {connect} from "react-redux";
import TabsContainer from "./Tabs/TabsContainer";

function Content() {

    return (
        <>
            <TabsContainer />
        </>
    );
}

let mstp = (state) => ({})

export default connect(mstp, {})(Content);