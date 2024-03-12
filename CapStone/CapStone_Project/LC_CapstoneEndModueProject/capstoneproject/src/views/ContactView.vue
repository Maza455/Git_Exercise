<template>
    <section id="contactMe">
        <p id="contact-head">Contact Me</p>
        <p id="contact-message">Do you have any questions? Please do not hesitate to contact me directly. I'll come back
            to you within a matter of hours to help you.</p>

        <div class="container">
            <div id="form-footer" class="row">
                <div style="width: 67%!important;" class="col-md-8">
                    <div class="center-div">
                        <div class="contact-table">
                            <form action="https://formspree.io/f/xnqklpew" method="POST" id="my-form">
                                <div class="input-container">
                                    <label class="contact-inputs" for="validationCustom01">Your Name:</label>
                                    <input type="text" class="form-control contact-inputs-tags" required
                                        id="validationCustom01" placeholder="Enter your name" name="name"
                                        onchange="validateFormInput()">
                                    <p class="invalid-feedback">Invalid name entered. Digits and symbols are not
                                        allowed.</p>
                                </div>
                                <div class="input-container">
                                    <label class="contact-inputs" for="validationCustom02">Your Email:</label>
                                    <input type="email" class="form-control contact-input-tags" required
                                        id="validationCustom02" placeholder="Enter your email address" name="email"
                                        onchange="validateFormInput()">
                                    <p class="invalid-feedback">Invalid email entered.</p>
                                </div>
                                <div class="input-container">
                                    <label class="contact-inputs" for="validationCustom03">Message :</label>
                                    <textarea type="text" class="form-control contact-input-tags" required
                                        id="validationCustom03" placeholder="Enter your message here . . ." rows="4"
                                        name="message"></textarea>
                                </div>
                                <div>
                                    <button id="submit-btn" class="btn btn-md btn-outline-primary"
                                        type="submit">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 20px;" id="status"></div>
            </div>
        </div>
        <div style="width: 33%!important;" id="social-section" class="col-md-4">
            <div class="box-sz" style="padding:0px 20px;padding-bottom: 15px;border-bottom:3.5px solid grey">
                <a href="mailto:maza2pac77@gmail.com" style="text-decoration: none;">
                    <p class="footer-details"><i class="fa fa-envelope mr-5"
                            aria-hidden="true"></i><span>maza2pac77@gmail.com</span></p>
                </a>
                <p class="footer-details"><i class="fa fa-phone mr-5" aria-hidden="true"></i><span>+27 72348 4826</span>
                </p>
                <p class="footer-details"><i class="fa fa-fax mr-5" aria-hidden="true"></i><span>+27 6999 50266</span>
                </p>
            </div>
            <div id="social-media-icons">
                <a href="https://www.facebook.com"><i class="fa fa-facebook-square social-media"
                        aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin-square social-media"
                        aria-hidden="true"></i></a>
                <a href="https://www.twitter.com"><i class="fa fa-twitter social-media" aria-hidden="true"></i></a>
                <a href="https://github.com/Maza455"><i class="fa fa-github social-media" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com"><i class="fa fa-instagram social-media" aria-hidden="true"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactMe'
}
</script>

<style scoped>

/* contact styling */

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@media screen and (max-width: 500px) {
    .nav-link {
        font-size: 13px !important;
    }

    .dropdown-item {
        font-size: 13px !important;
    }

    .line-in {
        font-size: 13px !important;
    }

    .btn {
        font-size: 13px !important;
    }

    #contact-head {
        font-size: 25px !important;
    }

    #contact-message {
        font-size: 14px !important;
        margin: 0px 20px !important;
    }

    .contact-inputs {
        font-size: 10px !important;
    }

    .contact-table {
        min-width: 200px !important;
        padding: 6px 12px !important;
        padding-bottom: 20px !important;
    }

    .form-control {
        font-size: 10px !important;
    }

    #submit-btn {
        font-size: 10px !important;
    }

    .input-container {
        margin: 10px 6px !important;
    }

    .footer-details {
        font-size: 10px !important;
        margin-bottom: 0.7rem !important;
    }

    #contactus {
        padding: 10px 20px !important;
        padding-bottom: 25px !important;
    }

    #social-media-icons {
        padding: 0px 15px !important;
        margin-top: 6px !important;
    }

    .box-sz {
        padding: 0px 6px !important;
        border-bottom: 1.5px solid grey !important;
    }

    .social-media {
        font-size: 14px !important;
    }

    .mr-5 {
        margin-right: 0.5rem !important;
    }

    .md-sz {
        font-size: 13px !important;
        margin: 0 !important;
    }

    .text-white {
        font-size: 13px !important;
    }

    footer h5::before {
        padding-right: 2.5px !important;
    }

    .mb-4 {
        margin-bottom: 0.5rem !important;
    }

    #btnScrollToTop {
        width: 30px !important;
        height: 30px !important;
    }

    .material-icons {
        font-size: 19px !important;
    }
}

