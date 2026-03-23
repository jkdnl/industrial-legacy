import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./layout";
import Home from "pages/Home";
import EventsPage from "pages/EventsPage";
import PublicationsPage from "pages/PublicationsPage";
import PartnersPage from "pages/PartnersPage";
import ObjectPage from "pages/ObjectPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=":lang" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="events" element={<EventsPage />} />
                    <Route path="publications" element={<PublicationsPage />} />
                    <Route path="partners" element={<PartnersPage />} />
                    <Route path="objects/:slug" element={<ObjectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
