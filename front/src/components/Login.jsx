export function Login() {

    return  <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 class="mb-0 pb-3"><span>Iniciar sesión </span><span>Regístrate</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Log In</h4>
                                                    <div class="form-group">
                                                        <input type="email" name="logemail" class="form-style" placeholder="Email" id="logemail" autocomplete="none" />
                                                        <i class="input-icon fa fa-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2"> <input type="password" name="logpass" class="form-style" placeholder="Contraseña" id="logpass" autocomplete="none" />
                                                        <i class="input-icon fa fa-lock"></i>
                                                    </div>
                                                    <a href="#" class="mt-4">Iniciar sesión</a>	
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Sign Up</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="logname" class="form-style" placeholder="Nombre completo" id="logname" autocomplete="none" />
                                                        <i class="input-icon fa fa-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="logemail" class="form-style" placeholder="Email" id="logemail" autocomplete="none" />
                                                        <i class="input-icon fa fa-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="password" name="logpass" class="form-style" placeholder="Contraseña" id="logpass" autocomplete="none" />
                                                        <i class="input-icon fa fa-lock"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-4">Registrarme</a>
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