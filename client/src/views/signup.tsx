import React from 'react';

export const SignUpForm = () => {
	return (

		<main>
			<div className="container">
				<section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

								<div className="card mb-3">
									<div className="card-body">
										<div className="pt-4 pb-2">
											<h5 className="card-title text-center pb-0 fs-4">Sign Up</h5>
											<p className="text-center small">Enter your email & password to register</p>
										</div>

										<form className="row g-3 needs-validation" action="/signup" method="POST">
											<div className="col-12">
												<label htmlFor="yourEmail" className="form-label">
													Email
												</label>
												<div className="input-group has-validation">
													<span className="input-group-text" id="inputGroupPrepend">
														@
													</span>
													<input type="email" name="email" className="form-control" id="yourEmail" required />
													<div className="invalid-feedback">Please enter your username.</div>
												</div>
											</div>

											<div className="col-12">
												<label htmlFor="yourPassword" className="form-label">
													Password
												</label>
												<input type="password" name="password" className="form-control" id="yourPassword" required />
												<div className="invalid-feedback">Please enter your password!</div>
											</div>

											<div className="col-12">
												<label htmlFor="yourRepeatedPassword" className="form-label">
													Repeat Password
												</label>
												<input type="password" name="repeatedPassword" className="form-control" id="yourRepeatedPassword" required />
												<div className="invalid-feedback">Please re-enter your password!</div>
											</div>

											<div className="container-login100-form-btn">
												<div className="wrap-login100-form-btn">
													<div className="login100-form-bgbtn"></div>
													<button type="submit" className="login100-form-btn">
														Register
													</button>
												</div>
											</div>

											<div className="or-container">
												<div className="line-separator"></div>
												<div className="or-label">or</div>
												<div className="line-separator"></div>
											</div>

											<div className="col-12 text-center">
												<a className="w-100 btn btn-lg btn-google btn-block btn-outline rounded-pill" href="/">
													<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" />
													Signup using Google
												</a>
											</div>

											<p className="text-inverse text-center">
												Already have an account?{" "}
												<a href="/login" data-abc="true" style={{ color: "#4154f1" }}>
													Login
												</a>
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};