@media screen and (max-width: 400px) {
    .nav-link {
        font-size: 11px !important;
    }

    .dropdown-item {
        font-size: 11px !important;
    }

    .line-in {
        font-size: 11px !important;
    }

    .btn {
        font-size: 11px !important;
    }

    #contact-head {
        font-size: 21px !important;
    }

    #contact-message {
        font-size: 12px !important;
        margin: 0px 16px !important;
    }

    .contact-inputs {
        font-size: 8px !important;
    }

    .contact-table {
        min-width: 150px !important;
        padding: 4px 9px !important;
        padding-bottom: 15px !important;
    }

    .form-control {
        font-size: 8px !important;
    }

    #submit-btn {
        font-size: 8px !important;
    }

    .input-container {
        margin: 7px 5px !important;
    }

    .footer-details {
        font-size: 8px !important;
        margin-bottom: 0.55rem !important;
    }

    #contactus {
        padding: 7px 14px !important;
        padding-bottom: 19px !important;
    }

    #social-media-icons {
        padding: 0px 12.5px !important;
        margin-top: 4px !important;
    }

    .box-sz {
        padding: 0px 4.5px !important;
        border-bottom: 1.1px solid grey !important;
    }

    .social-media {
        font-size: 11px !important;
    }

    .mr-5 {
        margin-right: 0.35rem !important;
    }

    .md-sz {
        font-size: 11px !important;
        margin: 0 !important;
    }

    .text-white {
        font-size: 11px !important;
    }

    footer h5::before {
        padding-right: 2.5px !important;
    }

    .mb-4 {
        margin-bottom: 0.5rem !important;
    }

    #btnScrollToTop {
        width: 25px !important;
        height: 25px !important;
    }

    .material-icons {
        font-size: 15px !important;
    }
}

#contactus {
    background-color: var(--primary-contact-background);
    padding: 25px 50px;
    padding-bottom: 55px;
}

#contact-head {
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-title);
    font-weight: 650;
    font-size: 35px;
    border-bottom: 1.5px solid var(--primary-title);
    padding-bottom: 4px;
}

#contact-message {
    color: var(--primary-title);
    margin-top: 15px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    margin: 0px 80px;
}

#form-footer {
    margin-top: 30px;
}

.center-div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-table {
    padding: 10px 25px;
    padding-bottom: 30px;
    min-width: 450px;
    max-width: 500px;
    background-color: var(--primary-background);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.input-container {
    margin: 30px 10px;
}

.contact-inputs {
    margin-left: 5px;
    margin-bottom: 12px;
    font-size: 14px;
    color: var(--primary-title);
}

.btn-md {
    font-weight: 600;
    background-color: rgb(67, 67, 163);
    color: var(--primary-background);
    width: 100%;
}

#social-section {
    padding: 70px 0px;
}

.footer-details {
    font-size: 22px;
    font-weight: 500;
}

.footer-details i {
    color: rgb(67, 67, 163);
}

.footer-details span {
    color: black;
}

#social-media-icons {
    margin-top: 20px;
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    font-size: 28px;
}

.social-media {
    color: var(--primary-title);
    transition: color 0.15s ease-in;
}

.social-media:hover {
    color: rgb(67, 67, 163);
}

.contact-input-tags {
    border: 1.5px solid var(--primary-input-border) !important;
    background-color: var(--primary-input-background) !important;
}

.contact-input-tags:focus {
    border: 1.5px solid var(--primary-input-border) !important;
    background-color: var(--primary-input-background) !important;
    outline: none !important;
}

.contact {
    text-align: center;
}

.contact h3 {
    color: rgb(67, 67, 163);
}

.contact a {
    border: 2px solid #000066;
    text-decoration: none;
    padding: 7px;
    margin-left: 30px;
    background-color: #000066;
    color: white;
    transition: all 0.5s;
}

.contact a:hover {
    background: none;
    color: #000066;
}

@media (max-width: 991px) {
    .container1 {
        width: 500px;
        padding: 32px;
    }
}

@media (max-width: 674px) {
    .container1 {
        width: 350px;
    }
}

@media (max-width: 524px) {
    .container1 {
        width: 250px;
        margin-left: 60px;
    }
}

@media (max-width: 442px) {
    .container1 {
        width: 200px;
        margin-left: 40px;
    }
}

@media (max-width: 360px) {
    .container1 {
        width: 180px;
        margin-left: 20px;
    }
}

.container-fluid {
    padding: 0em 1.7em;
}

.navbar {
    padding: 0em;
}

.navbar a:hover {
    color: white !important;
}

.navbar-logo {
    width: 70px;
    height: 52px;
    object-fit: fill;
}

</style>