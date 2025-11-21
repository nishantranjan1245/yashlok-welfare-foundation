import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import Programs from "./Programs";

import GetInvolved from "./GetInvolved";

import Updates from "./Updates";

import Contact from "./Contact";

import Donate from "./Donate";

import RiverCleaningChecklist from "./RiverCleaningChecklist";

import VolunteerToolkit from "./VolunteerToolkit";

import RoadSafetyTips from "./RoadSafetyTips";

import AnnualImpactReport from "./AnnualImpactReport";

import MediaPressReleases from "./MediaPressReleases";

import EventHighlights from "./EventHighlights";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfUse from "./TermsOfUse";

import RefundDonationPolicy from "./RefundDonationPolicy";

import Disclaimer from "./Disclaimer";

import Sitemap from "./Sitemap";

import TransparencyReport from "./TransparencyReport";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    Programs: Programs,
    
    GetInvolved: GetInvolved,
    
    Updates: Updates,
    
    Contact: Contact,
    
    Donate: Donate,
    
    RiverCleaningChecklist: RiverCleaningChecklist,
    
    VolunteerToolkit: VolunteerToolkit,
    
    RoadSafetyTips: RoadSafetyTips,
    
    AnnualImpactReport: AnnualImpactReport,
    
    MediaPressReleases: MediaPressReleases,
    
    EventHighlights: EventHighlights,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfUse: TermsOfUse,
    
    RefundDonationPolicy: RefundDonationPolicy,
    
    Disclaimer: Disclaimer,
    
    Sitemap: Sitemap,
    
    TransparencyReport: TransparencyReport,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Programs" element={<Programs />} />
                
                <Route path="/GetInvolved" element={<GetInvolved />} />
                
                <Route path="/Updates" element={<Updates />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Donate" element={<Donate />} />
                
                <Route path="/RiverCleaningChecklist" element={<RiverCleaningChecklist />} />
                
                <Route path="/VolunteerToolkit" element={<VolunteerToolkit />} />
                
                <Route path="/RoadSafetyTips" element={<RoadSafetyTips />} />
                
                <Route path="/AnnualImpactReport" element={<AnnualImpactReport />} />
                
                <Route path="/MediaPressReleases" element={<MediaPressReleases />} />
                
                <Route path="/EventHighlights" element={<EventHighlights />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfUse" element={<TermsOfUse />} />
                
                <Route path="/RefundDonationPolicy" element={<RefundDonationPolicy />} />
                
                <Route path="/Disclaimer" element={<Disclaimer />} />
                
                <Route path="/Sitemap" element={<Sitemap />} />
                
                <Route path="/TransparencyReport" element={<TransparencyReport />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}