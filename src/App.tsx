import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import LootDive from './pages/LootDive'
import LootDivePrivacy from './pages/LootDivePrivacy'
import LootDivePrivacyEn from './pages/LootDivePrivacyEn'
import LootDiveContact from './pages/LootDiveContact'
import LootDiveReviewAppsIsland from './pages/LootDiveReviewAppsIsland'
import LootDiveUpdate121 from './pages/LootDiveUpdate121'
import LootDiveUpdate121En from './pages/LootDiveUpdate121En'
import LootDiveUpdate122 from './pages/LootDiveUpdate122'
import LootDiveUpdate122En from './pages/LootDiveUpdate122En'
import LootDiveUpdate124 from './pages/LootDiveUpdate124'
import LootDiveUpdate124En from './pages/LootDiveUpdate124En'
import LootDiveUpdate130 from './pages/LootDiveUpdate130'
import LootDiveUpdate130En from './pages/LootDiveUpdate130En'
import LootDiveUpdate131 from './pages/LootDiveUpdate131'
import LootDiveUpdate131En from './pages/LootDiveUpdate131En'
import LootDiveUpdate134 from './pages/LootDiveUpdate134'
import LootDiveUpdate134En from './pages/LootDiveUpdate134En'
import LootDiveUpdate134Ko from './pages/LootDiveUpdate134Ko'
import LootDiveUpdate200 from './pages/LootDiveUpdate200'
import LootDiveUpdate200En from './pages/LootDiveUpdate200En'
import LootDiveUpdate200Ko from './pages/LootDiveUpdate200Ko'
import LootDiveWiki from './pages/LootDiveWiki'
import LootDiveWikiEn from './pages/LootDiveWikiEn'
import AdminInquiries from './pages/AdminInquiries'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* LootDive has its own layout */}
        <Route path="/lootdive" element={<LootDive />} />
        <Route path="/lootdive/privacy" element={<LootDivePrivacy />} />
        <Route path="/lootdive/privacy/en" element={<LootDivePrivacyEn />} />
        <Route path="/lootdive/contact" element={<LootDiveContact />} />
        <Route path="/admin/inquiries" element={<AdminInquiries />} />
        {/* Other pages use shared Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/lootdive-wiki" element={<LootDiveWiki />} />
              <Route path="/article/lootdive-wiki/en" element={<LootDiveWikiEn />} />
              <Route path="/article/lootdive-update-2-0-0" element={<LootDiveUpdate200 />} />
              <Route path="/article/lootdive-update-2-0-0/en" element={<LootDiveUpdate200En />} />
              <Route path="/article/lootdive-update-2-0-0/ko" element={<LootDiveUpdate200Ko />} />
              <Route path="/article/lootdive-update-1-3-4" element={<LootDiveUpdate134 />} />
              <Route path="/article/lootdive-update-1-3-4/en" element={<LootDiveUpdate134En />} />
              <Route path="/article/lootdive-update-1-3-4/ko" element={<LootDiveUpdate134Ko />} />
              <Route path="/article/lootdive-update-1-3-1" element={<LootDiveUpdate131 />} />
              <Route path="/article/lootdive-update-1-3-1/en" element={<LootDiveUpdate131En />} />
              <Route path="/article/lootdive-update-1-3-0" element={<LootDiveUpdate130 />} />
              <Route path="/article/lootdive-update-1-3-0/en" element={<LootDiveUpdate130En />} />
              <Route path="/article/lootdive-update-1-2-4" element={<LootDiveUpdate124 />} />
              <Route path="/article/lootdive-update-1-2-4/en" element={<LootDiveUpdate124En />} />
              <Route path="/article/lootdive-update-1-2-2" element={<LootDiveUpdate122 />} />
              <Route path="/article/lootdive-update-1-2-2/en" element={<LootDiveUpdate122En />} />
              <Route path="/article/lootdive-update-1-2-1" element={<LootDiveUpdate121 />} />
              <Route path="/article/lootdive-update-1-2-1/en" element={<LootDiveUpdate121En />} />
              <Route path="/article/lootdive-review-apps-island" element={<LootDiveReviewAppsIsland />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
