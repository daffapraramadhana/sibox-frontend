import "./App.css";
import LandingPage from "./components/screens/LandingPage";
import PelangganKirimScanInput from "./components/screens/PelangganKirimScanInput";
import MasukanDetailPengiriman from "./components/screens/MasukanDetailPengiriman";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasukanDetailPenerima from "./components/screens/MasukanDetailPenerima";
import MasukanDimensi from "./components/screens/MasukanDimensi";
import DetailPengiriman from "./components/screens/DetailPengiriman";
import ScanBarcode from "./components/screens/ScanBarcode";
import LabelPrint from "./components/screens/LabelPrint";
import LokerTerbuka from "./components/screens/LokerTerbuka";
import PaketTersimpan from "./components/screens/PaketTersimpan";
import TerimaKasih from "./components/screens/TerimaKasih";
import TestLandingPage from "./components/screens/TestLandingPage";
import InputPinAmbil from "./components/screens/InputPinAmbil";
import DetailPengirimanBarcode from "./components/screens/DetailPengirimanBarcode";
import LokerTerbukaBarcode from "./components/screens/LokerTerbukaBarcode";
import LokerTerbukaAmbil from "./components/screens/LokerTerbukaAmbil";
import LoginKurir from "./components/screens/LoginKurir";
import DashboardKurir from "./components/screens/DashboardKurir";
import InputKodeKurir from "./components/screens/InputKodeKurir";
import DetailPengirimanKurir from "./components/screens/DetailPengirimanKurir";
import LokerTerbukaKurir from "./components/screens/LokerTerbukaKurir";
import TestJson from "./components/screens/TestJson";
import MasukanDimensiKurir from "./components/screens/MasukanDimensiKurir";
import ReworkLandingPage from "./components/screens/ReworkLandingPage";
import ReworkLandingPage2 from "./components/screens/ReworkLandingPage2";
import ReworkLandingPage3 from "./components/screens/ReworkLandingPage3";
import MasukanDetailPenerimaLanjut from "./components/screens/MasukanDetailPenerimaLanjut";
import MasukanDetailPaket from "./components/screens/MasukanDetailPaket";
import MasukanJenisPengiriman from "./components/screens/MasukanJenisPengiriman";
import MasukanDetailPengirimanLanjut from "./components/screens/MasukanDetailPengirimanLanjut";
import { Helmet } from "react-helmet";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function App() {
  disableRightClick();

  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<ReworkLandingPage3 />} />
          <Route
            path="/PelangganKirimScanInput"
            element={<PelangganKirimScanInput />}
          />
          <Route
            path="/MasukanDetailPengiriman"
            element={<MasukanDetailPengiriman />}
          />
          <Route
            path="/MasukanDetailPenerima"
            element={<MasukanDetailPenerima />}
          />
          <Route path="/MasukanDimensi" element={<MasukanDimensi />} />
          <Route path="/DetailPengiriman" element={<DetailPengiriman />} />
          <Route path="/ScanBarcode" element={<ScanBarcode />} />
          <Route path="/LabelPrint" element={<LabelPrint />} />
          <Route path="/LokerTerbuka" element={<LokerTerbuka />} />
          <Route path="/PaketTersimpan" element={<PaketTersimpan />} />
          <Route path="/TerimaKasih" element={<TerimaKasih />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/InputPinAmbil" element={<InputPinAmbil />} />
          <Route
            path="/DetailPengirimanBarcode"
            element={<DetailPengirimanBarcode />}
          />
          <Route
            path="/LokerTerbukaBarcode"
            element={<LokerTerbukaBarcode />}
          />
          <Route path="/LokerTerbukaAmbil" element={<LokerTerbukaAmbil />} />
          <Route path="/LoginKurir" element={<LoginKurir />} />
          <Route path="/DashboardKurir" element={<DashboardKurir />} />
          <Route path="/InputKodeKurir" element={<InputKodeKurir />} />
          <Route
            path="/DetailPengirimanKurir"
            element={<DetailPengirimanKurir />}
          />
          <Route path="/LokerTerbukaKurir" element={<LokerTerbukaKurir />} />
          <Route path="/TestJson" element={<TestJson />} />
          <Route
            path="/MasukanDimensiKurir"
            element={<MasukanDimensiKurir />}
          />
          <Route path="/ReworkLandingPage" element={<ReworkLandingPage />} />
          <Route path="/TestLandingPage" element={<TestLandingPage />} />
          <Route path="/ReworkLandingPage2" element={<ReworkLandingPage2 />} />
          <Route
            path="/MasukanDetailPenerimaLanjut"
            element={<MasukanDetailPenerimaLanjut />}
          />
          <Route path="/MasukanDetailPaket" element={<MasukanDetailPaket />} />
          <Route
            path="/MasukanJenisPengiriman"
            element={<MasukanJenisPengiriman />}
          />
          <Route
            path="/MasukanDetailPengirimanLanjut"
            element={<MasukanDetailPengirimanLanjut />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
