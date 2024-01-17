import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Mydashboard from './dashboard';
import Myuser from './user';
import Myproduct from './product';
import Myapi from './api';
import Mybook from './book';

function App() {
  return (
    <HashRouter>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="text-danger"> React & Redux </h1>
          </div>
          <div className="col-lg-8 text-end">
              <div className="btn-group">
                <Link className="btn btn-primary" to="/"> Dashboard </Link>
                <Link className="btn btn-success" to="/user"> Manage User </Link>
                <Link className="btn btn-warning" to="/product"> Manage Product </Link>
                <Link className="btn btn-dark" to="/myapi"> Manage Api Data </Link>
                <Link className="btn btn-danger" to="/book"> Manage Books </Link>
              </div>
          </div>
        </div>
      </div>

      <Routes>
          <Route exact path="/" element={ <Mydashboard/> }/>
          <Route exact path="/user" element={ <Myuser/> }/>
          <Route exact path="/product" element={ <Myproduct/> }/>
          <Route exact path="/myapi" element={ <Myapi/> }/>
          <Route exact path="/book" element={ <Mybook/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;
