/* ==========================================================================
   MUNIBA'S PRIVATE LOVE WORLD - MASTER CONFIG & INTERACTIVE JAVASCRIPT ENGINE
   100% ROMAN URDU EDITION & MOBILE OPTIMIZED
   ========================================================================== */

// ⚙️ CUSTOMIZABLE CONFIGURATION OBJECT
const CONFIG = {
  girlfriendName: "Muniba",
  boyfriendName: "Moazzam",
  birthdayDate: "August 19", // Format: Month Day (e.g. August 19)
  secretPin: "0819", // August 19

  // Personal Love Letter Content (Roman Urdu)
  loveLetterText: `
    <p class="font-bold text-rose-900 text-lg">Hey Meri Jaan-e-Man ❤️</p>
    <p>Salgirah Mubarak meri Shazadi, meri Guriya, meri Begum. 🥹❤️</p>
    <p>Aaj ka din mere liye bhi bohot special hai, kyun ke isi din meri duniya ki sab se pyari insaan is duniya me aayi thi.</p>
    <p>Tum mere liye sirf ek insaan nahi ho... tum meri khushi ho, meri muskurahat ho, meri sab se favorite notification ho, aur meri sab se khoobsurat yaadon ka hissa ho.</p>
    <p class="font-cursive text-2xl text-rose-700 my-2">"Muniba, tum meri zindagi ka wo haseen khwaab ho jo sach ho gaya hai."</p>
    <p>Bas itna kehna hai...</p>
    <p class="font-bold text-rose-900">Salgirah Mubarak Meri Jaan-e-Man ❤️</p>
    <p>Hamesha khush rehna.</p>
    <p>Aur meri Guriya Begum hamesha aise hi muskuraati rehna. 🥹❤️</p>
  `,

  // Secret Message Content (Unlocked by 0819 PIN)
  secretMessageText: `
    Muniba, meri Jaan-e-Man... Ye secret message sirf tumhare liye hai. <br><br>
    Zindagi me chahe kitne bhi din guzar jayein, mera pyaar tumhare liye har din pehle se zyada gehra hoga. Tum meri zindagi ki sab se khoobsurat haqeeqat ho. <br><br>
    Hamesha mere saath rehna, Meri Shazadi! 👑❤️
  `,

  // Quiz Questions (Game 1) in Roman Urdu
  quizQuestions: [
    {
      q: "Aapko kya lagta hai mujhe aap me sab se zyada kya pasand hai?",
      options: ["Aapki pyari muskurahat 🥹", "Aapka pyara dil ❤️", "Aapka mujh se baat karna 🥰", "Aapki har ek baat! 👑"],
      answerIndex: 3,
      response: "Sahi jawab! Aapki har ek baat mere dil ko choo jaati hai, Muniba! ❤️"
    },
    {
      q: "Meri favorite cheez aapki muskurahat ke baare me kya hai?",
      options: ["Mera sab se udaas din roshan kar deti hai 🌟", "Duniya ki sab se pyari cheez hai 🥹", "Mujhe foran khush kar deti hai 😊", "Ye sab baatein sahi hain! ❤️"],
      answerIndex: 3,
      response: "Bilkul sahi! Aapki muskurahat meri favorite notification hai! ❤️"
    },
    {
      q: "Agar hum kahin door saath chale jayein, to kahan jayenge?",
      options: ["Taaron bhare aasman ke niche 🌌", "Ek pyare se samundar ke kinare 🌊", "Garam coffee date par ☕", "Kahin bhi, bas aapke saath hona chahiye ✈️"],
      answerIndex: 3,
      response: "Bilkul! Jagah koi bhi ho, bas aapka saath chahiye, Meri Shazadi! ❤️"
    },
    {
      q: "Aap par sab se pyara naam kaun sa suit karta hai?",
      options: ["Meri Shazadi 👑", "Meri Guriya 🥹", "Meri Begum ❤️", "Ye sab naam, kyun ke main aapki sab kuch hoon! 💖"],
      answerIndex: 3,
      response: "Aww haan! Aap meri Shazadi, Guriya aur Begum hamesha ke liye hain! ❤️"
    },
    {
      q: "Hamare rishte me sab se khaas baat kya hai?",
      options: ["Sachha bharosa aur samajh 🤝", "Be-panah pyaar aur hansi 😂", "Khaas care aur apnapan 💖", "Ye sab kuch mila kar saccha pyaar ❤️"],
      answerIndex: 3,
      response: "Wah Begum! Score matter nahi karta, Meri Guriya... kyun ke mera dil to pehle hi aapka hai. ❤️"
    }
  ],

  // 15 Reasons Why I Love You (Heart Cards in Roman Urdu)
  reasons: [
    "Kyun ke aapki muskurahat mera har udaas din roshan kar deti hai.",
    "Kyun ke aap se baat karna kabhi bhi boring nahi hota.",
    "Kyun ke aap aam se lamhon ko bhi jaadooi bana deti hain.",
    "Kyun ke aap meri zindagi ki sab se favorite notification hain.",
    "Kyun ke aapka dil sab se saaf aur pyara hai.",
    "Kyun ke aapki aawaz sun kar mere dil ko sukoon milta hai.",
    "Kyun ke aap mere dil par malika ki tarah raaj karti hain 👑",
    "Kyun ke aap mujhe jitna samajhti hain koi nahi samajh sakta.",
    "Kyun ke jab aap muskuraati hain to bohot pyari lagti hain 🥹",
    "Kyun ke aapke saath bitaaya har lamha anmol hai.",
    "Kyun ke aap meri sab se safe aur sab se khush jagah hain.",
    "Kyun ke aapki wajah se main ek behtar insaan banta hoon.",
    "Kyun ke aapke hone se meri zindagi me ronak hai.",
    "Kyun ke aap mera sach hua khwaab hain, Muniba ❤️",
    "Kyun ke aap sirf AAP hain. Hamesha aur be-panah pyaar. ❤️"
  ],

  // Memory Gallery Items with user's uploaded images
  gallery: [
    { title: "Be-Panaah Khushi", caption: "Meri sab se favorite yaad ❤️", img: "https://i.postimg.cc/QxyjfQzP/Screenshot-20260818-213130.jpg" },
    { title: "Meri Pyari Muniba", caption: "Wo muskurahat... 🥹", img: "https://i.postimg.cc/R0Q5xKPh/Screenshot-20260818-212835.jpg" },
    { title: "Hamara Pyara Lamha", caption: "Hamara pyara lamha.", img: "https://i.postimg.cc/pLz3KKMQ/Screenshot-20260818-212523.jpg" },
    { title: "Hamesha Favorite", caption: "Hamesha ke liye favorite.", img: "https://i.postimg.cc/65GPNCqx/Screenshot-20260818-211712.jpg" },
    { title: "Aap Aur Main", caption: "Aap aur main ❤️", img: "https://i.postimg.cc/BbPm4GqC/Screenshot-20260818-211334.jpg" },
    { title: "Meri Jaan Muniba", caption: "Muniba, aap me meri jaan basti hai ❤️", img: "https://i.postimg.cc/QxyjfQzP/Screenshot-20260818-213130.jpg" }
  ],

  // Timeline Events (Roman Urdu)
  timeline: [
    { tag: "Pehli Mulaqaat ❤️", title: "Jab Hum Pehli Baar Mile", desc: "Kainaat ne humein milaya aur meri zindagi me sab se pyari insaan aayi." },
    { tag: "Pehli Lambi Baat", title: "Pehli Lambi Conversation", desc: "Ghante second ki tarah guzar gaye. Mujhe tabhi pata chal gaya tha ke aap bohot khaas hain." },
    { tag: "Muskurahatein", title: "Haseen Yaadein", desc: "Har mazaak, late-night text aur hansi meri zindagi ka khazana ban gaye." },
    { tag: "Aaj Ka Din", title: "Salgirah Ka Jashan", desc: "19 August — Meri Shazadi Muniba ki salgirah ka jashan! 👑❤️" },
    { tag: "Aane Wala Kal ❤️", title: "Khoobsurat Future", desc: "Ek saath ek khoobsurat future banana, haath me haath daal kar." }
  ],

  // Compliments List (Roman Urdu)
  compliments: [
    "Meri Guriya, tumhari smile dangerous hai... mera dil chura leti hai. 🥹❤️",
    "Jaan-e-Man, tum literally meri favorite notification ho.",
    "Meri Shazadi, tumhari ek smile mera pura mood change kar sakti hai.",
    "Begum, aap officially meri favorite person hain. 👑❤️",
    "Muniba, aapki aankhon me poori kainaat ka sukoon hai. ✨❤️",
    "Duniya me billions log hain, lekin mere liye sirf tum ho, Meri Jaan! ❤️",
    "Meri Guriya, aap itni pyari kyun hain? 🥹❤️"
  ],

  // Future Bucket List (Roman Urdu)
  futureList: [
    "Saath me sunset dekhna 🌅",
    "Kahin khoobsurat jagah ghoomne jana ✈️",
    "Pyari aur funny photos lena 📸",
    "Kabhi na bhoolne wali yaadein banana ❤️",
    "Ek saath aage badhna.",
    "Ek doosre ko hamesha muskuraate rakhna."
  ],

  // Final Gift Card Text (Roman Urdu)
  finalGiftText: `
    <p class="font-cursive text-3xl text-roseGold">Jaan-e-Man ❤️</p>
    <p>Agar duniya me mujhe dobara choose karna hota...</p>
    <p class="font-bold text-neonPink text-lg">main phir tumhe hi choose karta.</p>
    <p class="text-roseSoft">Meri Shazadi, meri Guriya, meri Begum... Salgirah Mubarak. ❤️</p>
    <p class="text-rose-200">Meri zindagi me aane ke liye shukriya.</p>
    <p class="italic text-roseGold">Aur yaad rakhna...</p>
    <p class="font-cursive text-2xl text-pink-300">Tum bohot special ho. Aaj bhi. Kal bhi. Aur hamesha. ❤️</p>
    <p class="font-cursive text-2xl text-roseGold mt-2">Forever yours, Moazzam ❤️</p>
  `
};

