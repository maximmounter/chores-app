// =============================================
// SCRIPT.JS
// =============================================

// =============================================
// FIREBASE
// =============================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2B1cxH1c6RMN3UVRMvcA0CFR8ED7M44Q",
  authDomain: "maxim-chores-app.firebaseapp.com",
  projectId: "maxim-chores-app",
  storageBucket: "maxim-chores-app.firebasestorage.app",
  messagingSenderId: "276219421960",
  appId: "1:276219421960:web:c1c914cc1947b0bf5ab8bd",
  measurementId: "G-H4NNSBGEC5"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics  = getAnalytics(firebaseApp);





// =============================================
// RANKS
// =============================================
const RANKS = [
  {
    name: "Rookie",
    minPoints: 0,
    heroBg: "#050505",
    iconColor: "#1d4ed8",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round">
      <circle cx="50" cy="50" r="46" stroke-width="1" stroke-dasharray="4 6"/>
      <circle cx="50" cy="50" r="40" stroke-width="1.5"/>
      <line x1="50" y1="10" x2="50" y2="24" stroke-width="2.5"/>
      <line x1="50" y1="76" x2="50" y2="90" stroke-width="2.5"/>
      <line x1="10" y1="50" x2="24" y2="50" stroke-width="2.5"/>
      <line x1="76" y1="50" x2="90" y2="50" stroke-width="2.5"/>
      <line x1="79" y1="21" x2="69" y2="31" stroke-width="1.5"/>
      <line x1="79" y1="79" x2="69" y2="69" stroke-width="1.5"/>
      <line x1="21" y1="79" x2="31" y2="69" stroke-width="1.5"/>
      <line x1="21" y1="21" x2="31" y2="31" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="26" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="12" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none"/>
    </svg>`
  },
  {
    name: "Grinder",
    minPoints: 50,
    heroBg: "#030712",
    iconColor: "#1d4ed8",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="44" stroke-width="1.5"/>
      <line x1="50" y1="6" x2="50" y2="18" stroke-width="2"/>
      <polyline points="18,68 50,36 82,68" stroke-width="6"/>
      <line x1="18" y1="78" x2="82" y2="78" stroke-width="4.5"/>
    </svg>`
  },
  {
    name: "Hustler",
    minPoints: 150,
    heroBg: "#030712",
    iconColor: "#2563eb",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="44" stroke-width="1.5"/>
      <line x1="50" y1="6" x2="50" y2="16" stroke-width="2"/>
      <polyline points="18,58 50,26 82,58" stroke-width="5.5"/>
      <polyline points="18,73 50,41 82,73" stroke-width="5.5"/>
      <line x1="18" y1="82" x2="82" y2="82" stroke-width="4"/>
    </svg>`
  },
  {
    name: "Achiever",
    minPoints: 300,
    heroBg: "#020617",
    iconColor: "#3b82f6",
    icon: `<svg viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polygon
        points="50,10 59.4,37.1 88,37.6 65.2,54.9 73.5,82.4 50,66 26.5,82.4 34.8,54.9 12,37.6 40.6,37.1"
        fill="currentColor" stroke="none"/>
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.6"/>
    </svg>`
  },
  {
    name: "Elite",
    minPoints: 500,
    heroBg: "#020617",
    iconColor: "#60a5fa",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="46" stroke-width="1"/>
      <polygon points="50,12 86,38 72,81 28,81 14,38" stroke-width="2.5"/>
      <polygon points="50,28 71,43 63,68 37,68 29,43" stroke-width="1.5"/>
      <line x1="50" y1="12" x2="50" y2="28"  stroke-width="1" opacity="0.5"/>
      <line x1="86" y1="38" x2="71" y2="43"  stroke-width="1" opacity="0.5"/>
      <line x1="72" y1="81" x2="63" y2="68"  stroke-width="1" opacity="0.5"/>
      <line x1="28" y1="81" x2="37" y2="68"  stroke-width="1" opacity="0.5"/>
      <line x1="14" y1="38" x2="29" y2="43"  stroke-width="1" opacity="0.5"/>
      <circle cx="50" cy="50" r="5.5" fill="currentColor" stroke="none"/>
    </svg>`
  },
  {
    name: "Prodigy",
    minPoints: 800,
    heroBg: "#020617",
    iconColor: "#93c5fd",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" stroke-width="2.5"/>
      <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" stroke-width="1.5"/>
      <line x1="50" y1="6"  x2="50" y2="22" stroke-width="1" opacity="0.6"/>
      <line x1="88" y1="28" x2="74" y2="36" stroke-width="1" opacity="0.6"/>
      <line x1="88" y1="72" x2="74" y2="64" stroke-width="1" opacity="0.6"/>
      <line x1="50" y1="94" x2="50" y2="78" stroke-width="1" opacity="0.6"/>
      <line x1="12" y1="72" x2="26" y2="64" stroke-width="1" opacity="0.6"/>
      <line x1="12" y1="28" x2="26" y2="36" stroke-width="1" opacity="0.6"/>
      <polygon points="50,36 64,50 50,64 36,50" fill="currentColor" stroke="none"/>
    </svg>`
  },
  {
    name: "Legend",
    minPoints: 1200,
    heroBg: "#000000",
    iconColor: "#ffffff",
    icon: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="46" stroke-width="1"/>
      <circle cx="50" cy="50" r="43" stroke-width="0.7" stroke-dasharray="3 5"/>
      <path d="M 14,82 L 14,54 L 30,70 L 50,22 L 70,70 L 86,54 L 86,82 Z" stroke-width="2.5"/>
      <line x1="14" y1="74" x2="86" y2="74" stroke-width="1.5"/>
      <circle cx="50" cy="22" r="5"   fill="currentColor" stroke="none"/>
      <circle cx="14" cy="54" r="3.5" fill="currentColor" stroke="none"/>
      <circle cx="86" cy="54" r="3.5" fill="currentColor" stroke="none"/>
      <circle cx="32" cy="78" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="50" cy="78" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="68" cy="78" r="2.5" fill="currentColor" stroke="none"/>
    </svg>`
  },
];


