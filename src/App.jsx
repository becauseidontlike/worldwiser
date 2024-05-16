import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import { Suspense, lazy } from "react";
import "./index.css";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

// npm run build
// dist/assets/index-2df22f93.css   29.91 kB │ gzip:   5.03 kB
// dist/assets/index-28b1f59b.js   515.30 kB │ gzip: 148.11 kB

// dist/index.html                           0.42 kB │ gzip:   0.28 kB
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/Homepage-380f4eeb.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/AppLayout-40b8c7b9.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-abe34691.css           26.24 kB │ gzip:   4.35 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-435d6faf.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-a6bc0530.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-3fdd0547.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-6662aa1d.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-a32f6dc1.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-6451e37b.js           0.85 kB │ gzip:   0.48 kB
// dist/assets/Login-ebad3c4b.js             1.02 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-8b02cbc3.js       156.92 kB │ gzip:  46.12 kB
// dist/assets/index-0dacedef.js           356.87 kB │ gzip: 101.50 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