/* ==========================================================================
   INITIALIZATION ON DOM LOAD
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initOpeningRevealSequence();
  initMainAppContent();
  initAudioSynthesizer();
});

/* -------------------------------------------------------------
 * 1. Background Floating Particle Canvas Engine
 * ------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = window.innerWidth < 640 ? 35 : 55;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 100;
      this.size = Math.random() * 10 + 5;
      this.speedY = Math.random() * 1.1 + 0.4;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.4;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 1.2;
      this.type = Math.random() > 0.35 ? 'heart' : 'star';
      this.color = Math.random() > 0.5 ? '#ff2a6d' : '#ffd700';
    }

    update() {
      this.y -= this.speedY;
      this.x += Math.sin(this.y * 0.008) * 0.4 + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y < -30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;

      if (this.type === 'heart') {
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
        ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
        ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

/* -------------------------------------------------------------
 * 2. Opening Reveal Sequence (Cinematic Intro for Muniba)
 * ------------------------------------------------------------- */
function initOpeningRevealSequence() {
  const introOverlay = document.getElementById('introOverlay');
  const mainApp = document.getElementById('mainApp');
  const heart = document.getElementById('introHeart');
  const step1 = document.getElementById('introStep1');
  const nameEl = document.getElementById('introName');
  const step3 = document.getElementById('introStep3');
  const step4 = document.getElementById('introStep4');
  const step5 = document.getElementById('introStep5');
  const enterBtn = document.getElementById('enterStoryBtn');

  if (!introOverlay || !mainApp) return;

  setTimeout(() => {
    heart.classList.remove('opacity-0', 'scale-50');
    heart.classList.add('opacity-100', 'scale-100');
  }, 600);

  setTimeout(() => {
    step1.classList.remove('opacity-0');
    step1.classList.add('opacity-100');
  }, 1600);

  setTimeout(() => {
    nameEl.classList.remove('opacity-0');
    nameEl.classList.add('opacity-100');
  }, 2800);

  setTimeout(() => {
    step3.classList.remove('opacity-0');
    step3.classList.add('opacity-100');
  }, 4200);

  setTimeout(() => {
    step4.classList.remove('opacity-0');
    step4.classList.add('opacity-100');
  }, 5600);

  setTimeout(() => {
    step5.classList.remove('opacity-0');
    step5.classList.add('opacity-100');
  }, 7000);

  setTimeout(() => {
    enterBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-90');
    enterBtn.classList.add('opacity-100', 'scale-100');
  }, 8200);

  enterBtn.addEventListener('click', () => {
    introOverlay.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      introOverlay.classList.add('hidden');
      mainApp.classList.remove('hidden');
      mainApp.classList.add('animate-fade-in');
      initLiveCountdown();
    }, 1000);
  });
}

