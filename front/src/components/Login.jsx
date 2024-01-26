import { QueryClientProvider, QueryClient, useQuery } from "react-query"
import { useForm } from "react-hook-form";


export function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    //console.log(email, password)
    const response = await fetch(`http://localhost:3000/users/login/${email}/${password}`);
    const datos = await response.json();
    //console.log(datos);
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Iniciar sesión </span>
                <span>Regístrate</span>
              </h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="form-group">
                            <input type="email" name="email" className="form-style" placeholder="Email" id="logemail" autoComplete="none" {...register("email")} />
                            <i className="input-icon fa fa-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" name="password" className="form-style" placeholder="Password" id="logpass" autoComplete="none" {...register("password")} />
                            <i className="input-icon fa fa-lock"></i>
                          </div>
                          <button type="submit" className="btn mt-4">
                            Log In
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" /*style="border-radius: 1rem;------">
        <div className="card-body p-5 text-center">

        <div className="mb-md-5 mt-md-4 pb-5">

          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
          <p className="text-white-50 mb-5">Porfavor introduzca su email y contraseña!</p>

          <div className="form-outline form-white mb-4">
            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="typeEmailX">Email</label>
          </div>

          <div className="form-outline form-white mb-4">
            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
          </div>

          <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste la contraseña?</a></p>

          <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

          <div className="d-flex justify-content-center text-center mt-4 pt-1">
            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
          </div>

        </div>

        <div>
          <p className="mb-0">No tienes cuenta? <a href="#!" className="text-white-50 fw-bold">Registrate</a>
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
</div>
</section>

*/