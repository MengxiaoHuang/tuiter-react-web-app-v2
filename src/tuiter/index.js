import Nav from "../nav";
import NavigationSidebar
    from "./NavigationSidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/who-to-follow-list-item";
import PostSummaryItem
    from "./post-summary-list/post-summary-item";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/HomeScreen.js";
import PostList from "./home/PostList/PostList.js";


function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowListItem/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <PostList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryItem/>
            </div>
            <Routes>
                <Route path="home"    element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
            </Routes>
        </div>
    );
}

export default Tuiter