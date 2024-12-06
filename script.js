const subscriberCount = document.getElementById('subscriber-count');

// Replace these with your API key and Channel ID
const API_KEY = 'AIzaSyDjm_sHdtzX1UcdwQERWeSJ5MwZiCh3GBU';
const CHANNEL_ID = 'UCvZDYPVGA-ATIGRwvmQ35sw';

async function fetchSubscribers() {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await response.json();
        const count = data.items[0].statistics.subscriberCount;
        subscriberCount.textContent = count.toLocaleString(); // Format number with commas
    } catch (error) {
        subscriberCount.textContent = 'Error fetching data!';
        console.error('Error:', error);
    }
}

// Update every 10 seconds
setInterval(fetchSubscribers, 10000);
fetchSubscribers();

// Open Subscribe link
function openSubscribeLink() {
    window.open('https://www.youtube.com/channel/' + CHANNEL_ID, '_blank');
}