// =============================================
// USERS
//
// USER_KEYS  — the internal keys used in code and localStorage
// USER_NAMES — the display names shown on screen
//
// userData stores each person's:
//   totalPoints    — all-time points, never reset automatically
//   monthlyPoints  — points earned this month, resets each new month
//   completedToday — array of chore IDs the person has done today
//   lastDate       — the date when we last checked for a daily reset
//   lastMonth      — the month when we last checked for a monthly reset
// =============================================
const USER_KEYS  = ["maxim", "maya"];
const USER_NAMES = { maxim: "Maxim", maya: "Maya" };

// Returns a fresh blank record for a user who has no saved data yet
function defaultUserData() {
  return {
    totalPoints:    0,
    monthlyPoints:  0,
    completedToday: [],   // array of chore IDs
    lastDate:       null,
    lastMonth:      null,
    streak:         0,    // how many days in a row they completed at least one chore
    lastStreakDate: null  // the last date a chore was completed (for streak calc)
  };
}


// =============================================
// LOAD FROM LOCALSTORAGE
// =============================================

// Shared chore definitions (name + point value) — same for both users
let chores = JSON.parse(localStorage.getItem("chores") || "[]");

// Per-user data object — contains a key for each user
let userData = JSON.parse(localStorage.getItem("userData") || "null");

// If no saved data exists yet, create blank records for both users
if (!userData) {
  userData = { maxim: defaultUserData(), maya: defaultUserData() };
}

// If a new user was added later, make sure they have a record too
USER_KEYS.forEach(key => {
  if (!userData[key]) userData[key] = defaultUserData();
});

// Remember which user was last active (default to Maxim)
let currentUser = localStorage.getItem("currentUser") || "maxim";


// =============================================
// DAILY RESET (per user)
// Each user tracks their own lastDate independently.
// When a new day starts for a user, their completedToday is wiped.
// =============================================
let today = new Date().toDateString();
let dailyResetHappened = false;

USER_KEYS.forEach(key => {
  let u = userData[key];
  if (u.lastDate !== today) {
    if (u.lastDate !== null) {
      dailyResetHappened = true;  // Not first-ever load
      // Check streak: did they do any chores yesterday?
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      let yesterdayStr = yesterday.toDateString();
      if (u.lastStreakDate === u.lastDate && u.lastDate === yesterdayStr) {
        // They completed a chore yesterday — streak continues
      } else if (u.lastStreakDate !== u.lastDate) {
        // They didn't complete any chore yesterday — reset streak
        u.streak = 0;
      }
    }
    u.completedToday = [];
    u.lastDate = today;
  }
});


// =============================================
// MONTHLY RESET (per user)
// Format: "YYYY-MM", e.g. "2026-03"
//
// Before wiping points, we save the outgoing month's
// results to history so the "Last Month" card can show them.
// =============================================
let now          = new Date();
let currentMonth = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0");

// prevMonth is whatever month was last saved — used to detect a rollover.
// We use maxim's lastMonth as the shared reference (both users share the calendar).
let prevMonth = userData.maxim.lastMonth;

