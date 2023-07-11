// DEBUGGING
const log = console.log;
// IMPORTS
import { Injector } from './helpers/Injector.js';
import { AppStyles } from './Style.js';
import header from './components/Header.js';
import { Categories } from './components/Categories.js';

class AppRoot extends HTMLElement {
    // METHOD FOR RENDERING HTML
    static render() {

        let appContent = `
        <section id="app-container">
            <div class="balance-card">
                <div class="balance-card-title">
                    <h2>
                    <span>
                        Available
                    </span>
                    <br>
                    Balance
                    </h2>
    
                    <a href="#">
                        <i class="fas fa-coins balance-icon"></i>
                    </a>
                </div>
                    <!-- CARD CONTENT -->
                <div class="balance-card-content">
                    <div class="account-info">
                        <h2 id="account-balance">
                        <span class="currency">
                            KES
                        </span>
                            300k
                        </h2>
                    </div>
                </div>
            </div>

            <!-- SPENDING CARD -->
            <div class="spending">
                <div class="spending-card">
                    <div class="spending-card-title">
                        <a href="#">
                            <i class="fas fa-money-check-dollar spending-icon"></i>
                        </a>
                        <h2>
                            Spending
                        </h2>
                    </div>

                    <div class="amount-spent">
                        <h1 id="amount">
                            <span class="currency-spent">
                                KES
                            </span>
                                25,073
                            <span class="rate">
                                /mo
                            </span>
                        </h1>                                              
                    </div>

                    <div class="date">
                        <p>
                            Apr 2023
                        </p>

                        <a href="#">
                            <i class="fas fa-ellipsis ellipsis"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- BUDGET CARD -->
            <div class="budget">
                <div class="budget-card">
                    <div class="budget-card-title">
                        <a href="#">
                            <i class="fas fa-piggy-bank budget-icon"></i>
                        </a>
                        <h2>
                            Budget
                        </h2>
                    </div>

                    <div class="amount-to-spend">
                        <h1 id="amount">
                            <span class="currency-spent">
                                KES
                            </span>
                                1,000
                            <span class="rate">
                                /day
                            </span>
                        </h1>                                              
                    </div>

                    <div class="date">
                        <p>
                            Tue 25/04/23
                        </p>

                        <a href="#">
                            <i class="fas fa-ellipsis ellipsis"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        `;

        document.body.innerHTML += appContent;

    }

    // METHOD FOR REGISTERING CUSTOM ELEMENT
    static define() {
        customElements.define('app-root', AppRoot);
    }

    // METHOD FOR MOUNTING COMPONENTS
    static mount() {
        Categories.render();
    }
}

Injector.add('AppStyles', AppStyles.importStyleSheets());
Injector.add('Categories', Categories);

// INITIALIZE APP
AppRoot.render();
// MOUNT COMPONENTS
AppRoot.mount();
AppRoot.define();
