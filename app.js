const RANK_COLORS = [
  "#0f62fe",
  "#d12771",
  "#16833a",
  "#f97316",
  "#6d3fd9",
  "#0f8b8d",
  "#b91c1c",
  "#8a5a00",
  "#2563eb",
  "#db2777",
  "#16a34a",
  "#9333ea",
  "#ca8a04",
  "#0891b2",
  "#dc2626",
  "#4b5563",
];

const PHASES = [
  { key: "Group", label: "Groepsfase" },
  { key: "Round of 32", label: "Laatste 32" },
  { key: "Round of 16", label: "Achtste finales" },
  { key: "Quarter Finals", label: "Kwartfinales" },
  { key: "Semi Finals", label: "Halve finales" },
  { key: "Final", label: "Finale" },
];

const FLAG_STYLES = {
  "Algerije": "linear-gradient(90deg,#0b8f4d 0 50%,#fff 50%)",
  "Argentinië": "linear-gradient(#74acdf 0 33%,#fff 33% 66%,#74acdf 66%)",
  "Australië": "linear-gradient(135deg,#012169 0 70%,#fff 70% 76%,#e4002b 76%)",
  "België": "linear-gradient(90deg,#000 0 33%,#ffd90c 33% 66%,#ef3340 66%)",
  "Bosnië en Herzegovina": "linear-gradient(135deg,#002f6c 0 58%,#f7d116 58% 72%,#002f6c 72%)",
  "Brazilië": "radial-gradient(circle,#002776 0 27%,#ffdf00 28% 45%,#009b3a 46%)",
  "Canada": "linear-gradient(90deg,#d52b1e 0 25%,#fff 25% 75%,#d52b1e 75%)",
  "Colombia": "linear-gradient(#fcd116 0 50%,#003893 50% 75%,#ce1126 75%)",
  "Curaçao": "linear-gradient(#002b7f 0 70%,#f9e814 70% 78%,#002b7f 78%)",
  "DR Congo": "linear-gradient(135deg,#007fff 0 44%,#f7d618 44% 51%,#ce1021 51% 63%,#f7d618 63% 70%,#007fff 70%)",
  "Duitsland": "linear-gradient(#000 0 33%,#dd0000 33% 66%,#ffce00 66%)",
  "Ecuador": "linear-gradient(#ffdd00 0 50%,#034ea2 50% 75%,#ed1c24 75%)",
  "Egypte": "linear-gradient(#ce1126 0 33%,#fff 33% 66%,#000 66%)",
  "Engeland": "linear-gradient(#fff 0 42%,#cf142b 42% 58%,#fff 58%),linear-gradient(90deg,transparent 0 42%,#cf142b 42% 58%,transparent 58%)",
  "Frankrijk": "linear-gradient(90deg,#0055a4 0 33%,#fff 33% 66%,#ef4135 66%)",
  "Ghana": "linear-gradient(#ce1126 0 33%,#fcd116 33% 66%,#006b3f 66%)",
  "Haïti": "linear-gradient(#00209f 0 50%,#d21034 50%)",
  "Iran": "linear-gradient(#239f40 0 33%,#fff 33% 66%,#da0000 66%)",
  "Irak": "linear-gradient(#ce1126 0 33%,#fff 33% 66%,#000 66%)",
  "Ivoorkust": "linear-gradient(90deg,#f77f00 0 33%,#fff 33% 66%,#009e60 66%)",
  "Japan": "radial-gradient(circle,#bc002d 0 32%,#fff 33%)",
  "Jordanië": "linear-gradient(#000 0 33%,#fff 33% 66%,#007a3d 66%)",
  "Kaapverdië": "linear-gradient(#003893 0 48%,#fff 48% 55%,#cf2027 55% 62%,#fff 62% 69%,#003893 69%)",
  "Kroatië": "linear-gradient(#ff0000 0 33%,#fff 33% 66%,#171796 66%)",
  "Marokko": "linear-gradient(#c1272d,#c1272d)",
  "Mexico": "linear-gradient(90deg,#006847 0 33%,#fff 33% 66%,#ce1126 66%)",
  "Nederland": "linear-gradient(#ae1c28 0 33%,#fff 33% 66%,#21468b 66%)",
  "Nieuw-Zeeland": "linear-gradient(135deg,#00247d 0 72%,#cc142b 72%)",
  "Noorwegen": "linear-gradient(90deg,#ba0c2f 0 35%,#fff 35% 43%,#00205b 43% 57%,#fff 57% 65%,#ba0c2f 65%)",
  "Oezbekistan": "linear-gradient(#1eb7e8 0 32%,#fff 32% 38%,#ce1126 38% 42%,#fff 42% 58%,#ce1126 58% 62%,#fff 62% 68%,#009739 68%)",
  "Oostenrijk": "linear-gradient(#ed2939 0 33%,#fff 33% 66%,#ed2939 66%)",
  "Panama": "linear-gradient(90deg,#fff 0 50%,#d21034 50%),linear-gradient(#fff 0 50%,#005293 50%)",
  "Paraguay": "linear-gradient(#d52b1e 0 33%,#fff 33% 66%,#0038a8 66%)",
  "Portugal": "linear-gradient(90deg,#006600 0 42%,#ff0000 42%)",
  "Qatar": "linear-gradient(90deg,#fff 0 28%,#8a1538 28%)",
  "Saoedi-Arabië": "linear-gradient(#006c35,#006c35)",
  "Schotland": "linear-gradient(135deg,#0065bd 0 42%,#fff 42% 48%,#0065bd 48% 52%,#fff 52% 58%,#0065bd 58%)",
  "Senegal": "linear-gradient(90deg,#00853f 0 33%,#fdef42 33% 66%,#e31b23 66%)",
  "Spanje": "linear-gradient(#aa151b 0 25%,#f1bf00 25% 75%,#aa151b 75%)",
  "Tsjechië": "linear-gradient(#fff 0 50%,#d7141a 50%)",
  "Tunesië": "radial-gradient(circle,#e70013 0 22%,#fff 23% 37%,#e70013 38%)",
  "Turkije": "linear-gradient(#e30a17,#e30a17)",
  "Uruguay": "linear-gradient(#fff 0 12%,#0038a8 12% 24%,#fff 24% 36%,#0038a8 36% 48%,#fff 48% 60%,#0038a8 60% 72%,#fff 72% 84%,#0038a8 84%)",
  "Verenigde Staten": "linear-gradient(#b22234 0 8%,#fff 8% 16%,#b22234 16% 24%,#fff 24% 32%,#b22234 32% 40%,#fff 40% 48%,#b22234 48% 56%,#fff 56% 64%,#b22234 64% 72%,#fff 72% 80%,#b22234 80% 88%,#fff 88%)",
  "Zuid-Afrika": "linear-gradient(135deg,#007a4d 0 35%,#ffb612 35% 42%,#000 42% 52%,#de3831 52% 72%,#002395 72%)",
  "Zuid-Korea": "radial-gradient(circle,#cd2e3a 0 25%,#0047a0 26% 38%,#fff 39%)",
  "Zwitserland": "linear-gradient(#d52b1e,#d52b1e)",
  "Zweden": "linear-gradient(90deg,#006aa7 0 35%,#fecc00 35% 47%,#006aa7 47%),linear-gradient(#006aa7 0 42%,#fecc00 42% 58%,#006aa7 58%)",
};

