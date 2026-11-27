(function () {
    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) {
            node.className = className;
        }
        if (text) {
            node.textContent = text;
        }
        return node;
    }

    function linkButton(href, label, primary) {
        const a = el("a", primary ? "btn btn-primary" : "btn", label);
        a.href = href;
        a.target = "_blank";
        a.rel = "sponsored noopener";
        return a;
    }

    function card(product) {
        const item = el("article", "item");

        const media = el("div", "item-media");
        if (product.image) {
            const img = el("img");
            img.src = product.image;
            img.alt = product.name;
            img.loading = "lazy";
            media.appendChild(img);
        } else {
            media.classList.add("item-media-empty");
        }
        item.appendChild(media);

        item.appendChild(el("h3", "item-name", product.name));

        const links = el("div", "item-links");
        if (product.amazon) {
            links.appendChild(linkButton(product.amazon, "Amazon", true));
        }
        if (product.link) {
            const a = linkButton(product.link, "Website", !links.children.length);
            a.rel = "noopener";
            links.appendChild(a);
        }
        if (links.children.length) {
            item.appendChild(links);
        }

        return item;
    }

    function render() {
        const root = document.getElementById("gear");
        const groups = new Map();

        PRODUCTS.forEach(function (p) {
            const cat = p.category || "Other";
            if (!groups.has(cat)) {
                groups.set(cat, []);
            }
            groups.get(cat).push(p);
        });

        groups.forEach(function (items, cat) {
            const section = el("section", "category");
            section.appendChild(el("h2", "category-title", cat));
            const grid = el("div", "grid");
            items.forEach(function (p) {
                grid.appendChild(card(p));
            });
            section.appendChild(grid);
            root.appendChild(section);
        });

        document.getElementById("year").textContent = new Date().getFullYear();
    }

    render();
})();
