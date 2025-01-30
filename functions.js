function displayCategory(categoryName) {
    const category = resources.filter(item => item.category === categoryName)[0];

    if(category) {
        const sourceLinks = category.sources.map(source => {
            return `<li><a href="${source.url}">${source.title}</a></li>`;
        }).join(`<br>`);

        const printCategory = `
        <article class="categories">
            <h2>${category.category}</h2>
            <p>${category.text}</p>
            ${sourceLinks}
        </article>`; 

        document.getElementById("kategori").innerHTML = printCategory;

        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('active');
        });
        
        const activeButton = document.getElementById(categoryName);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    displayCategory("HTML");


document.getElementById("HTML").addEventListener("click", function() {
    displayCategory("HTML");
});

document.getElementById("CSS").addEventListener("click", function() {
    displayCategory("CSS");
});

document.getElementById("JavaScript").addEventListener("click", function() {
    displayCategory("JavaScript");
});

document.getElementById("React").addEventListener("click", function() {
    displayCategory("React");
});

document.getElementById("SanityAndCMS").addEventListener("click", function() {
    displayCategory("Sanity and headless CMS");
});

});
    