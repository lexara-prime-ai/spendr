// DEBUGGING
const log = console.log;

export class Categories {
    static render() {
        let categoryContent = `
            <section id="category-container">
                <div class="wrapper-text">
                    <h2>
                        Categories
                    </h2>
                </div>
            </section>
        `;

        const categoryComponent = document.createElement('section');
        categoryComponent.innerHTML = categoryContent
        document.body.appendChild(categoryComponent);
    }
}
