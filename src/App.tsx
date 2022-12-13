import "./App.css";
import { fetch, ResponseType } from '@tauri-apps/api/http';

function App() {

  function openDoor() {
    fetch('http://192.168.0.47:3000/api/door', {method: 'GET', responseType: ResponseType.Text}).then(res => {
      if(res.status == 200) {
        console.log('Req. Successful')
      } else {
        console.error('Houston, we have a problem!')
      }
    })
  }

  return (
    <div className="container">
     <button onClick={() => openDoor()}>Open Door</button>
    </div>
  );
}

export default App;