const state = {
  results: [],
  players: [],
  schedule: [],
  history: [],
  activePhase: "Group",
  playerColors: new Map(),
  pinnedTooltip: null,
};

const dom = {
  leaderboard: document.querySelector("#leaderboard"),
  chart: document.querySelector("#pointsChart"),
  chartEmpty: document.querySelector("#chartEmpty"),
  chartLegend: document.querySelector("#chartLegend"),
  tooltip: document.querySelector("#chartTooltip"),
  hoverCard: null,
  phaseScroller: document.querySelector("#phaseScroller"),
  scheduleList: document.querySelector("#scheduleList"),
  lastUpdated: document.querySelector("#lastUpdated"),
  currentPhaseButton: document.querySelector("#currentPhaseButton"),
};

init();

async function init() {
  try {
    const embedded = window.WK_DASHBOARD_DATA;
    const [results, schedule, history, players] = embedded
      ? [embedded.results || [], embedded.schedule || [], embedded.history || [], embedded.players || []]
      : await Promise.all([
          loadCsv("simulation_results.csv"),
          loadCsv("schedule.csv"),
          loadCsv("player_points_history.csv"),
        ]).then(([csvResults, csvSchedule, csvHistory]) => [csvResults, csvSchedule, csvHistory, []]);

    state.results = normaliseResults(results);
    assignRankColors();
    state.players = players;
    state.schedule = schedule;
    state.history = history;
    state.activePhase = detectCurrentPhase(schedule);

    render();
    window.addEventListener("resize", () => drawChart());
    document.addEventListener("pointerdown", closePinnedTooltipsOnOutsidePress);
  } catch (error) {
    showLoadError(error);
  }
}

