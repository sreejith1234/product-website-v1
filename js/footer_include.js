class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="footer-main">
            <div class="footer">
                <div class="container-fluid">
                    <div class=" row">
                        <div class="col-md-6 col-sm-6 col-6 mb-6">
                            <div class="footer-logo">
                                <div class="footer-logo-img">
                                    <img src="logo.png">
                                </div>
                                <div class="footer-logo-text">
                                    <h6>Advanced Health Information Management <br> and Social Analytics (AHIMSA)</h6>
                                </div>
                            </div>
                            <div class="footer-contact">
                                <p class="mt-3 mb-1 opacity-8">Jade 4, Roelofarendsveen, 2371 LB, Netherlands</p>
                                <p class="mt-2 mb-3 opacity-8">+31.643876161, info@ahimsa.global</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-6 mb-6">
                            <div class="footer-head">
                                <h6 class="text-sm">Our Products</h6>
                                <ul class="flex-column ms-n3 nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Tele Health
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            PREP
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Structural Heart Disease - Asia Pacific
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Datavaultforhealth
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-6 mb-6">
                            <div class="footer-head">
                                <h6 class="text-sm">Quick Links</h6>
                                <ul class="flex-column ms-n3 nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Services
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="" target="_blank">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" style="background:#060814;padding:20px;">
                <div class="copyright-inner">
                    <p class="text-sm mb-0 copyright">
                        Copyright © 2022 Ahimsa
                    </p>
                    <ul class="social-icon d-flex flex-row ms-n3 nav">
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-facebook text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-linkedin text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-twitter text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pe-1" href="" target="_blank">
                                <i class="fa fa-youtube text-lg opacity-8" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `;
  }
}
    
customElements.define('footer-component', MyComponent);