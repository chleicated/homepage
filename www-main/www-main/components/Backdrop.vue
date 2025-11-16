<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const cursor = ref({ x: 0, y: 0 });
let ctx = null;
let animationFrame = null;
let chars = [];

// Mixed Japanese character set (Kanji + Hiragana + Katakana)
const JAPANESE_SET = [
  // Kanji
  "日","本","東","京","火","水","文","力","目","心","山","川",
  // Hiragana
  "あ","い","う","え","お","か","き","く","け","こ",
  "さ","し","す","せ","そ",
  // Katakana
  "ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ",
  "サ","シ","ス","セ","ソ"
];

const randomJapaneseChar = () =>
  JAPANESE_SET[Math.floor(Math.random() * JAPANESE_SET.length)];

class Char {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.speed = 1.2 + Math.random() * 1.8;
    this.opacity = 0.05 + Math.random() * 0.15;
    this.actualY = y;
  }

  draw() {
    const distToCursor = Math.hypot(
      this.x - cursor.value.x,
      this.y - cursor.value.y
    );

    const highlight = Math.max(0, 0.5 - distToCursor / 250);
    ctx.fillStyle = `rgba(205, 214, 244, ${this.opacity + highlight})`;
    ctx.fillText(this.char, this.x, this.y);
  }

  update() {
    this.actualY += this.speed;
    this.y = this.actualY % window.innerHeight;

    if (this.y < this.speed) {
      this.char = randomJapaneseChar();
      this.opacity = 0.05 + Math.random() * 0.15;
    }
  }
}

const calculateFontSize = () => {
  const baseSize = 16;
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    return Math.max(18, baseSize * (screenWidth / 768));
  }

  return Math.min(22, Math.max(18, baseSize * (screenWidth / 1920)));
};

const init = () => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d", { alpha: false });
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  const fontSize = calculateFontSize();
  const columnSpacing = fontSize * 1.5;

  const minColumns = 15;
  const columns = Math.max(
    minColumns,
    Math.floor(window.innerWidth / columnSpacing)
  );

  const rowSpacing = fontSize * 2;
  const minRows = 15;
  const maxRows = 25;
  const rows = Math.min(
    maxRows,
    Math.max(minRows, Math.floor(window.innerHeight / rowSpacing))
  );

  chars = [];
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * (window.innerWidth / columns);
      const y = j * rowSpacing - Math.random() * window.innerHeight;
      const char = randomJapaneseChar();
      chars.push(new Char(x, y, char));
    }
  }

  ctx.font = `${fontSize}px monospace`;
};

const animate = () => {
  ctx.fillStyle = "rgb(17, 17, 27)";
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

  chars.forEach((char) => {
    char.draw();
    char.update();
  });

  animationFrame = requestAnimationFrame(animate);
};

const handleMouseMove = (e) => {
  cursor.value = {
    x: e.clientX,
    y: e.clientY,
  };
};

let resizeTimeout;
const handleResize = () => {
  if (resizeTimeout) clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(() => {
    if (canvas.value) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
      init();
    }
  }, 250);
};

onMounted(() => {
  init();
  animate();
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  if (resizeTimeout) clearTimeout(resizeTimeout);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", handleResize);
});
</script>