if (prevMonth && prevMonth !== currentMonth) {
  // A new month just started. Save the outgoing month's data as history
  // before we wipe the monthlyPoints counters.

  // Turn "2026-03" back into a readable label like "March 2026"
  let [yr, mo]   = prevMonth.split("-").map(Number);
  let monthLabel = new Date(yr, mo - 1, 1)
    .toLocaleString("default", { month: "long", year: "numeric" });

  let history = JSON.parse(localStorage.getItem("monthlyHistory") || "[]");

  history.push({
    month: monthLabel,
    maxim: userData.maxim.monthlyPoints,
    maya:  userData.maya.monthlyPoints
  });

  // Keep only the most recent 6 months of history
  if (history.length > 6) history = history.slice(-6);

  localStorage.setItem("monthlyHistory", JSON.stringify(history));
}

// Now reset monthly points for any user whose month has changed
USER_KEYS.forEach(key => {
  let u = userData[key];
  if (u.lastMonth !== currentMonth) {
    u.monthlyPoints = 0;
    u.lastMonth     = currentMonth;
  }
});


// =============================================
// SAVE
// =============================================
function saveData() {
  localStorage.setItem("chores",      JSON.stringify(chores));
  localStorage.setItem("userData",    JSON.stringify(userData));
  localStorage.setItem("currentUser", currentUser);
}

// Save the resets we just applied
saveData();


// =============================================
// DRAWER TOGGLE
// =============================================
let drawerOpen = false;

function toggleDrawer() {
  drawerOpen = !drawerOpen;
  document.getElementById("drawer").classList.toggle("open", drawerOpen);
  document.getElementById("backdrop").classList.toggle("open", drawerOpen);
}


// =============================================
// ADD FORM TOGGLE
// =============================================
let addFormOpen = false;

function toggleAddForm() {
  addFormOpen = !addFormOpen;
  document.getElementById("add-panel").classList.toggle("open", addFormOpen);
  document.getElementById("add-chevron").classList.toggle("open", addFormOpen);
}


// =============================================
// SWITCH USER
// Updates currentUser and re-renders the UI for the new person.
// =============================================
function switchUser(key) {
  currentUser = key;
  localStorage.setItem("currentUser", key);

  // Update the active highlight on both tab buttons
  USER_KEYS.forEach(k => {
    document.getElementById("btn-" + k).classList.toggle("active", k === key);
  });

  renderChores();
}


// =============================================
// RANK HELPERS
// =============================================
function getRank(points) {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (points >= RANKS[i].minPoints) return RANKS[i];
  }
  return RANKS[0];
}


function updateHero() {
  let u     = userData[currentUser];
  let rank  = getRank(u.totalPoints);
  let rankIndex = RANKS.indexOf(rank);

  // User name and rank icon
  document.getElementById("hero-user-name").textContent = USER_NAMES[currentUser];
  document.getElementById("rank-name").textContent      = rank.name;
  document.getElementById("rank-icon").innerHTML        = rank.icon;

  // Drawer title also shows whose chores these are
  document.getElementById("drawer-title").textContent =
    USER_NAMES[currentUser] + "'s Chores";

  // Icon color and glow
  let svg = document.querySelector(".hero-icon svg");
  if (svg) {
    svg.style.color  = rank.iconColor;
    svg.style.filter = `drop-shadow(0 0 14px ${rank.iconColor}55)`;
  }

  // Hero background
  document.querySelector(".hero").style.background = rank.heroBg;

  // Points
  document.getElementById("total-points").textContent   = u.totalPoints.toLocaleString();
  document.getElementById("monthly-points").textContent = u.monthlyPoints.toLocaleString();

  // Month name label
  let monthName = now.toLocaleString("default", { month: "long", year: "numeric" });
  document.getElementById("monthly-month").textContent = monthName;

  // Progress bar (rank)
  let fill      = document.getElementById("rank-progress-fill");
  let label     = document.getElementById("rank-next");
  let isMaxRank = rankIndex === RANKS.length - 1;

  if (isMaxRank) {
    fill.style.width  = "100%";
    label.textContent = "max rank";
  } else {
    let next     = RANKS[rankIndex + 1];
    let progress = u.totalPoints - rank.minPoints;
    let range    = next.minPoints - rank.minPoints;
    let percent  = Math.min(100, Math.round((progress / range) * 100));
    fill.style.width  = percent + "%";
    label.textContent = (next.minPoints - u.totalPoints) + " pts to " + next.name;
  }

  // 🔥 Streak
  let streakEl = document.getElementById("streak-display");
  if (streakEl) {
    let s = u.streak || 0;
    if (s >= 2) {
      streakEl.textContent = "🔥 " + s + " day streak!";
      streakEl.style.display = "block";
    } else if (s === 1) {
      streakEl.textContent = "🔥 1 day streak — keep it going!";
      streakEl.style.display = "block";
    } else {
      streakEl.style.display = "none";
    }
  }

  // 🎯 Monthly goal (50 pts)
  const MONTHLY_GOAL = 50;
  let goalFill  = document.getElementById("goal-fill");
  let goalLabel = document.getElementById("goal-label");
  if (goalFill && goalLabel) {
    let pct     = Math.min(100, Math.round((u.monthlyPoints / MONTHLY_GOAL) * 100));
    let reached = u.monthlyPoints >= MONTHLY_GOAL;
    goalFill.style.width      = pct + "%";
    goalFill.style.background = reached ? "#22c55e" : "#2563eb";
    goalLabel.textContent     = reached
      ? "🎉 Monthly goal reached!"
      : (MONTHLY_GOAL - u.monthlyPoints) + " pts to reach this month's goal";
    goalLabel.style.color     = reached ? "#22c55e" : "#ffffff";
  }

}


