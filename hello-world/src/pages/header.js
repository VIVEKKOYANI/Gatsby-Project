import React from "react"
import Layout from '../components/layout'
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export default () => (
        <header>
        <div class="header_top">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="toolbar">
                            <ul class="header_menu">
                                <li>
                                    <a href="#">
                                        <i class="ion-flash active"></i>
                                        English
                                        <i class="ion-chevron-down icon_down"></i>
                                    </a>
                                    <ul class="lang_menu">
                                        <li>French</li>
                                        <li>German</li>
                                        <li>Chinese</li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="tel:+001(1234)6457">
                                        <i class="ion-android-call active"></i>
                                        +001 (1234) 6457
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:youremail@gmail.com">
                                        <i class="ion-email"></i>
                                        youremail@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="log_in">
                            <div class="log_in_info">
                                <a href="login.html">
                                    <i class="ion-unlocked"></i>
                                    Log In
                                </a>
                                <span>OR</span>
                                <a href="register.html">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)