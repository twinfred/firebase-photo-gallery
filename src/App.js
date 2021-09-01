import './App.scss';
import Header from './components/Header/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';
import UploadForm from './components/UploadForm/UploadForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
