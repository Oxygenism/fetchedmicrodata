const samplePropData = [
    {
        "type": "itemScope",
        "schema": "https://schema.org/Product",
        "items": [
            {
                "type": "itemProp",
                "prop": "name",
                "content": "test-name"
            },
            {
                "type": "itemProp",
                "prop": "sku",
                "content": "test-sku"
            },
            {
                "type": "itemProp",
                "prop": "brand",
                "content": "test-brand"
            },
            {
                "type": "itemProp",
                "prop": "image",
                "content": "test-image"
            },
            {
                "type": "itemScope",
                "schema": "https://schema.org/Offer",
                "prop": "offers",
                "items": [
                    {
                        "type": "itemProp",
                        "prop": "offercount",
                        "content": "3",
                    },
                    {
                        "type": "itemProp",
                        "prop": "lowPrice",
                        "content": "11.11"
                    },
                    {
                        "type": "itemProp",
                        "prop": "highPrice",
                        "content": "22.22"
                    }
                ]
            }
        ]
    }
];

function generate(container, properties) {
    for (const property of properties) {
        if (property.type === 'itemProp') {
            var meta = document.createElement("meta");
            meta.setAttribute('itemProp', property.prop);
            meta.setAttribute('content', property.content);
            container.appendChild(meta);
        } else if (property.type === 'itemScope') {
            var div = document.createElement("div");
            if (property.prop) {
                div.setAttribute('itemProp', property.prop);
            }

            div.setAttribute('itemScope', '');
            div.setAttribute('itemType', property.schema);

            generate(div, property.items);

            container.appendChild(div);
        }
    }
}

let propContainer = document.getElementById("container");
generate(propContainer, samplePropData);