function render() {
  const generatedAt = window.WK_DASHBOARD_DATA?.generated_at
    ? new Date(window.WK_DASHBOARD_DATA.generated_at)
    : new Date();
  dom.lastUpdated.textContent = `Laatst bijgewerkt: ${new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(generatedAt)}`;
  renderLeaderboard();
  renderPhaseScroller();
  renderSchedule();
  drawChart();
}

async function loadCsv(path) {
  const response = await fetch(`${path}?v=${Date.now()}`);
  if (!response.ok) {
    throw new Error(`${path} kon niet worden geladen`);
  }
  return parseCsv(await response.text());
}

function parseCsv(text) {
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function normaliseResults(rows) {
  return rows
    .map((row) => ({
      ...row,
      current_points: Number(row.current_points || 0),
      current_goal_difference: Number(row.current_goal_difference || 0),
      current_goals_scored: Number(row.current_goals_scored || 0),
      win_probability: Number(row.win_probability || 0),
      top3_probability: Number(row.top3_probability || 0),
      average_final_position: Number(row.average_final_position || 0),
    }))
    .sort((a, b) =>
      b.current_points - a.current_points ||
      b.current_goal_difference - a.current_goal_difference ||
      b.win_probability - a.win_probability
    );
}

function assignRankColors() {
  state.playerColors = new Map(
    state.results.map((player, index) => [
      player.name,
      RANK_COLORS[index % RANK_COLORS.length],
    ])
  );
}

function renderLeaderboard() {
  dom.leaderboard.innerHTML = state.results
    .map((player, index) => {
      const color = playerColor(player.name);
      return `
        <article class="leader-row">
          <div class="player-avatar" style="background:${color}">${initials(player.name)}</div>
          <div class="player-info">
            <div class="player-name">
              <strong><span class="rank">#${index + 1}</span> ${escapeHtml(player.name)}</strong>
            </div>
            <div class="picked-teams" aria-label="Gekozen landen van ${escapeHtml(player.name)}">
              ${pickedTeamDots(player.name)}
            </div>
          </div>
          ${metric("Punten", player.current_points)}
          ${metric("Doelsaldo", signed(player.current_goal_difference))}
          ${metric("Winkans", formatPercent(player.win_probability))}
        </article>
      `;
    })
    .join("");
  bindPickedTeamTooltips();
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function pickedTeamDots(playerName) {
  const player = state.players.find((entry) => entry.name === playerName);
  if (!player?.teams?.length) return "";
  return player.teams.map((team) => {
    return `
      <span class="picked-team ${flagClass(team.name)} ${team.eliminated ? "eliminated" : ""}"
        style="${flagStyle(team.name)}"
        data-team="${escapeHtml(team.name)}"
        data-points="${team.points}"
        data-goal-difference="${signed(team.goal_difference)}"
        data-goals="${team.goals_scored}"
        data-status="${team.eliminated ? "Uitgeschakeld" : "Actief"}"
        aria-label="${escapeHtml(`${team.name}: ${team.points} punten`)}">
        ${flagFallback(team.name)}
      </span>
    `;
  }).join("");
}

function bindPickedTeamTooltips() {
  if (!dom.hoverCard) {
    dom.hoverCard = document.createElement("div");
    dom.hoverCard.className = "team-hover-card";
    dom.hoverCard.hidden = true;
    document.body.appendChild(dom.hoverCard);
  }
  document.querySelectorAll(".picked-team").forEach((dot) => {
    dot.addEventListener("pointerenter", (event) => {
      if (!state.pinnedTooltip || state.pinnedTooltip === "team") showPickedTeamTooltip(event, dot);
    });
    dot.addEventListener("pointermove", (event) => {
      if (state.pinnedTooltip !== "team") positionPickedTeamTooltip(event);
    });
    dot.addEventListener("pointerleave", () => {
      if (state.pinnedTooltip !== "team") dom.hoverCard.hidden = true;
    });
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      dom.tooltip.hidden = true;
      showPickedTeamTooltip(event, dot);
      state.pinnedTooltip = "team";
    });
  });
}

