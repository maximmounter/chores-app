// =============================================
// SCRIPT.JS — Firestore version
// =============================================

// =============================================
// FIREBASE + FIRESTORE
// =============================================
const firebaseConfig = {
  apiKey: "AIzaSyD2B1cxH1c6RMN3UVRMvcA0CFR8ED7M44Q",
  authDomain: "maxim-chores-app.firebaseapp.com",
  projectId: "maxim-chores-app",
  storageBucket: "maxim-chores-app.firebasestorage.app",
  messagingSenderId: "276219421960",
  appId: "1:276219421960:web:c1c914cc1947b0bf5ab8bd",
  measurementId: "G-H4NNSBGEC5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// =============================================
// RANKS
// =============================================
const RANKS = [
  { name:"Rookie",   minPoints:0,    heroBg:"#050505", iconColor:"#1d4ed8", icon:`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round"><circle cx="50" cy="50" r="46" stroke-width="1" stroke-dasharray="4 6"/><circle cx="50" cy="50" r="40" stroke-width="1.5"/><line x1="50" y1="10" x2="50" y2="24" stroke-width="2.5"/><line x1="50" y1="76" x2="50" y2="90" stroke-width="2.5"/><line x1="10" y1="50" x2="24" y2="50" stroke-width="2.5"/><line x1="76" y1="50" x2="90" y2="50" stroke-width="2.5"/><line x1="79" y1="21" x2="69" y2="31" stroke-width="1.5"/><line x1="79" y1="79" x2="69" y2="69" stroke-width="1.5"/><line x1="21" y1="79" x2="31" y2="69" stroke-width="1.5"/><line x1="21" y1="21" x2="31" y2="31" stroke-width="1.5"/><circle cx="50" cy="50" r="26" stroke-width="1.5"/><circle cx="50" cy="50" r="12" stroke-width="1.5"/><circle cx="50" cy="50" r="5" fill="currentColor" stroke="none"/></svg>` },
  { name:"Grinder",  minPoints:50,   heroBg:"#030712", iconColor:"#1d4ed8", icon:`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="44" stroke-width="1.5"/><line x1="50" y1="6" x2="50" y2="18" stroke-width="2"/><polyline points="18,68 50,36 82,68" stroke-width="6"/><line x1="18" y1="78" x2="82" y2="78" stroke-width="4.5"/></svg>` },
  { name:"Hustler",  minPoints:150,  heroBg:"#030712", iconColor:"#2563eb", icon:`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="44" stroke-width="1.5"/><line x1="50" y1="6" x2="50" y2="16" stroke-width="2"/><polyline points="18,58 50,26 82,58" stroke-width="5.5"/><polyline points="18,73 50,41 82,73" stroke-width="5.5"/><line x1="18" y1="82" x2="82" y2="82" stroke-width="4"/></svg>` },
  { name:"Achiever", minPoints:300,  heroBg:"#020617", iconColor:"#3b82f6", icon:`<svg viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="50,10 59.4,37.1 88,37.6 65.2,54.9 73.5,82.4 50,66 26.5,82.4 34.8,54.9 12,37.6 40.6,37.1" fill="currentColor" stroke="none"/><circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.6"/></svg>` },
  { name:"Elite",    minPoints:500,  heroBg:"#020617", iconColor:"#60a5fa", icon:`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="46" stroke-width="1"/><polygon points="50,12 86,38 72,81 28,81 14,38" stroke-width="2.5"/><polygon points="50,28 71,43 63,68 37,68 29,43" stroke-width="1.5"/><line x1="50" y1="12" x2="50" y2="28" stroke-width="1" opacity="0.5"/><line x1="86" y1="38" x2="71" y2="43" stroke-width="1" opacity="0.5"/><line x1="72" y1="81" x2="63" y2="68" stroke-width="1" opacity="0.5"/><line x1="28" y1="81" x2="37" y2="68" stroke-width="1" opacity="0.5"/><line x1="14" y1="38" x2="29" y2="43" stroke-width="1" opacity="0.5"/><circle cx="50" cy="50" r="5.5" fill="currentColor" stroke="none"/></svg>` },
  { name:"Prodigy",  minPoints:800,  heroBg:"#020617", iconColor:"#93c5fd", icon:`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="50,6 88,28 88,72 50,94 12,72 12,28" stroke-width="2.5"/><polygon points="50,22 74,36 74,64 50,78 26,64 26,36" stroke-width="1.5"/><line x1="50" y1="6" x2="50" y2="22" stroke-width="1" opacity="0.6"/><line x1="88" y1="28" x2="74" y2="36" stroke-width="1" opacity="0.6"/><line x1="88" y1="72" x2="74" y2="64" stroke-width="1" opacity="0.6"/><line x1="50" y1="94" x2="50" y2="78" stroke-width="1" opacity="0.6"/><line x1="12" y1="72" x2="26" y2="64" stroke-width="1" opacity="0.6"/><line x1="12" y1="28" x2="26" y2="36" stroke-width="1" opacity="0.6"/><polygon points="50,36 64,50 50,64 36,50" fill="currentColor" stroke="none"/></svg>` },
  { name:"Legend",   minPoints:1200, heroBg:"#000000", iconColor:"#ffffff", icon:`<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="46" stroke-width="1"/><circle cx="50" cy="50" r="43" stroke-width="0.7" stroke-dasharray="3 5"/><path d="M 14,82 L 14,54 L 30,70 L 50,22 L 70,70 L 86,54 L 86,82 Z" stroke-width="2.5"/><line x1="14" y1="74" x2="86" y2="74" stroke-width="1.5"/><circle cx="50" cy="22" r="5" fill="currentColor" stroke="none"/><circle cx="14" cy="54" r="3.5" fill="currentColor" stroke="none"/><circle cx="86" cy="54" r="3.5" fill="currentColor" stroke="none"/><circle cx="32" cy="78" r="2.5" fill="currentColor" stroke="none"/><circle cx="50" cy="78" r="2.5" fill="currentColor" stroke="none"/><circle cx="68" cy="78" r="2.5" fill="currentColor" stroke="none"/></svg>` },
];


// =============================================
// USERS
// =============================================
const USER_KEYS  = ["maxim", "maya"];
const USER_NAMES = { maxim: "Maxim", maya: "Maya" };

function defaultUserData() {
  return { totalPoints:0, monthlyPoints:0, completedToday:[], lastDate:null, lastMonth:null, streak:0, lastStreakDate:null };
}

// In-memory state
let chores         = [];
let userData       = { maxim: defaultUserData(), maya: defaultUserData() };
let monthlyHistory = [];
let currentUser    = "maxim";

let now          = new Date();
let today        = now.toDateString();
let currentMonth = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");


// =============================================
// FIRESTORE SAVE HELPERS
// =============================================
function saveChores()   { db.collection("app").doc("chores").set({ list: chores }); }
function saveUserData() { db.collection("app").doc("userData").set(userData); }
function saveHistory()  { db.collection("app").doc("monthlyHistory").set({ list: monthlyHistory }); }


// =============================================
// DAILY + MONTHLY RESET
// =============================================
function applyResets() {
  let dailyResetHappened = false;

  USER_KEYS.forEach(key => {
    let u = userData[key];
    if (!u) { userData[key] = defaultUserData(); u = userData[key]; }
    if (u.lastDate !== today) {
      if (u.lastDate !== null) {
        dailyResetHappened = true;
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (!(u.lastStreakDate === u.lastDate && u.lastDate === yesterday.toDateString())) {
          if (u.lastStreakDate !== u.lastDate) u.streak = 0;
        }
      }
      u.completedToday = [];
      u.lastDate = today;
    }
  });

  let prevMonth = userData.maxim.lastMonth;
  if (prevMonth && prevMonth !== currentMonth) {
    let [yr, mo] = prevMonth.split("-").map(Number);
    let monthLabel = new Date(yr, mo - 1, 1).toLocaleString("default", { month:"long", year:"numeric" });
    monthlyHistory.push({ month: monthLabel, maxim: userData.maxim.monthlyPoints, maya: userData.maya.monthlyPoints });
    if (monthlyHistory.length > 6) monthlyHistory = monthlyHistory.slice(-6);
    saveHistory();
    USER_KEYS.forEach(key => { userData[key].monthlyPoints = 0; userData[key].lastMonth = currentMonth; });
  }

  USER_KEYS.forEach(key => { if (!userData[key].lastMonth) userData[key].lastMonth = currentMonth; });

  if (dailyResetHappened) {
    let notice = document.getElementById("daily-reset-notice");
    if (notice) { notice.style.display = "block"; setTimeout(() => { notice.style.display = "none"; }, 4000); }
  }
}


// =============================================
// REAL-TIME FIRESTORE LISTENERS
// =============================================
db.collection("app").doc("chores").onSnapshot(doc => {
  chores = doc.exists ? (doc.data().list || []) : [];
  renderChores();
});

db.collection("app").doc("userData").onSnapshot(doc => {
  if (doc.exists) {
    let fresh = doc.data();
    USER_KEYS.forEach(key => { userData[key] = fresh[key] || defaultUserData(); });
  } else {
    userData = { maxim: defaultUserData(), maya: defaultUserData() };
  }
  applyResets();
  saveUserData();
  renderChores();
});

db.collection("app").doc("monthlyHistory").onSnapshot(doc => {
  monthlyHistory = doc.exists ? (doc.data().list || []) : [];
  updateComparison();
});


// =============================================
// DRAWER & FORM TOGGLES
// =============================================
let drawerOpen  = false;
let addFormOpen = false;

function toggleDrawer() {
  drawerOpen = !drawerOpen;
  document.getElementById("drawer").classList.toggle("open", drawerOpen);
  document.getElementById("backdrop").classList.toggle("open", drawerOpen);
}

function toggleAddForm() {
  addFormOpen = !addFormOpen;
  document.getElementById("add-panel").classList.toggle("open", addFormOpen);
  document.getElementById("add-chevron").classList.toggle("open", addFormOpen);
}


// =============================================
// SWITCH USER
// =============================================
function switchUser(key) {
  currentUser = key;
  USER_KEYS.forEach(k => { document.getElementById("btn-" + k).classList.toggle("active", k === key); });
  renderChores();
}


// =============================================
// RANK HELPERS
// =============================================
function getRank(points) {
  for (let i = RANKS.length - 1; i >= 0; i--) { if (points >= RANKS[i].minPoints) return RANKS[i]; }
  return RANKS[0];
}


// =============================================
// UPDATE HERO
// =============================================
function updateHero() {
  let u         = userData[currentUser];
  let rank      = getRank(u.totalPoints);
  let rankIndex = RANKS.indexOf(rank);

  document.getElementById("hero-user-name").textContent = USER_NAMES[currentUser];
  document.getElementById("rank-name").textContent      = rank.name;
  document.getElementById("rank-icon").innerHTML        = rank.icon;
  document.getElementById("drawer-title").textContent   = USER_NAMES[currentUser] + "'s Chores";

  let svg = document.querySelector(".hero-icon svg");
  if (svg) { svg.style.color = rank.iconColor; svg.style.filter = `drop-shadow(0 0 14px ${rank.iconColor}55)`; }

  document.querySelector(".hero").style.background = rank.heroBg;
  document.getElementById("total-points").textContent   = u.totalPoints.toLocaleString();
  document.getElementById("monthly-points").textContent = u.monthlyPoints.toLocaleString();
  document.getElementById("monthly-month").textContent  = now.toLocaleString("default", { month:"long", year:"numeric" });

  let fill      = document.getElementById("rank-progress-fill");
  let label     = document.getElementById("rank-next");
  let isMaxRank = rankIndex === RANKS.length - 1;
  if (isMaxRank) {
    fill.style.width = "100%"; label.textContent = "max rank";
  } else {
    let next    = RANKS[rankIndex + 1];
    let percent = Math.min(100, Math.round(((u.totalPoints - rank.minPoints) / (next.minPoints - rank.minPoints)) * 100));
    fill.style.width  = percent + "%";
    label.textContent = (next.minPoints - u.totalPoints) + " pts to " + next.name;
  }

  let streakEl = document.getElementById("streak-display");
  if (streakEl) {
    let s = u.streak || 0;
    if (s >= 1) { streakEl.textContent = "🔥 " + s + " day streak" + (s === 1 ? " — keep it going!" : "!"); streakEl.style.display = "block"; }
    else        { streakEl.style.display = "none"; }
  }

  const MONTHLY_GOAL = 50;
  let goalFill  = document.getElementById("goal-fill");
  let goalLabel = document.getElementById("goal-label");
  if (goalFill && goalLabel) {
    let reached = u.monthlyPoints >= MONTHLY_GOAL;
    goalFill.style.width      = Math.min(100, Math.round((u.monthlyPoints / MONTHLY_GOAL) * 100)) + "%";
    goalFill.style.background = reached ? "#22c55e" : "#2563eb";
    goalLabel.textContent     = reached ? "🎉 Monthly goal reached!" : (MONTHLY_GOAL - u.monthlyPoints) + " pts to reach this month's goal";
    goalLabel.style.color     = reached ? "#22c55e" : "#ffffff";
  }
}


// =============================================
// UPDATE COMPARISON CARDS
// =============================================
function updateComparison() {
  let maxPts  = userData.maxim.monthlyPoints;
  let mayaPts = userData.maya.monthlyPoints;

  document.getElementById("battle-month").textContent     = now.toLocaleString("default", { month:"long", year:"numeric" });
  document.getElementById("battle-pts-maxim").textContent = maxPts.toLocaleString();
  document.getElementById("battle-pts-maya").textContent  = mayaPts.toLocaleString();

  let higher = Math.max(maxPts, mayaPts);
  document.getElementById("battle-bar-maxim").style.width = (higher > 0 ? Math.round((maxPts  / higher) * 100) : 0) + "%";
  document.getElementById("battle-bar-maya").style.width  = (higher > 0 ? Math.round((mayaPts / higher) * 100) : 0) + "%";

  let maximCol = document.getElementById("battle-col-maxim");
  let mayaCol  = document.getElementById("battle-col-maya");
  maximCol.classList.remove("winning","losing");
  mayaCol.classList.remove("winning","losing");

  let result = document.getElementById("battle-result");
  if      (maxPts === 0 && mayaPts === 0) { result.textContent = "No points yet — get to work!"; result.className = "battle-result tied"; }
  else if (maxPts === mayaPts)            { result.textContent = "Dead even — it's a tie!";       result.className = "battle-result tied"; }
  else if (maxPts > mayaPts)             { maximCol.classList.add("winning"); mayaCol.classList.add("losing");  result.textContent = "Maxim leads by " + (maxPts - mayaPts) + " pts"; result.className = "battle-result leading"; }
  else                                   { mayaCol.classList.add("winning");  maximCol.classList.add("losing"); result.textContent = "Maya leads by "  + (mayaPts - maxPts) + " pts"; result.className = "battle-result leading"; }

  let historyCard = document.getElementById("history-card");
  if (monthlyHistory.length === 0) { historyCard.style.display = "none"; return; }
  historyCard.style.display = "block";
  let content = document.getElementById("history-content");
  content.innerHTML = "";
  monthlyHistory.slice().reverse().forEach(entry => {
    let maximWon = entry.maxim > entry.maya;
    let mayaWon  = entry.maya  > entry.maxim;
    let diff     = Math.abs(entry.maxim - entry.maya);
    let winLine  = maximWon ? "Maxim won by " + diff + " pts" : mayaWon ? "Maya won by " + diff + " pts" : "It was a tie!";
    let div = document.createElement("div");
    div.className = "history-entry";
    div.innerHTML = `<div class="history-entry-month">${entry.month}</div><div class="history-scores"><span class="history-score ${maximWon?'winner':''}">Maxim — ${entry.maxim} pts</span><span class="history-score ${mayaWon?'winner':''}">Maya — ${entry.maya} pts</span></div><div class="history-winner-line">${winLine}</div>`;
    content.appendChild(div);
  });
}


// =============================================
// ADD A CHORE
// =============================================
function addChore() {
  let nameInput   = document.getElementById("chore-name");
  let pointsInput = document.getElementById("chore-points");
  let choreName   = nameInput.value.trim();
  let chorePoints = parseInt(pointsInput.value);
  if (choreName === "")                      { alert("Please enter a chore name."); return; }
  if (isNaN(chorePoints) || chorePoints < 1) { alert("Please enter a valid point value (at least 1)."); return; }
  chores.push({ id: Date.now(), name: choreName, points: chorePoints });
  nameInput.value = ""; pointsInput.value = "";
  saveChores();
}


// =============================================
// TOGGLE A CHORE
// =============================================
function toggleChore(id) {
  let u     = userData[currentUser];
  let chore = chores.find(c => c.id === id);
  if (!chore) return;
  if (u.completedToday.includes(id)) {
    u.completedToday = u.completedToday.filter(x => x !== id);
    u.totalPoints   -= chore.points;
    u.monthlyPoints -= chore.points;
  } else {
    u.completedToday.push(id);
    u.totalPoints   += chore.points;
    u.monthlyPoints += chore.points;
    if (u.lastStreakDate !== today) { u.streak = (u.streak || 0) + 1; u.lastStreakDate = today; }
  }
  saveUserData();
}


// =============================================
// DELETE A CHORE
// =============================================
function deleteChore(id) {
  let chore = chores.find(c => c.id === id);
  if (!chore) return;
  USER_KEYS.forEach(key => {
    let u = userData[key];
    if (u.completedToday.includes(id)) {
      u.completedToday = u.completedToday.filter(x => x !== id);
      u.totalPoints   -= chore.points;
      u.monthlyPoints -= chore.points;
    }
  });
  chores = chores.filter(c => c.id !== id);
  saveChores();
  saveUserData();
}


// =============================================
// RESET EVERYTHING
// =============================================
function resetAll() {
  if (confirm("Reset all chores and reset both Maxim and Maya's points to zero?")) {
    chores = [];
    userData = { maxim: defaultUserData(), maya: defaultUserData() };
    userData.maxim.lastDate = userData.maya.lastDate = today;
    userData.maxim.lastMonth = userData.maya.lastMonth = currentMonth;
    monthlyHistory = [];
    saveChores(); saveUserData(); saveHistory();
  }
}


// =============================================
// RENDER
// =============================================
function renderChores() {
  updateHero();
  updateComparison();
  let u        = userData[currentUser];
  let list     = document.getElementById("chore-list");
  let emptyMsg = document.getElementById("empty-message");
  list.innerHTML = "";
  if (chores.length === 0) { emptyMsg.style.display = "block"; return; }
  emptyMsg.style.display = "none";
  chores.forEach(chore => {
    let isDone = u.completedToday.includes(chore.id);
    let li = document.createElement("li");
    li.className = "chore-item" + (isDone ? " done" : "");
    li.innerHTML = `<input type="checkbox" class="chore-checkbox" ${isDone?"checked":""} onchange="toggleChore(${chore.id})"/><span class="chore-name">${chore.name}</span><span class="chore-points-badge">+${chore.points}</span><button class="btn-delete" onclick="deleteChore(${chore.id})">&#10005;</button>`;
    list.appendChild(li);
  });
}


// =============================================
// INIT
// =============================================
document.getElementById("chore-name").addEventListener("keydown", e => { if (e.key === "Enter") addChore(); });
USER_KEYS.forEach(k => { document.getElementById("btn-" + k).classList.toggle("active", k === currentUser); });