/* -------------------------------------------------------------
 * 3. Populating Main App Content & Dynamic Modules
 * ------------------------------------------------------------- */
function initMainAppContent() {
  const letterBodyText = document.getElementById('letterBodyText');
  if (letterBodyText) letterBodyText.innerHTML = CONFIG.loveLetterText;

  const openLetterBtn = document.getElementById('openLetterBtn');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  const letterCard = document.getElementById('letterCard');

  openLetterBtn?.addEventListener('click', () => {
    letterCard.classList.remove('hidden');
    letterCard.scrollIntoView({ behavior: 'smooth' });
  });

  closeLetterBtn?.addEventListener('click', () => {
    letterCard.classList.add('hidden');
  });

  initQuizGame();
  initCatchGame();
  initPuzzleGame();
  initRoseGame();
  initGiftsGame();
  initStarsGame();
  initReasonsGrid();
  initGalleryGrid();
  initTimeline();
  initHeartMeterAndCompliments();
  initSecretLock();
  initFutureListAndFinalReveal();
}

/* -------------------------------------------------------------
 * 4. Countdown Timer Engine to 19 August
 * ------------------------------------------------------------- */
function initLiveCountdown() {
  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMinutes = document.getElementById('cdMinutes');
  const cdSeconds = document.getElementById('cdSeconds');
  const cdMsg = document.getElementById('cdCelebrationMsg');

  function updateTimer() {
    const now = new Date();
    let currentYear = now.getFullYear();
    let target = new Date(`August 19, ${currentYear} 00:00:00`);

    if (now > target) {
      target = new Date(`August 19, ${currentYear + 1} 00:00:00`);
    }

    const diff = target - now;

    if (diff <= 0) {
      if (cdMsg) cdMsg.classList.remove('hidden');
      triggerConfettiBurst();
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    if (cdDays) cdDays.textContent = d < 10 ? '0' + d : d;
    if (cdHours) cdHours.textContent = h < 10 ? '0' + h : h;
    if (cdMinutes) cdMinutes.textContent = m < 10 ? '0' + m : m;
    if (cdSeconds) cdSeconds.textContent = s < 10 ? '0' + s : s;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* -------------------------------------------------------------
 * 5. GAME 1: Quiz Engine (Roman Urdu)
 * ------------------------------------------------------------- */
function initQuizGame() {
  let currentIdx = 0;
  const qText = document.getElementById('quizQuestionText');
  const optionsGrid = document.getElementById('quizOptionsGrid');
  const progressText = document.getElementById('quizProgress');
  const feedback = document.getElementById('quizFeedback');

  if (!qText || !optionsGrid) return;

  function renderQuestion() {
    const qData = CONFIG.quizQuestions[currentIdx];
    if (progressText) progressText.textContent = `Sawaal ${currentIdx + 1}/${CONFIG.quizQuestions.length}`;
    qText.textContent = qData.q;
    optionsGrid.innerHTML = '';
    if (feedback) feedback.classList.add('hidden');

    qData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = "p-3.5 sm:p-4 rounded-2xl bg-midnight/80 border border-neonPink/30 hover:border-neonPink text-rose-100 hover:bg-neonPink/20 transition-all text-xs sm:text-base font-medium text-left flex items-center justify-between active:scale-95";
      btn.innerHTML = `<span>${opt}</span> <i class="fa-solid fa-chevron-right text-xs opacity-50"></i>`;
      btn.addEventListener('click', () => handleAnswer(idx));
      optionsGrid.appendChild(btn);
    });
  }

  function handleAnswer(selectedIdx) {
    const qData = CONFIG.quizQuestions[currentIdx];
    if (feedback) {
      feedback.textContent = qData.response;
      feedback.classList.remove('hidden');
    }

    setTimeout(() => {
      currentIdx++;
      if (currentIdx < CONFIG.quizQuestions.length) {
        renderQuestion();
      } else {
        qText.textContent = "Quiz Complete! ❤️";
        optionsGrid.innerHTML = `<div class="col-span-full p-5 text-center font-serif text-lg sm:text-2xl text-roseGold bg-midnight/90 border border-neonPink/40 rounded-2xl">
          "Score matter nahi karta, Meri Guriya... kyun ke mera dil to pehle hi aapka hai. ❤️"
        </div>`;
        if (progressText) progressText.textContent = "Unlocked Game 2!";
      }
    }, 1800);
  }

  renderQuestion();
}

/* -------------------------------------------------------------
 * 6. GAME 2: Catch My Heart Arcade
 * ------------------------------------------------------------- */
function initCatchGame() {
  const startBtn = document.getElementById('startCatchBtn');
  const playArea = document.getElementById('catchPlayArea');
  const scoreEl = document.getElementById('catchScore');
  const timerEl = document.getElementById('catchTimer');
  const resultMsg = document.getElementById('catchResultMsg');

  if (!startBtn || !playArea) return;

  let score = 0;
  let timeLeft = 30;
  let gameInterval = null;
  let spawnInterval = null;

  startBtn.addEventListener('click', startGame);

  function startGame() {
    score = 0;
    timeLeft = 30;
    scoreEl.textContent = '0';
    timerEl.textContent = '30';
    startBtn.classList.add('hidden');
    if (resultMsg) resultMsg.classList.add('hidden');

    gameInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);

    spawnInterval = setInterval(spawnHeart, 650);
  }

  function spawnHeart() {
    const heartBtn = document.createElement('button');
    const isSpecial = Math.random() > 0.7;
    heartBtn.className = 'catch-heart-btn text-3xl sm:text-4xl animate-bounce p-2';
    heartBtn.textContent = isSpecial ? '💗' : '❤️';

    const maxX = playArea.clientWidth - 60;
    const maxY = playArea.clientHeight - 60;
    heartBtn.style.left = Math.max(10, Math.floor(Math.random() * maxX)) + 'px';
    heartBtn.style.top = Math.max(10, Math.floor(Math.random() * maxY)) + 'px';

    heartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      score += isSpecial ? 5 : 1;
      scoreEl.textContent = score;
      heartBtn.remove();
    });

    playArea.appendChild(heartBtn);

    setTimeout(() => {
      heartBtn.remove();
    }, 1400);
  }

  function endGame() {
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    playArea.querySelectorAll('.catch-heart-btn').forEach(b => b.remove());
    if (resultMsg) resultMsg.classList.remove('hidden');
    startBtn.textContent = "Dobara Khelein ❤️";
    startBtn.classList.remove('hidden');
  }
}

