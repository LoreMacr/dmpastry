import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth';


const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await login(formData.email, formData.password)
    if(result) {
      history.push('/')
    }
  }
  
  return(
    <>
    <div className="container_login">
      <div className="icon_section">
          <img className="icon_DM" src="../img/icon_DM.svg" />
          <div className="quote">
              <h1>Cakes Cakes Cakes</h1>
          </div>
      </div>
      <div className="contariner_form">
          <div className="form_logo">
              <img class="logo" src="../img/logo_complet.svg"/>
          </div>
          <form onSubmit={handleFormSubmit}>
              <label  label="Email address *"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })} />
              <br>
              <input type="password"
                label="Password *"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(value) => setFormData({ ...formData, password: value })} />
              </br>            
              <input type="submit" value="Submit"/>
              <input type="submit" formtarget="_blank" value="Submit to a new window/tab"/>
          </form>
          <div>
              <p to="/signup">Si no estás registrado da click aquí</p>
          </div>
      </div>
  </div>
</>
  );
}

export default LoginPage;