// =============================================
// UPDATE COMPARISON CARDS
// Reads both users' monthly points and updates:
//   1. The live "Monthly Battle" card
//   2. The "Last Month" history card (if any history exists)
// =============================================
function updateComparison() {
  let maxPts  = userData.maxim.monthlyPoints;
  let mayaPts = userData.maya.monthlyPoints;

  // -- Battle card header (month label) --
  let monthLabel = now.toLocaleString("default", { month: "long", year: "numeric" });
  document.getElementById("battle-month").textContent = monthLabel;

  // -- Point numbers --
  document.getElementById("battle-pts-maxim").textContent = maxPts.toLocaleString();
  document.getElementById("battle-pts-maya").textContent  = mayaPts.toLocaleString();

  // -- Progress bars --
  // Each bar is a percentage of the higher scorer.
  // If nobody has points yet, both bars stay at 0.
  let higher = Math.max(maxPts, mayaPts);
  let maximPct = higher > 0 ? Math.round((maxPts  / higher) * 100) : 0;
  let mayaPct  = higher > 0 ? Math.round((mayaPts / higher) * 100) : 0;

  document.getElementById("battle-bar-maxim").style.width = maximPct + "%";
  document.getElementById("battle-bar-maya").style.width  = mayaPct  + "%";

  // -- Winning / losing CSS classes --
  let maximCol = document.getElementById("battle-col-maxim");
  let mayaCol  = document.getElementById("battle-col-maya");

  maximCol.classList.remove("winning", "losing");
  mayaCol.classList.remove("winning", "losing");

  // -- Result text --
  let result = document.getElementById("battle-result");

  if (maxPts === 0 && mayaPts === 0) {
    result.textContent  = "No points yet — get to work!";
    result.className    = "battle-result tied";
  } else if (maxPts === mayaPts) {
    result.textContent  = "Dead even — it's a tie!";
    result.className    = "battle-result tied";
  } else if (maxPts > mayaPts) {
    maximCol.classList.add("winning");
    mayaCol.classList.add("losing");
    result.textContent  = "Maxim leads by " + (maxPts - mayaPts) + " pts";
    result.className    = "battle-result leading";
  } else {
    mayaCol.classList.add("winning");
    maximCol.classList.add("losing");
    result.textContent  = "Maya leads by " + (mayaPts - maxPts) + " pts";
    result.className    = "battle-result leading";
  }

  // -- History card --
  // Load saved monthly results and build the history list
  let history     = JSON.parse(localStorage.getItem("monthlyHistory") || "[]");
  let historyCard = document.getElementById("history-card");

  if (history.length === 0) {
    historyCard.style.display = "none";
    return;
  }

  historyCard.style.display = "block";

  // Build entries in reverse order (most recent first)
  let content = document.getElementById("history-content");
  content.innerHTML = "";

  let reversed = history.slice().reverse();  // .slice() copies so we don't change the original

  for (let entry of reversed) {
    let maximWon = entry.maxim > entry.maya;
    let mayaWon  = entry.maya  > entry.maxim;
    let diff     = Math.abs(entry.maxim - entry.maya);

    let winLine;
    if (maximWon)      winLine = "Maxim won by " + diff + " pts";
    else if (mayaWon)  winLine = "Maya won by "  + diff + " pts";
    else               winLine = "It was a tie!";

    let div = document.createElement("div");
    div.className = "history-entry";
    div.innerHTML = `
      <div class="history-entry-month">${entry.month}</div>
      <div class="history-scores">
        <span class="history-score ${maximWon ? 'winner' : ''}">Maxim &mdash; ${entry.maxim} pts</span>
        <span class="history-score ${mayaWon  ? 'winner' : ''}">Maya &mdash; ${entry.maya} pts</span>
      </div>
      <div class="history-winner-line">${winLine}</div>
    `;
    content.appendChild(div);
  }
}


