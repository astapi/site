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
