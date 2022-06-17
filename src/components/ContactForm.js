import React from 'react';
import {Formik, Field, Form} from 'formik';
import {Link} from "react-router-dom";


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ContactForm = () => (
        <div className="contact-container">
            <div className="text-container">
                <h5 className="title-contact1">Get in touch</h5>
                <p className="text-contact1"> If you wanna get in touch, talk to me about a project collaboration or just
                    say
                    hi,
                    <br/>
                    fill up the awesome form below or send an email to
                    <Link className="link-success" to="/"> maria.langiewicz@interia.pl </Link>
                    and ~let's talk.
                </p>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({isSubmitting}) => (
                    <Form className="form-contact">
                        <div className="tittle-description container1">
                            <label className="title-form title1">First Name</label>
                            <Field className="firstName" name="firstName" placeholder="Mary"/>
                        </div>

                        <div className="tittle-description container2">
                            <label className="title-form title2">Last Name</label>
                            <Field className="lastName" name="lastName" placeholder="Langiewicz"/>
                        </div>
                        <div className="tittle-description container3">
                            <label className="title-form title__email">Your Email</label>
                            <Field className="email"
                                   id="email"
                                   name="email"
                                   placeholder="mary@acme.com"
                                   type="email"
                            />
                        </div>
                        <button className="tittle-description button__form" type="submit">Submit you message</button>
                    </Form>
                )}
            </Formik>

            <p className="title-contact2">Let's get social</p>
            <p className="text-contact2">Follow my online fan page on Facebook and profiles on Twitter, GitHub and
                Linkedin.</p>

            <div className="social-media">
                <button className="facebook__icon" type="submit">
                    <svg className="i-svg" height="50" version="1.1" width="50"
                         xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid meet"
                         viewBox="0 0 50 50"
                         space="preserve"
                         data-icon="facebook,">
                        <path
                            d="M27.845,47.469V27.81h8.426l1.404-8.425h-9.83v-4.213c0-2.81,1.406-4.213,
                        4.213-4.213h4.213V2.531 c-1.405,0-4.55,0-7.021,0c-7.021,0-9.83,4.213-9.83,
                        11.234v5.618h-8.425v8.424h8.425v19.661H27.845L27.845,47.469z"
                            fill="#ffffff">
                        </path>
                    </svg>
                    Facebook
                </button>

                <button className="github__icon" type="submit">
                    <svg className="i-svg"
                         height="50"
                         version="1.1" width="50"
                         xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid meet"
                         viewBox="0 0 50 50"
                         space="preserve"
                         data-icon="facebook,">
                        <path
                            d="M24.999,2.48c-12.75,0-23.087,10.338-23.087,23.09c0,10.199,6.613,18.854,15.791,
                        21.907 c1.154,0.211,1.518-0.474,1.518-1.084c0-0.547,0.011-2.082,0-4.01c-6.422,
                        1.398-7.753-3.038-7.753-3.038 c-1.048-2.671-2.562-3.377-2.562-3.377c-2.095-1.433,0.158-1.407,
                        0.158-1.407c2.317,0.163,3.538,2.383,3.538,2.383 c2.059,3.522,5.403,2.505,6.717,1.916c0.21-1.491,
                        0.808-2.51,1.468-3.087C15.66,35.188,10.27,33.211,10.27,24.361 c0-2.521,0.9-4.581,
                        2.376-6.194c-0.239-0.584-1.031-2.932,0.226-6.112c0,0,1.939-0.62,6.349,2.369 c1.841-0.513,
                        3.817-0.768,5.78-0.777c1.962,0.009,3.938,0.264,5.781,0.777c4.409-2.988,6.346-2.369,
                        6.346-2.369 c1.258,3.18,0.466,5.528,0.229,6.112c1.478,1.613,2.373,3.673,2.373,6.194c0,
                        8.872-5.397,10.823-10.543,11.392 c0.828,0.717,1.582,2.101,1.582,4.255c0,2.887,0,5.632,0,6.392c0,
                        0.617,0.372,1.302,1.544,1.076 c9.167-3.059,15.776-11.708,15.776-21.905C48.089,12.818,37.75,2.48,
                        24.999,2.48z"
                            fill="#ffffff">
                        </path>
                    </svg>
                    GitHub
                </button>

                <button className="linkedIn__icon" type="submit">
                    <svg className="i-svg"
                         height="50"
                         version="1.1"
                         width="50"
                         xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid meet"
                         viewBox="0 0 50 50"
                         space="preserve"
                         data-icon="facebook,">
                        <path
                            d="M13.83,41.668H5.401V13.571h8.429V41.668z M44.737,
                        41.668h-8.429V26.66c0-3.912-1.394-5.857-4.154-5.857 c-2.189,0-3.577,
                        1.086-4.274,3.273c0,3.545,0,17.592,0,17.592h-8.431c0,0,0.115-25.288,0-28.097h6.656l0.514,
                        5.619h0.175 c1.729-2.81,4.489-4.713,8.275-4.713c2.881,0,5.207,0.801,6.985,2.815c1.794,2.014,
                        2.684,4.713,2.684,8.514V41.668z M9.615,2.333 c2.404,0,4.357,1.888,4.357,4.214c0,2.33-1.953,
                        4.214-4.357,4.214c-2.403,0-4.351-1.885-4.351-4.214 C5.264,4.22,7.212,2.333,9.615,2.333z"
                            fill="#ffffff">
                        </path>
                    </svg>
                    LinkedIn
                </button>
                <button className="twitter__icon" type="submit">
                    <svg className="i-svg"
                         height="50"
                         version="1.1"
                         width="50"
                         xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid meet"
                         viewBox="0 0 50 50"
                         space="preserve"
                         data-icon="facebook,">
                        <path
                            d="M49.33,11.051c-1.754,0.778-3.638,1.305-5.617,1.538c2.019-1.209,3.569-3.124,4.3-5.407 c-1.89,
                        1.119-3.98,1.935-6.209,2.372c-1.783-1.899-4.325-3.086-7.14-3.086c-5.4,0-9.775,4.376-9.775,
                        9.776 c0,0.767,0.085,1.514,0.251,2.229c-8.126-0.407-15.331-4.3-20.154-10.215c-0.84,1.444-1.323,
                        3.123-1.323,4.916 c0,3.394,1.727,6.385,4.348,8.14c-1.601-0.052-3.109-0.49-4.427-1.222c-0.001,
                        0.04-0.001,0.083-0.001,0.122 c0,4.738,3.369,8.69,7.843,9.589c-0.819,0.223-1.683,0.342-2.576,
                        0.342c-0.631,0-1.242-0.061-1.838-0.174 c1.243,3.883,4.855,6.709,9.132,6.791c-3.343,2.621-7.56,
                        4.186-12.141,4.186c-0.79,0-1.568-0.045-2.333-0.137 c4.326,2.771,9.466,4.391,14.989,4.391c17.982,
                        0,27.818-14.898,27.818-27.819c0-0.423-0.012-0.847-0.028-1.268 C46.36,14.735,48.016,13.014,49.33,
                        11.051z"
                            fill="#ffffff">
                        </path>
                    </svg>
                    Twitter
                </button>
            </div>
        </div>
    )
;

export default ContactForm;