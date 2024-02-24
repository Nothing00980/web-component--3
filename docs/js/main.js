function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function glow(event) {
    const button = event.target;
    const boundingRect = button.getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    const mouseY = event.clientY - boundingRect.top;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const percentX = mouseX / buttonWidth;
    const percentY = mouseY / buttonHeight;
    const intensityX = percentX * 100;
    const intensityY = percentY * 100;

    const topIntensity = 100 - intensityY;
    const bottomIntensity = intensityY;
    const leftIntensity = 100 - intensityX;
    const rightIntensity = intensityX;

    const borderColorTop = `hsl(${90 - topIntensity}, 100%, ${topIntensity}%)`;
    const borderColorBottom = `hsl(${getRandomNumber(0,360)}, 100%, ${bottomIntensity}%)`;
    const borderColorLeft = `hsl(${270 - leftIntensity}, 100%, ${leftIntensity}%)`;
    const borderColorRight = `hsl(${getRandomNumber(0,360)}, 100%, ${rightIntensity}%)`;

    button.style.borderColor = `transparent`;
    button.style.borderTopColor = borderColorTop;
    button.style.borderBottomColor = borderColorBottom;
    button.style.borderLeftColor = borderColorLeft;
    button.style.borderRightColor = borderColorRight;

    button.style.color = `hsl(${getRandomNumber(0,360)}, 100%, 50%)`;
  }