/* -------------------------------------------------------------
 * 7. GAME 3: Memory Puzzle
 * ------------------------------------------------------------- */
function initPuzzleGame() {
  const board = document.getElementById('puzzleBoard');
  const msg = document.getElementById('puzzleSuccessMsg');
  if (!board) return;

  let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  tiles.sort(() => Math.random() - 0.5);

  function renderTiles() {
    board.innerHTML = '';
    tiles.forEach((val, idx) => {
      const tile = document.createElement('div');
      tile.className = 'puzzle-tile aspect-square text-lg font-bold';
      tile.textContent = val;
      tile.addEventListener('click', () => swapTile(idx));
      board.appendChild(tile);
    });
  }

  function swapTile(idx) {
    if (idx > 0) {
      let temp = tiles[idx];
      tiles[idx] = tiles[idx - 1];
      tiles[idx - 1] = temp;
      renderTiles();
      checkWin();
    }
  }

  function checkWin() {
    let isSolved = tiles.every((v, i) => v === i + 1);
    if (isSolved && msg) {
      msg.classList.remove('hidden');
    }
  }

  renderTiles();
}

/* -------------------------------------------------------------
 * 8. GAME 4: Bloom My Rose
 * ------------------------------------------------------------- */
function initRoseGame() {
  const bloomBtn = document.getElementById('bloomRoseBtn');
  const roseIcon = document.getElementById('roseIcon');
  const roseMsg = document.getElementById('roseMsg');

  bloomBtn?.addEventListener('click', () => {
    roseIcon.className = "fa-solid fa-rose text-6xl sm:text-7xl text-rosePink rose-bloomed transition-all duration-1000";
    if (roseMsg) roseMsg.classList.remove('hidden');
    triggerConfettiBurst();
  });
}

