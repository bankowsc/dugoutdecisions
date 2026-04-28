// THE ONLY GLOBAL NEEDED

async function submitToFaction() {
    const name = prompt("Enter your name:");
    if (!name) return;

    const data = {
        name: name,
        prestige: TOTAL_PRESTIGE,        // you already track this
        championships: TOTAL_CHAMPS,     // you already track this
        mode: GAME_MODE                  // "Fantasy" or "Realistic"
    };

    try {
        const res = await fetch("https://your-backend-url.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        alert("Submitted successfully!");
    } catch (err) {
        console.error(err);
        alert("Failed to submit.");
    }
}
