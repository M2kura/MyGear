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

    function card(product) {
        const href = product.amazon || product.link;
        const item = el(href ? "a" : "article", "item");
        if (href) {
            item.href = href;
            item.target = "_blank";
            item.rel = product.amazon ? "sponsored noopener" : "noopener";
        }

        const media = el("div", "item-media");
        if (product.image) {
            const img = el("img");
            img.src = product.image;
            img.alt = product.name;
            img.loading = "lazy";
            media.appendChild(img);
        }
        item.appendChild(media);

        const body = el("div", "item-body");
        body.appendChild(el("h3", "item-name", product.name));
        if (href) {
            body.appendChild(el("span", "item-cta", product.amazon ? "Amazon ↗" : "Website ↗"));
        }
        item.appendChild(body);

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
            const head = el("div", "category-head");
            head.appendChild(el("h2", "category-title", cat));
            head.appendChild(el("span", "category-rule"));
            head.appendChild(el("span", "category-count", String(items.length).padStart(2, "0")));
            section.appendChild(head);

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
