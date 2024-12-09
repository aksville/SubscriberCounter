// YouTube API Integration
const API_KEY = "AIzaSyDjm_sHdtzX1UcdwQERWeSJ5MwZiCh3GBU";
const CHANNEL_ID = "UCvZDYPVGA-ATIGRwvmQ35sw";

// Fetch subscriber count
async function fetchSubscriberCount() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await response.json();
        const subCount = data.items[0].statistics.subscriberCount;
        document.getElementById("sub-count").innerText = subCount;
    } catch (error) {
        document.getElementById("sub-count").innerText = "Error fetching data!";
        console.error("Error fetching subscriber count:", error);
    }
}

// Load subscriber count on page load
fetchSubscriberCount();
