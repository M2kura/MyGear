(function () {
    // Guess the visitor's Amazon store from timezone and language.
    function preferredStore() {
        let tz = "";
        try {
            tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        } catch (e) {}
        const lang = (navigator.language || "").toLowerCase();
        if (tz.startsWith("Europe/") || lang.startsWith("de")) {
            return "de";
        }
        return "us";
    }

    const STORES = {
        us: "amazon.com",
        de: "amazon.de"
    };

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

    function card(product, store) {
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
        const amazon = product.amazon || {};
        const order = store === "de" ? ["de", "us"] : ["us", "de"];
        order.forEach(function (key, i) {
            if (amazon[key]) {
                links.appendChild(linkButton(amazon[key], STORES[key], i === 0 || !amazon[order[0]]));
            }
        });
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
        const store = preferredStore();
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
                grid.appendChild(card(p, store));
            });
            section.appendChild(grid);
            root.appendChild(section);
        });

        document.getElementById("year").textContent = new Date().getFullYear();
    }

    render();
})();
