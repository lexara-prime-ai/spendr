// HEADER COMPONENT
class Header {
    static render() {
        const headerContent = `
            <header>
                <img src="./src/assets/images/logos/logo_color.png" class="logo" alt="logo">

                <nav class="navigation">
                    <ul class = "nav-links">
                        <li class=link-item>
                            <a href="#" class="link is-active">
                                Dashboard
                            </a>
                        </li>
                        <li class=link-item>
                            <a href="#" class="link">
                                Budgets
                            </a>
                        </li>
                        <li class=link-item>
                            <a href="#" class="link">
                                Spending
                            </a>
                        </li>
                        <li class=link-item>
                            <a href="#" class="link critical">
                                Bills
                            </a>
                        </li>

                        <a href="#">
                            <i class="fas fa-user-plus user-icon"></i>
                        </a>
                    </ul>

                    
                </nav>
            </header>
        `;

        const header = document.createElement('header');
        header.innerHTML = headerContent;

        document.body.appendChild(header);
    }
}

export default Header.render();