/* -------------------------------------------------------------
 * 9. GAME 5: Three Mystery Gifts
 * ------------------------------------------------------------- */
function initGiftsGame() {
  const giftBoxes = document.querySelectorAll('.gift-box');
  const giftTexts = [
    "Meri taraf se ek pyari si jhappi (Hug) 🤗❤️",
    "Hazaron kisses 😘❤️",
    "Mera poora dil — hamesha ke liye aapka ❤️"
  ];

  giftBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const giftId = parseInt(box.getAttribute('data-gift')) - 1;
      const reveal = box.querySelector('.gift-reveal');
      if (reveal) {
        reveal.textContent = giftTexts[giftId];
        reveal.classList.remove('hidden');
        box.classList.add('border-roseGold', 'scale-105');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 10. GAME 6: Tap The Stars (Night Sky)
 * ------------------------------------------------------------- */
function initStarsGame() {
  const starSky = document.getElementById('starSkyArea');
  const toast = document.getElementById('starMessageToast');
  if (!starSky) return;

  const messages = [
    "Aap bohot khoobsurat hain ❤️",
    "Aap mujhe muskuraane par majboor karti hain 🥹",
    "Aap meri sab se favorite insaan hain ❤️",
    "Meri Pyari Guriya 👑",
    "Hamesha ke liye khaas ❤️",
    "Jaan-e-Man ❤️"
  ];

  for (let i = 0; i < 15; i++) {
    const star = document.createElement('div');
    star.className = 'sky-star text-roseGold text-lg sm:text-2xl p-1';
    star.innerHTML = '✨';
    star.style.left = Math.floor(Math.random() * 85 + 5) + '%';
    star.style.top = Math.floor(Math.random() * 75 + 10) + '%';

    star.addEventListener('click', () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      if (toast) {
        toast.textContent = msg;
        toast.classList.remove('hidden');
      }
    });

    starSky.appendChild(star);
  }
}

/* -------------------------------------------------------------
 * 11. Reasons I Love You (15 Cards)
 * ------------------------------------------------------------- */
function initReasonsGrid() {
  const grid = document.getElementById('reasonsGrid');
  if (!grid) return;

  CONFIG.reasons.forEach((reasonText, idx) => {
    const card = document.createElement('div');
    card.className = "flip-card h-48 sm:h-52 cursor-pointer perspective";
    card.innerHTML = `
      <div class="flip-card-inner relative w-full h-full duration-700 transform-style-3d">
        <div class="flip-card-front absolute inset-0 bg-deepPlum/60 border border-neonPink/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-lg">
          <div class="w-10 h-10 rounded-full bg-neonPink/20 border border-neonPink/50 flex items-center justify-center text-neonPink text-base mb-2">
            ❤️
          </div>
          <h4 class="font-serif text-base text-white font-semibold mb-1">Wajah #${idx + 1}</h4>
          <span class="text-[11px] text-roseGold font-medium">Click karein ❤️</span>
        </div>
        <div class="flip-card-back absolute inset-0 bg-gradient-to-br from-neonPink to-purple-900 rounded-2xl p-4 flex items-center justify-center text-center text-white shadow-xl rotate-y-180 font-medium text-xs leading-relaxed">
          "${reasonText}"
        </div>
      </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}

/* -------------------------------------------------------------
 * 12. Memory Gallery Grid
 * ------------------------------------------------------------- */
function initGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = '';

  CONFIG.gallery.forEach(item => {
    const card = document.createElement('div');
    card.className = "bg-amber-50 p-3.5 rounded-xl shadow-2xl border border-amber-200 transform hover:scale-105 transition-all duration-300 group";
    card.innerHTML = `
      <div class="w-full h-64 sm:h-72 rounded-lg overflow-hidden relative bg-midnight flex items-center justify-center border border-rose-200">
        <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      </div>
      <p class="font-cursive text-xl sm:text-2xl text-slate-800 text-center mt-3">"${item.caption}"</p>
    `;
    grid.appendChild(card);
  });
}

/* -------------------------------------------------------------
 * 13. Love Timeline
 * ------------------------------------------------------------- */
function initTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  CONFIG.timeline.forEach(item => {
    const el = document.createElement('div');
    el.className = "relative group";
    el.innerHTML = `
      <div class="absolute -left-[27px] sm:-left-[47px] top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neonPink border-4 border-midnight flex items-center justify-center text-xs text-white"></div>
      <span class="inline-block px-2.5 py-0.5 rounded-full bg-neonPink/20 border border-neonPink/40 text-roseGold text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5">${item.tag}</span>
      <h4 class="font-serif text-xl sm:text-2xl font-bold text-white mb-1">${item.title}</h4>
      <p class="text-rose-200/80 text-xs sm:text-sm max-w-lg leading-relaxed">${item.desc}</p>
    `;
    container.appendChild(el);
  });
}

/* -------------------------------------------------------------
 * 14. Heart Meter & Compliment Machine
 * ------------------------------------------------------------- */
function initHeartMeterAndCompliments() {
  const calcBtn = document.getElementById('calcLoveBtn');
  const meterBar = document.getElementById('heartMeterBar');
  const meterText = document.getElementById('heartMeterText');

  calcBtn?.addEventListener('click', () => {
    if (!meterBar) return;
    meterBar.style.width = '100%';
    meterBar.textContent = '1000% ∞';

    setTimeout(() => {
      if (meterText) {
        meterText.textContent = "Zahir hai, koi aisa number hi nahi bana jo mera pyaar naap sake. ❤️";
        meterText.classList.remove('hidden');
      }
    }, 1000);
  });

  const genBtn = document.getElementById('genComplimentBtn');
  const compDisplay = document.getElementById('complimentDisplay');

  genBtn?.addEventListener('click', () => {
    const comp = CONFIG.compliments[Math.floor(Math.random() * CONFIG.compliments.length)];
    if (compDisplay) {
      compDisplay.textContent = comp;
      compDisplay.classList.remove('hidden');
    }
  });
}

/* -------------------------------------------------------------
 * 15. Secret Lock (PIN: 0819)
 * ------------------------------------------------------------- */
function initSecretLock() {
  const pinInput = document.getElementById('secretPin');
  const unlockBtn = document.getElementById('unlockSecretBtn');
  const result = document.getElementById('secretMsgResult');
  const customText = document.getElementById('secretTextCustom');

  unlockBtn?.addEventListener('click', () => {
    const pin = pinInput.value.trim();
    if (pin === CONFIG.secretPin) {
      if (result && customText) {
        customText.innerHTML = CONFIG.secretMessageText;
        result.classList.remove('hidden');
      }
    } else {
      alert("Galat Code! Hint: 19 August (0819) ❤️");
    }
  });
}

/* -------------------------------------------------------------
 * 16. Future Bucket List & Final Birthday Reveal
 * ------------------------------------------------------------- */
function initFutureListAndFinalReveal() {
  const grid = document.getElementById('futureGrid');
  if (grid) {
    CONFIG.futureList.forEach(item => {
      const card = document.createElement('div');
      card.className = "p-4 rounded-2xl bg-midnight/80 border border-neonPink/30 font-medium text-rose-100 text-xs sm:text-base flex items-center justify-center text-center shadow-lg hover:border-roseGold active:scale-95 transition-all";
      card.textContent = item;
      grid.appendChild(card);
    });
  }

  const revealBtn = document.getElementById('finalRevealBtn');
  const display = document.getElementById('finalGrandDisplay');
  const openGiftBtn = document.getElementById('openFinalGiftBtn');
  const giftModal = document.getElementById('finalGiftModal');
  const giftContent = document.getElementById('finalGiftCardContent');
  const finalAnsBtns = document.querySelectorAll('.finalAnsBtn');
  const endingMsg = document.getElementById('finalEndingMsg');

  revealBtn?.addEventListener('click', () => {
    if (display) display.classList.remove('hidden');
    triggerConfettiBurst();
  });

  openGiftBtn?.addEventListener('click', () => {
    if (giftContent) giftContent.innerHTML = CONFIG.finalGiftText;
    if (giftModal) giftModal.classList.remove('hidden');
  });

  finalAnsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (endingMsg) endingMsg.classList.remove('hidden');
      triggerConfettiBurst();
    });
  });
}

/* -------------------------------------------------------------
 * 17. Confetti Burst Helper
 * ------------------------------------------------------------- */
function triggerConfettiBurst() {
  if (window.confetti) {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ff2a6d', '#ffd700', '#ffffff', '#ff7597']
    });
  }
}

/* -------------------------------------------------------------
 * 18. Romantic Web Audio Synthesizer (Music ON/OFF)
 * ------------------------------------------------------------- */
function initAudioSynthesizer() {
  const musicBtn = document.getElementById('musicToggle');
  const musicIcon = document.getElementById('musicIcon');
  let audioCtx = null;
  let isPlaying = false;
  let timerId = null;

  const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 659.25];

  function playNote() {
    if (!isPlaying || !audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      const note = notes[Math.floor(Math.random() * notes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 2.6);
    } catch (e) {
      console.log('Audio error:', e);
    }

    timerId = setTimeout(playNote, Math.random() * 1000 + 800);
  }

  musicBtn?.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = !isPlaying;

    if (isPlaying) {
      musicIcon.className = 'fa-solid fa-volume-high text-lg sm:text-xl animate-bounce text-roseGold';
      playNote();
    } else {
      musicIcon.className = 'fa-solid fa-music text-lg sm:text-xl animate-pulse text-neonPink';
      if (timerId) clearTimeout(timerId);
    }
  });
}
