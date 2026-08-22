function judge() {

    const input = document
        .getElementById("sin")
        .value
        .toLowerCase()
        .trim();

    const verdict = document.getElementById("verdict");

    if (!input) {
        alert("Enter a wrongdoing first.");
        return;
    }

    // Find every database entry whose keywords appear
    // in the user's description.
    const matches = GARUDA_VERDICTS.filter(entry =>
        entry.keywords.some(keyword =>
            input.includes(keyword.toLowerCase())
        )
    );

    if (matches.length === 0) {

        document.getElementById("sinResult").textContent =
            "No matching sin identified";

        document.getElementById("narakaResult").textContent =
            "NOT DETERMINED";

        document.getElementById("punishmentResult").textContent =
            "The described wrongdoing is not yet matched to an entry in our Garuda Purana database.";

        document.getElementById("sourceResult").textContent =
            "No matching entry found.";

    } else {

        // Remove duplicate categories
        const unique = [];

        matches.forEach(match => {
            if (!unique.some(x => x.id === match.id)) {
                unique.push(match);
            }
        });

        // SIN
        document.getElementById("sinResult").innerHTML =
            unique.map(match =>
                "• " + escapeHTML(match.sin)
            ).join("<br>");

        // NARAKA
        document.getElementById("narakaResult").innerHTML =
            unique.map(match =>
                "🔥 " + escapeHTML(match.naraka)
            ).join("<br>");

        // PUNISHMENT
        document.getElementById("punishmentResult").innerHTML =
            unique.map(match =>
                "<strong>" +
                escapeHTML(match.naraka) +
                "</strong><br>" +
                escapeHTML(match.punishment)
            ).join("<br><br>");

        // SOURCE
        document.getElementById("sourceResult").innerHTML =
            unique.map(match =>
                escapeHTML(match.source)
            ).join("<br><br>");
    }

    verdict.classList.add("show");

    verdict.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// Prevent user-entered text from being interpreted as HTML.
function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