function showPickedTeamTooltip(event, dot) {
  const statusClass = dot.dataset.status === "Uitgeschakeld" ? "bad" : "good";
  dom.hoverCard.innerHTML = `
    <div class="tooltip-head">
      <span class="tooltip-flag ${flagClass(dot.dataset.team)}" style="${flagStyle(dot.dataset.team)}"></span>
      <div>
        <div class="tooltip-title">${dot.dataset.team}</div>
        <div class="tooltip-subtitle">Bijdrage aan deze speler</div>
      </div>
    </div>
    <div class="tooltip-grid">
      <div><span>Punten</span><strong>${dot.dataset.points}</strong></div>
      <div><span>Saldo</span><strong>${dot.dataset.goalDifference}</strong></div>
      <div><span>Goals</span><strong>${dot.dataset.goals}</strong></div>
    </div>
    <div class="tooltip-status ${statusClass}">${dot.dataset.status}</div>
  `;
  dom.hoverCard.hidden = false;
  positionPickedTeamTooltip(event);
}

function positionPickedTeamTooltip(event) {
  const margin = 14;
  const rect = dom.hoverCard.getBoundingClientRect();
  const left = Math.min(window.innerWidth - rect.width - margin, Math.max(margin, event.clientX + margin));
  const top = Math.min(window.innerHeight - rect.height - margin, Math.max(margin, event.clientY + margin));
  dom.hoverCard.style.left = `${left}px`;
  dom.hoverCard.style.top = `${top}px`;
}

function renderPhaseScroller() {
  dom.phaseScroller.innerHTML = PHASES.map((phase) => `
    <button class="phase-button ${phase.key === state.activePhase ? "active" : ""}" type="button" data-phase="${phase.key}">
      ${phase.label}
    </button>
  `).join("");

  dom.phaseScroller.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activePhase = button.dataset.phase;
      renderPhaseScroller();
      renderSchedule();
      button.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  });

  dom.currentPhaseButton.onclick = () => {
    state.activePhase = detectCurrentPhase(state.schedule);
    renderPhaseScroller();
    renderSchedule();
  };
}

