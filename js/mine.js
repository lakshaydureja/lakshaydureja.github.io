async function fetchIp() {
    const greetingElement = document.getElementById('ip');
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const ip = data.ip;
      greetingElement.innerText = `${ip}`;
    } catch (error) {
      console.error('Error fetching IP:', error);
      greetingElement.innerText = `103.156.168.27`;
    }
  }

  fetchIp();

  function prepareText(element) {
    const text = element.textContent;
    element.textContent = '';
    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        if (char === ' ') span.classList.add('space');
        element.appendChild(span);
    }
}

function randomizeText(element) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    element.querySelectorAll('span:not(.space)').forEach(span => {
        span.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
    });
}

function restoreText(element) {
    const originalText = element.getAttribute('data-original');
    if (originalText) {
        element.querySelectorAll('span').forEach((span, index) => {
            span.textContent = originalText[index];
        });
    }
}

document.querySelectorAll('.randomize-text').forEach(element => {
    element.setAttribute('data-original', element.textContent);
    prepareText(element);

    let intervalId;

    element.addEventListener('mouseover', () => {
        intervalId = setInterval(() => randomizeText(element), 50); // Randomize every 50ms
    });

    element.addEventListener('mouseout', () => {
        clearInterval(intervalId);
        restoreText(element);
    });
});