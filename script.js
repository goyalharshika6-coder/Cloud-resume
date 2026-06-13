async function updateCounter() {
    try {
        const response = await fetch(
            "https://bl3avdkbh9.execute-api.us-east-1.amazonaws.com/count"
        );

        const data = await response.json();

        document.getElementById("visitor-count").innerText = data.count;

    } catch (error) {
        console.error("Error:", error);
    }
}

updateCounter();