function renderSchedule() {
  const matches = state.schedule
    .filter((match) => match.stage === state.activePhase)
    .sort(compareMatchesByAmsterdamTime);
  if (!matches.length) {
    dom.scheduleList.innerHTML = `<div class="empty-state">Geen wedstrijden gevonden voor deze fase.</div>`;
    return;
  }
  let currentDate = "";
  dom.scheduleList.innerHTML = matches.map((match) => {
    const dateLabel = matchDateHeading(match);
    const heading = dateLabel !== currentDate
      ? `<h3 class="schedule-date">${escapeHtml(dateLabel)}</h3>`
      : "";
    currentDate = dateLabel;
    return `
      ${heading}
      <article class="match-row">
        <div class="match-meta">
          <strong>${escapeHtml(match.stage_label || phaseLabel(match.stage))}</strong>
          <div>${matchDateText(match)}</div>
        </div>
        ${teamBlock(match.home_team, false, match.qualified_team, match)}
        <div class="score">${escapeHtml(match.regular_score || "vs")}</div>
        ${teamBlock(match.away_team, true, match.qualified_team, match)}
        <div class="match-status">
          <span class="status-label ${statusClass(match.status)}">${escapeHtml(match.status || "Onbekend")}</span>
          ${match.qualified_team ? `<div class="team-code">Door: ${escapeHtml(match.qualified_team)}</div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function matchDateText(match) {
  const parts = [];
  const date = amsterdamMatchDate(match);
  if (date) parts.push(formatAmsterdamTime(date));
  if (match.venue) parts.push(match.venue);
  if (parts.length) return parts.join(" | ");
  return match.group ? `Groep ${match.group}` : "Knock-out";
}

function matchDateHeading(match) {
  const date = amsterdamMatchDate(match);
  if (!date) return match.group ? `Groep ${match.group}` : "Nog niet ingepland";
  return new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Amsterdam",
  }).format(date);
}

function compareMatchesByAmsterdamTime(a, b) {
  const aTime = amsterdamMatchDate(a)?.getTime() ?? Number.MAX_SAFE_INTEGER;
  const bTime = amsterdamMatchDate(b)?.getTime() ?? Number.MAX_SAFE_INTEGER;
  return aTime - bTime || Number(a.sequence_number || 0) - Number(b.sequence_number || 0);
}

function amsterdamMatchDate(match) {
  if (!match.match_date || !match.match_time || !match.utc_offset) return null;
  const day = parseDutchMatchDate(match.match_date);
  const offset = formatUtcOffset(match.utc_offset);
  if (!day || !offset) return null;
  return new Date(`${day}T${match.match_time}:00${offset}:00`);
}

function formatUtcOffset(value) {
  const match = String(value).match(/^UTC([+-])(\d{1,2})$/);
  if (!match) return null;
  return `${match[1]}${match[2].padStart(2, "0")}`;
}

function parseDutchMatchDate(value) {
  const months = {
    januari: "01",
    februari: "02",
    maart: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    augustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    december: "12",
  };
  const match = String(value).toLowerCase().match(/^(\d{1,2})\s+([a-z]+)\s+(\d{4})$/);
  if (!match) return null;
  const [, day, month, year] = match;
  return `${year}-${months[month]}-${day.padStart(2, "0")}`;
}

function formatAmsterdamTime(date) {
  return new Intl.DateTimeFormat("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Amsterdam",
  }).format(date);
}

function teamBlock(team, away = false, qualifiedTeam = "", match = {}) {
  const label = scheduleTeamLabel(team, match);
  const avatar = isBracketSlot(team) ? slotAvatar(team) : flagFallback(team);
  const qualified = qualifiedTeam && team === qualifiedTeam;
  return `
    <div class="team ${away ? "away" : ""} ${qualified ? "qualified" : ""}">
      <span class="team-avatar-wrap">
        <span class="team-avatar ${isBracketSlot(team) ? "slot" : flagClass(team)}" style="${flagStyle(team)}">${avatar}</span>
        ${qualified ? `<span class="team-medal" aria-label="Door naar de volgende ronde" title="Door naar de volgende ronde">🏅</span>` : ""}
      </span>
      <span class="team-name">${escapeHtml(label)}</span>
    </div>
  `;
}

function scheduleTeamLabel(team, match) {
  const label = displayTeamName(team);
  if (match.stage === "Group" && match.group && !isBracketSlot(team)) {
    return `${label} (${match.group})`;
  }
  return label;
}

