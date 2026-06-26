/*
  Luxury jewelry reflection demo.

  Replace the image in index.html and adjust the diamond hotspot below:
  diamondX / diamondY move the effect center.
  diamondWidth / diamondHeight resize the effect area.
*/

const diamondX = 50;
const diamondY = 48;
const diamondWidth = 34;
const diamondHeight = 34;

const frame = document.querySelector("#jewelryFrame");
const effects = document.querySelector(".diamond-effects");
const canvas = document.querySelector("#sparkleCanvas");
const ctx = canvas.getContext("2d", { alpha: true });
const motionButton = document.querySelector("#motionButton");

const state = {
  targetX: 0,
  targetY: 0,
  x: 0,
  y: 0,
  lastSparkle: 0,
  sparkles: [],
};

const sparklePalette = [
  "rgba(255, 255, 255, 1)",
  "rgba(195, 224, 255, 0.9)",
  "rgba(255, 231, 166, 0.86)",
  "rgba(225, 194, 255, 0.78)",
];

function setHotspotVariables() {
  document.documentElement.style.setProperty("--diamond-x", `${diamondX}%`);
  document.documentElement.style.setProperty("--diamond-y", `${diamondY}%`);
  document.documentElement.style.setProperty("--diamond-width", `${diamondWidth}%`);
  document.documentElement.style.setProperty("--diamond-height", `${diamondHeight}%`);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setTarget(x, y) {
  state.targetX = clamp(x, -1, 1);
  state.targetY = clamp(y, -1, 1);
}

function updateCssVariables() {
  state.x += (state.targetX - state.x) * 0.12;
  state.y += (state.targetY - state.y) * 0.12;

  const lightX = 50 + state.x * 28;
  const lightY = 50 + state.y * 24;
  const sweepAngle = 28 + state.x * 34 - state.y * 12;
  const fireAngle = 90 + state.x * 85 + state.y * 45;

  document.documentElement.style.setProperty("--tilt-x", state.x.toFixed(4));
  document.documentElement.style.setProperty("--tilt-y", state.y.toFixed(4));
  document.documentElement.style.setProperty("--light-x", `${lightX.toFixed(2)}%`);
  document.documentElement.style.setProperty("--light-y", `${lightY.toFixed(2)}%`);
  document.documentElement.style.setProperty("--sweep-angle", `${sweepAngle.toFixed(2)}deg`);
  document.documentElement.style.setProperty("--fire-angle", `${fireAngle.toFixed(2)}deg`);
}

function resizeCanvas() {
  const rect = effects.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.max(1, Math.round(rect.width * dpr));
  canvas.height = Math.max(1, Math.round(rect.height * dpr));
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function addSparkle(now) {
  const movement = Math.abs(state.x - state.targetX) + Math.abs(state.y - state.targetY);
  const interval = movement > 0.22 ? 140 : 340;

  if (now - state.lastSparkle < interval) {
    return;
  }

  state.lastSparkle = now;

  const lightBiasX = 0.5 + state.x * 0.18;
  const lightBiasY = 0.5 + state.y * 0.16;

  state.sparkles.push({
    x: clamp(lightBiasX + (Math.random() - 0.5) * 0.58, 0.12, 0.88),
    y: clamp(lightBiasY + (Math.random() - 0.5) * 0.58, 0.12, 0.88),
    size: 1.2 + Math.random() * 2.4,
    life: 0,
    ttl: 420 + Math.random() * 520,
    rotation: Math.random() * Math.PI,
    color: sparklePalette[Math.floor(Math.random() * sparklePalette.length)],
  });
}

function drawSparkles(delta) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  ctx.clearRect(0, 0, width, height);
  state.sparkles = state.sparkles.filter((sparkle) => {
    sparkle.life += delta;
    const progress = sparkle.life / sparkle.ttl;

    if (progress >= 1) {
      return false;
    }

    const alpha = Math.sin(progress * Math.PI);
    const x = sparkle.x * width;
    const y = sparkle.y * height;
    const length = sparkle.size * (1 + alpha * 1.8);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(sparkle.rotation + state.x * 0.45);
    ctx.globalAlpha = alpha * 0.82;
    ctx.strokeStyle = sparkle.color;
    ctx.lineWidth = 0.75;
    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(-length, 0);
    ctx.lineTo(length, 0);
    ctx.moveTo(0, -length * 0.55);
    ctx.lineTo(0, length * 0.55);
    ctx.stroke();
    ctx.restore();

    return true;
  });
}

function handlePointerMove(event) {
  const rect = frame.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  setTarget(x, y);
}

function handlePointerLeave() {
  setTarget(0, 0);
}

function handleOrientation(event) {
  const gamma = event.gamma || 0;
  const beta = event.beta || 0;

  setTarget(gamma / 24, (beta - 35) / 30);
}

function supportsIOSMotionPermission() {
  return (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  );
}

async function requestMotionPermission() {
  try {
    const response = await DeviceOrientationEvent.requestPermission();

    if (response === "granted") {
      window.addEventListener("deviceorientation", handleOrientation, true);
      motionButton.textContent = "Motion enabled";
      motionButton.classList.add("is-active");
    } else {
      motionButton.textContent = "Motion unavailable";
    }
  } catch {
    motionButton.textContent = "Motion unavailable";
  }
}

function setupMotion() {
  if (supportsIOSMotionPermission()) {
    motionButton.classList.add("is-visible");
    motionButton.addEventListener("click", requestMotionPermission);
    return;
  }

  if (typeof DeviceOrientationEvent !== "undefined") {
    window.addEventListener("deviceorientation", handleOrientation, true);
  }
}

let lastFrameTime = performance.now();

function animate(now) {
  const delta = Math.min(48, now - lastFrameTime);
  lastFrameTime = now;

  updateCssVariables();
  addSparkle(now);
  drawSparkles(delta);

  requestAnimationFrame(animate);
}

setHotspotVariables();
resizeCanvas();
setupMotion();

frame.addEventListener("pointermove", handlePointerMove);
frame.addEventListener("pointerleave", handlePointerLeave);
window.addEventListener("resize", resizeCanvas);
requestAnimationFrame(animate);
