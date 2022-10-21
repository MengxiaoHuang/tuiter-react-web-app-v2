import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import HelloWorld from "../HelloWorld";



export const Tuiter = () => {
    return(
        <>

            <Route path={["/a6/tuiter", "/a6/tuiter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a6/tuiter/explore"
                   exact={true} component={ExploreScreen}/>
            <Route path={"/a6/hello"}
                   exact={true} component={HelloWorld}/>

            {/*<HomeScreen/>*/}
            {/*<a6/>*/}
            {/*<ExploreScreen />*/}

        </>

    )
};

export default Tuiter;