// =============================================
// ADD A CHORE
// Adds to the shared chore list — both users see it.
// =============================================
function addChore() {
  let nameInput   = document.getElementById("chore-name");
  let pointsInput = document.getElementById("chore-points");
  let choreName   = nameInput.value.trim();
  let chorePoints = parseInt(pointsInput.value);

  if (choreName === "") {
    alert("Please enter a chore name.");
    return;
  }
  if (isNaN(chorePoints) || chorePoints < 1) {
    alert("Please enter a valid point value (at least 1).");
    return;
  }

  chores.push({ id: Date.now(), name: choreName, points: chorePoints });

  nameInput.value   = "";
  pointsInput.value = "";

  saveData();
  renderChores();
}


// =============================================
// TOGGLE A CHORE DONE / UNDONE
// Only affects the currently active user's data.
// =============================================
function toggleChore(id) {
  let u     = userData[currentUser];
  let chore = chores.find(c => c.id === id);
  if (!chore) return;

  let alreadyDone = u.completedToday.includes(id);

  if (alreadyDone) {
    u.completedToday  = u.completedToday.filter(x => x !== id);
    u.totalPoints    -= chore.points;
    u.monthlyPoints  -= chore.points;
  } else {
    u.completedToday.push(id);
    u.totalPoints   += chore.points;
    u.monthlyPoints += chore.points;

    // Streak: if this is their first chore today, increment streak
    if (u.lastStreakDate !== today) {
      u.streak = (u.streak || 0) + 1;
      u.lastStreakDate = today;
    }
  }

  saveData();
  renderChores();
}


// =============================================
// DELETE A CHORE
// Removes from the shared list and adjusts points
// for ANY user who had it checked off today.
// =============================================
function deleteChore(id) {
  let chore = chores.find(c => c.id === id);
  if (!chore) return;

  // For each user, if they had this chore done today, deduct their points
  USER_KEYS.forEach(key => {
    let u = userData[key];
    if (u.completedToday.includes(id)) {
      u.completedToday  = u.completedToday.filter(x => x !== id);
      u.totalPoints    -= chore.points;
      u.monthlyPoints  -= chore.points;
    }
  });

  chores = chores.filter(c => c.id !== id);

  saveData();
  renderChores();
}


// =============================================
// RESET EVERYTHING
// Wipes all chores and resets both users' points to 0.
// =============================================
function resetAll() {
  if (confirm("Reset all chores and reset both Maxim and Maya's points to zero?")) {
    chores = [];
    USER_KEYS.forEach(key => {
      userData[key] = defaultUserData();
      userData[key].lastDate  = today;
      userData[key].lastMonth = currentMonth;
    });
    saveData();
    renderChores();
  }
}


// =============================================
// RENDER — Rebuild the chore list and update hero
// =============================================
function renderChores() {
  updateHero();
  updateComparison();

  let u        = userData[currentUser];  // current user's data
  let list     = document.getElementById("chore-list");
  let emptyMsg = document.getElementById("empty-message");

  list.innerHTML = "";

  if (chores.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  // Build a row for each chore, checking if the current user has done it today
  for (let chore of chores) {
    let isDone = u.completedToday.includes(chore.id);

    let li = document.createElement("li");
    li.className = "chore-item" + (isDone ? " done" : "");

    li.innerHTML = `
      <input
        type="checkbox"
        class="chore-checkbox"
        ${isDone ? "checked" : ""}
        onchange="toggleChore(${chore.id})"
      />
      <span class="chore-name">${chore.name}</span>
      <span class="chore-points-badge">+${chore.points}</span>
      <button class="btn-delete" onclick="deleteChore(${chore.id})">&#10005;</button>
    `;

    list.appendChild(li);
  }
}


// =============================================
// ENTER KEY in the chore name field
// =============================================
document.getElementById("chore-name").addEventListener("keydown", e => {
  if (e.key === "Enter") addChore();
});


// =============================================
// INIT — Run on page load
// =============================================

// Set correct active state on the user switcher buttons
USER_KEYS.forEach(k => {
  document.getElementById("btn-" + k).classList.toggle("active", k === currentUser);
});

// Show daily reset notice if applicable
if (dailyResetHappened) {
  let notice = document.getElementById("daily-reset-notice");
  notice.style.display = "block";
  setTimeout(() => { notice.style.display = "none"; }, 4000);
}

renderChores();