function drawChart() {
  const orderedChartNames = state.results.slice(0, 5).map((player) => player.name);
  const allowed = new Set(orderedChartNames);
  const rows = state.history
    .filter((row) => allowed.has(row.player_name))
    .map((row) => ({
      ...row,
      sequence_number: Number(row.sequence_number || 0),
      points: Number(row.points || 0),
      points_delta: Number(row.points_delta || 0),
    }));

  dom.chartLegend.innerHTML = "";

  if (!rows.length) {
    dom.chart.innerHTML = "";
    dom.chartEmpty.hidden = false;
    dom.chartEmpty.textContent = "Nog geen puntenontwikkeling beschikbaar.";
    return;
  }
  dom.chartEmpty.hidden = true;

  const width = Math.max(320, dom.chart.clientWidth || 800);
  const height = Math.max(300, dom.chart.parentElement?.clientHeight || 360);
  const pad = { top: 16, right: 86, bottom: 42, left: 34 };
  const maxX = Math.max(...rows.map((row) => row.sequence_number), 1);
  const maxY = Math.max(...rows.map((row) => row.points), 1);
  const x = (value) => pad.left + (value / maxX) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - (value / maxY) * (height - pad.top - pad.bottom);
  const byPlayer = groupBy(rows, "player_name");
  const grid = [0, Math.ceil(maxY / 2), maxY];
  const xTicks = makeXTicks(maxX);

  const playerSeries = orderedChartNames
    .map((name) => {
      const values = byPlayer[name] || [];
      values.sort((a, b) => a.sequence_number - b.sequence_number);
      return [name, values];
    })
    .filter(([, values]) => values.length);
  const endpointOffsets = endMarkerOffsets(playerSeries, y);
  const pointOffsets = overlappingPointOffsets(playerSeries);

  const lines = playerSeries.map(([name, values]) => {
    const points = values.map((row) => `${x(row.sequence_number)},${y(row.points) + pointOffset(pointOffsets, name, row)}`).join(" ");
    const last = values[values.length - 1];
    const circles = values.map((row) => `
      <circle cx="${x(row.sequence_number)}" cy="${y(row.points) + pointOffset(pointOffsets, name, row)}" r="4" fill="${playerColor(name)}"
        data-name="${escapeHtml(name)}" data-points="${row.points}" data-sequence="${row.sequence_number}"
        data-home="${escapeHtml(row.home_team || "")}" data-away="${escapeHtml(row.away_team || "")}"
        data-delta="${row.points_delta}" />
    `).join("");
    const markerX = last ? x(last.sequence_number) + 22 + (endpointOffsets.get(name) || 0) : 0;
    const endMarker = last ? `
      <g class="chart-end-marker" transform="translate(${markerX}, ${y(last.points) + pointOffset(pointOffsets, name, last)})"
        data-name="${escapeHtml(name)}" data-points="${last.points}" data-sequence="${last.sequence_number}">
        <circle r="13" fill="${playerColor(name)}" stroke="#fff" stroke-width="3"
          data-name="${escapeHtml(name)}" data-points="${last.points}" data-sequence="${last.sequence_number}"></circle>
        <text y="4" text-anchor="middle" fill="#fff" font-size="8" font-weight="800" pointer-events="none">${escapeHtml(compactInitials(name))}</text>
      </g>
    ` : "";
    return `<polyline points="${points}" fill="none" stroke="${playerColor(name)}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />${circles}${endMarker}`;
  }).join("");

  dom.chart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  dom.chart.innerHTML = `
    ${grid.map((tick) => `
      <line x1="${pad.left}" x2="${width - pad.right}" y1="${y(tick)}" y2="${y(tick)}" stroke="#e3e7e2" />
      <text x="8" y="${y(tick) + 4}" fill="#66706d" font-size="12">${tick}</text>
    `).join("")}
    <line x1="${pad.left}" x2="${width - pad.right}" y1="${height - pad.bottom}" y2="${height - pad.bottom}" stroke="#cfd8d2" />
    ${xTicks.map((tick) => `
      <line x1="${x(tick)}" x2="${x(tick)}" y1="${height - pad.bottom}" y2="${height - pad.bottom + 5}" stroke="#aebbb5" />
      <text x="${x(tick)}" y="${height - 24}" text-anchor="middle" fill="#66706d" font-size="11">${tick}</text>
    `).join("")}
    <text x="${width / 2}" y="${height - 7}" text-anchor="middle" fill="#66706d" font-size="12">Aantal wedstrijden gespeeld</text>
    ${lines}
  `;

  dom.chart.querySelectorAll("circle[data-name], .chart-end-marker[data-name]").forEach((target) => {
    target.addEventListener("pointerenter", (event) => {
      if (!state.pinnedTooltip || state.pinnedTooltip === "chart") showTooltip(event, target);
    });
    target.addEventListener("pointermove", (event) => {
      if (state.pinnedTooltip !== "chart") showTooltip(event, target);
    });
    target.addEventListener("pointerleave", () => {
      if (state.pinnedTooltip !== "chart") dom.tooltip.hidden = true;
    });
    target.addEventListener("click", (event) => {
      event.stopPropagation();
      if (dom.hoverCard) dom.hoverCard.hidden = true;
      showTooltip(event, target);
      state.pinnedTooltip = "chart";
    });
  });
}

