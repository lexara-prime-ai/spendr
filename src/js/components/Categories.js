// DEBUGGING
const log = console.log;

class Categories {
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

export default Categories;