function showTooltip(event, target) {
  if (!target.dataset.name) return;
  dom.tooltip.hidden = false;
  const hasMatch = target.dataset.home || target.dataset.away;
  const delta = Number(target.dataset.delta || 0);
  dom.tooltip.innerHTML = hasMatch
    ? `
      <div class="chart-tooltip-title">${escapeHtml(target.dataset.name)}</div>
      <div class="chart-tooltip-score">${target.dataset.points} punten</div>
      <div class="chart-tooltip-detail">
        <span>Wedstrijd ${target.dataset.sequence}</span>
        <strong>${escapeHtml(target.dataset.home)} - ${escapeHtml(target.dataset.away)}</strong>
        <span>levert ${delta} ${delta === 1 ? "punt" : "punten"} op</span>
      </div>
    `
    : `
      <div class="chart-tooltip-title">${escapeHtml(target.dataset.name)}</div>
      <div class="chart-tooltip-score">${target.dataset.points} punten</div>
    `;
  const wrap = dom.chart.getBoundingClientRect();
  dom.tooltip.style.left = `${event.clientX - wrap.left}px`;
  dom.tooltip.style.top = `${event.clientY - wrap.top}px`;
}

function closePinnedTooltipsOnOutsidePress(event) {
  const target = event.target;
  const isPickedTeam = Boolean(target.closest?.(".picked-team"));
  const isTeamTooltip = Boolean(target.closest?.(".team-hover-card"));
  const isChartTarget = Boolean(target.closest?.("#pointsChart circle[data-name], #pointsChart .chart-end-marker[data-name]"));
  const isChartTooltip = Boolean(target.closest?.("#chartTooltip"));
  if (isPickedTeam || isTeamTooltip || isChartTarget || isChartTooltip) return;
  state.pinnedTooltip = null;
  if (dom.hoverCard) dom.hoverCard.hidden = true;
  dom.tooltip.hidden = true;
}

function detectCurrentPhase(schedule) {
  const firstOpen = PHASES.find((phase) =>
    schedule.some((match) => match.stage === phase.key && match.status !== "Gespeeld")
  );
  if (firstOpen) return firstOpen.key;
  return "Final";
}

function phaseLabel(stage) {
  return PHASES.find((phase) => phase.key === stage)?.label || stage;
}

function statusClass(status) {
  if (status === "Gespeeld") return "done";
  if (status === "Override nodig" || status === "Onbekend") return "warning";
  return "";
}

function initials(name) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}.${last}.`.toUpperCase();
}

function playerColor(name) {
  if (state.playerColors.has(name)) return state.playerColors.get(name);
  let hash = 0;
  for (const char of name) hash = char.charCodeAt(0) + ((hash << 5) - hash);
  return `hsl(${Math.abs(hash) % 360} 55% 45%)`;
}

function flagClass(team) {
  return FLAG_STYLES[team] ? "flag-img" : "";
}

function flagStyle(team) {
  const style = FLAG_STYLES[team];
  return style ? `background:${style}` : "";
}

function flagFallback(team) {
  return FLAG_STYLES[team] ? "" : "?";
}

function endMarkerOffsets(playerSeries, yScale) {
  const groups = new Map();
  for (const [name, values] of playerSeries) {
    const last = values[values.length - 1];
    if (!last) continue;
    const key = Math.round(yScale(last.points));
    (groups.get(key) || groups.set(key, []).get(key)).push(name);
  }
  const offsets = new Map();
  for (const names of groups.values()) {
    names.forEach((name, index) => {
      offsets.set(name, index * 24);
    });
  }
  return offsets;
}

function overlappingPointOffsets(playerSeries) {
  const groups = new Map();
  for (const [name, values] of playerSeries) {
    for (const row of values) {
      const signature = `${row.sequence_number}:${row.points}`;
      (groups.get(signature) || groups.set(signature, []).get(signature)).push(name);
    }
  }
  const offsets = new Map();
  for (const [signature, names] of groups.entries()) {
    names.forEach((name, index) => {
      offsets.set(`${name}|${signature}`, (index - (names.length - 1) / 2) * 4);
    });
  }
  return offsets;
}

function pointOffset(offsets, name, row) {
  return offsets.get(`${name}|${row.sequence_number}:${row.points}`) || 0;
}

function compactInitials(name) {
  return initials(name).replaceAll(".", "");
}

function makeXTicks(maxX) {
  if (maxX <= 5) return Array.from({ length: maxX + 1 }, (_, index) => index);
  const step = Math.max(1, Math.ceil(maxX / 5));
  const ticks = [0];
  for (let value = step; value < maxX; value += step) ticks.push(value);
  ticks.push(maxX);
  return ticks;
}

function displayTeamName(team) {
  if (/^[12][A-L]$/.test(team)) {
    return `Nummer ${team[0]} groep ${team[1]}`;
  }
  if (/^3[A-L](\/[A-L])+$/.test(team)) {
    const groups = team.slice(1).split("/");
    return `Beste nummer 3 uit groep ${formatGroupList(groups)}`;
  }
  if (/^W\d+$/.test(team)) {
    return `Winnaar van ${matchReference(team.slice(1))}`;
  }
  if (/^L\d+$/.test(team)) {
    return `Verliezer van ${matchReference(team.slice(1))}`;
  }
  return team;
}

function matchReference(matchId) {
  const match = state.schedule.find((entry) => String(entry.match_id) === String(matchId));
  if (!match) return `wedstrijd ${matchId}`;
  return match.stage_label ? match.stage_label.toLowerCase() : phaseLabel(match.stage).toLowerCase();
}

function formatGroupList(groups) {
  if (groups.length <= 1) return groups[0] || "";
  return `${groups.slice(0, -1).join(", ")} of ${groups.at(-1)}`;
}

function isBracketSlot(value) {
  return /^[12][A-L]$/.test(value) || /^3[A-L](\/[A-L])+$/.test(value) || /^[WL]\d+$/.test(value);
}

function slotAvatar(value) {
  if (/^[12][A-L]$/.test(value)) return value[0];
  if (/^3[A-L](\/[A-L])+$/.test(value)) return "3";
  if (/^W\d+$/.test(value)) return "W";
  if (/^L\d+$/.test(value)) return "L";
  return ".";
}

function formatPercent(value) {
  return `${(Number(value || 0) * 100).toLocaleString("nl-NL", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;
}

function signed(value) {
  const number = Number(value || 0);
  return number > 0 ? `+${number}` : `${number}`;
}

function groupBy(rows, key) {
  return rows.reduce((groups, row) => {
    (groups[row[key]] ||= []).push(row);
    return groups;
  }, {});
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showLoadError(error) {
  dom.lastUpdated.textContent = "Data kon niet worden geladen";
  const fileHint = window.location.protocol === "file:"
    ? "Draai eerst python .\\wk_pool_simulator.py en open daarna dit HTML-bestand opnieuw."
    : "Draai eerst de simulator en vernieuw daarna deze pagina.";
  const message = `
    <div class="empty-state">
      Data kon niet worden geladen. ${fileHint}
    </div>
  `;
  dom.leaderboard.innerHTML = message;
  dom.scheduleList.innerHTML = message;
  dom.chartEmpty.hidden = false;
  dom.chartEmpty.textContent = error.message;
}
