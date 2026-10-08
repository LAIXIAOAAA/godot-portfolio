/* MIDNIGHT PIXEL WORKS - portfolio data + interactions */
const PROJECTS = [
  {
    id: "parts-hunter", featured: true, status: "done", cats: ["action"],
    name: "零件猎魔人", en: "PARTS DEMON SLAYER", sub: "小镇夜间打工实录",
    tag: "白天摆摊拼武器，夜晚提刀下地牢。昼夜双循环的完整商业级 Demo。",
    desc: "十阶段开发计划全数落地的旗舰工程：标题、经营、战斗、存档一整条闭环，武器只能用怪物掉的零件拼装，跨族混搭还会触发副作用彩蛋。",
    highlights: [
      "昼夜双循环：经营 + 横版动作混合玩法",
      "零件拼装武器系统，跨族混搭带副作用",
      "4 种搞笑怪物专属 AI 与死亡动画（打滑/漏电/撞墙/掉绷带）",
      "摆摊 / 工作台 / 情报 / 图鉴 / 背包五套经营 UI",
      "JSON 全量存档读档，收益跨昼夜保留",
      "程序化合成 BGM 与音效，走路带脚步采样",
      "1280x720 像素管线：pixel snap + Nearest 过滤",
    ],
    stats: ["48 GDScript", "37 场景", "10/10 阶段验收", "0 已知 Bug", "Godot 4.7"],
    cover: { type: "img", src: "assets/hunter_combo.gif" },
    shots: ["assets/shot_hunter_night.png", "assets/shot_hunter_boss.png", "assets/shot_hunter_dash.png", "assets/shot_hunter_walk.png", "assets/shot_hunter_work.png", "assets/shot_hunter_codex.png", "assets/shot_hunter_bag.png", "assets/shot_hunter_title.png"],
    path: "E:\\GODOT project\\猎魔实习生",
  },
  {
    id: "darklike", featured: true, status: "wip", cats: ["action"],
    name: "暗黑like", en: "DIABLO LIKE", sub: "俯视角地牢刷宝",
    tag: "旋风斩、火冲、暴击飘字、Boss 咆哮，一路砍下地牢深层。",
    desc: "推进中的俯视角 ARPG：地牢楼层推进、双技能战斗、掉落管线与全套打击音效，素材与主题 UI 已经成建制。",
    highlights: [
      "地牢楼层与楼梯推进（主场景 dungeon.tscn）",
      "普攻 / 旋风斩 / 火焰冲刺技能组",
      "暴击判定与 Boss 战演出",
      "拾取掉落与专属像素 Tileset",
      "9 组战斗音效覆盖每次挥刀",
    ],
    stats: ["26 GDScript", "18 场景", "进行中", "Forward Plus"],
    cover: { type: "img", src: "assets/shot_dark.png" },
    shots: ["assets/shot_dark.png", "assets/shot_dark_arena.png", "assets/shot_dark_bag.png"],
    path: "E:\\GODOT project\\暗黑like",
  },
  {
    id: "skill-arena", featured: true, status: "done", cats: ["action"],
    name: "吸血鬼试炼场", en: "SKILL TEST ARENA", sub: "动作技能组测试场",
    tag: "把打击感拆成数据：三段爪击、蝠群索敌、蓄力血劈、瞬影步、七连仪式大招。",
    desc: "横版 boss 测试场：每个技能都是 VampireSkillDef 资源，startup / active / recovery 时间轴、受击窗、击退、血耗、取消窗全在 Inspector 里调，控制器只跑一份共享时间线。朝向问题在资产管线解决，左右两套 SpriteFrames 同 clip 名。",
    highlights: [
      "5 技能全数据驱动：改 .tres 不改代码",
      "打击感组件：hitstop、震屏、伤害飘字、血渍对象池",
      "血之计量 gate 技能组 + HUD 连段计数",
      "方向翻转走资产管线：moonwalk 类 bug 在设计期消灭",
      "训练假人随便加，R 一键重置校手感",
    ],
    stats: ["25 GDScript", "12 场景", "5 技能", "数据驱动"],
    cover: { type: "img", src: "assets/arena_combo.gif" },
    shots: ["assets/shot_arena_claw.png", "assets/shot_arena_bats.png"],
    path: "E:\\GODOT project\\动作",
  },  {
    id: "bag-hotbar", status: "done", cats: ["system"],
    name: "背包二号机", en: "BAG PART HOTBAR", sub: "数据驱动最小内核",
    tag: "ItemData / Slot / Inventory 三层 Resource 架构，物品 + 快捷栏一次跑通。",
    desc: "把背包拆成最干净的三层：数据、格子、管理器。苹果斧头木头全是 .tres，加新物品零代码。",
    highlights: [
      "Resource 数据驱动物品定义",
      "Inventory 管理器 + 快捷栏联动",
      "玩家拾取交互一体化",
    ],
    stats: ["11 GDScript", "7 场景", "三层架构", ".tres 物品库"],
    cover: { type: "img", src: "assets/shot_bag2.png" },
    path: "E:\\GODOT project\\背包系统2",
  },
  {
    id: "letter-merge", status: "done", cats: ["casual"],
    name: "合成大西瓜 · 字母版", en: "LETTER MERGE", sub: "拼字消除物理手游",
    tag: "掉下去的是字母，消掉的是单词：物理堆叠 + 实时词库检测引擎。",
    desc: "720x1280 竖屏休闲玩法：瞄准投放字母，刚体堆叠稳定后实时扫描成词消除，越过危险线即终局。",
    highlights: [
      "自研单词检测与消除判定",
      "刚体堆叠、危险线与游戏终局",
      "投放预览与手感速度调校",
    ],
    stats: ["竖屏 720x1280", "物理消除", "3 GDScript", "独立词库"],
    cover: { type: "img", src: "assets/shot_xigua.png" },
    path: "E:\\GODOT project\\合成大西瓜",
  },
  {
    id: "mountain-dusk", status: "done", cats: ["casual"],
    name: "Mountain Dusk", en: "SYNTH CITY", sub: "着色器氛围机",
    tag: "零行游戏代码，一张 GDShader 让合成波城市永不落幕地滚下去。",
    desc: "三层视差 + 自动滚动着色器：黄昏城市剪影无限横移，是氛围演示，也是视差管线的模板。",
    highlights: [
      "auto_scroller.gdshader 视差滚动",
      "back / middle / foreground 三层素材管",
      "纯着色器实现，无脚本开销",
    ],
    stats: ["GDShader", "3 层视差", "0 脚本", "无缝循环"],
    cover: { type: "img", src: "assets/shot_city.png" },
    path: "E:\\GODOT project\\SynthCitiesGodot",
  },
];

const SEL = (s) => document.querySelector(s);

/* ---------- covers ---------- */
function badge(p) {
  const map = { done: ["已完成", "done"], wip: ["进行中", "wip"], plan: ["规划中", "plan"] };
  const [txt, cls] = map[p.status];
  return `<span class="status ${cls}">${txt}</span>`;
}
function coverInner(p) {
  const c = p.cover;
  if (c.type === "img") return `<img src="${c.src}" alt="${p.name} 游戏素材" loading="lazy">${badge(p)}`;
  if (c.type === "mosaic") return c.srcs.map((s) => `<img src="${s}" alt="" loading="lazy">`).join("") + badge(p);
  if (c.type === "letters")
    return `<span class="lt b big">瓜</span><span class="lt a">W</span><span class="lt c">A</span><span class="lt d">T</span><span class="lt b">E</span><span class="lt d">R</span><span class="lt a">M</span><span class="lt c">E</span><span class="lt b">L</span><span class="lt d">O</span>${badge(p)}`;
  return badge(p);
}
const coverClass = (p) => "cover" + (p.cover.type === "img" ? "" : " " + p.cover.type);

/* ---------- grid ---------- */
function renderGrid(filter = "all") {
  const items = PROJECTS.filter((p) => filter === "all" || p.cats.includes(filter));
  SEL("#grid").innerHTML = items
    .map(
      (p) => `
    <article class="card reveal${p.featured ? " featured" : ""}" tabindex="0" role="button"
      aria-label="查看 ${p.name} 详情" data-id="${p.id}">
      <div class="${coverClass(p)}">${coverInner(p)}</div>
      <div class="body">
        <h3>${p.name}<small>${p.en}</small></h3>
        <p class="tag">${p.tag}</p>
        <div class="meta">${p.stats.slice(0, 4).map((s) => `<b>${s}</b>`).join("")}</div>
      </div>
    </article>`
    )
    .join("");
  observeReveals();
}

/* ---------- modal ---------- */
function openModal(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  SEL("#modalPanel").innerHTML = `
    <button class="modal-close" data-close aria-label="关闭">ESC</button>
    <div class="modal-cover ${p.cover.type === "img" ? "" : p.cover.type}">${coverInner(p)}</div>
    <div class="modal-body">
      <h3>${p.name}<small>${p.en}</small></h3>
      <p class="modal-sub">${p.sub} · ${p.tag}</p>
      <p>${p.desc}</p>
      <ul class="modal-list">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      <div class="modal-stats">${p.stats.map((s) => `<b>${s}</b>`).join("")}</div>
      ${p.shots && p.shots.length > 1 ? `<div class="modal-gallery">${p.shots.map((s) => `<img src="${s}" alt="${p.name} 实机截图" loading="lazy">`).join("")}</div>` : ""}
      <p class="modal-path">工程路径 ${p.path}</p>
    </div>`;
  SEL("#modal").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  SEL("#modal").hidden = true;
  document.body.style.overflow = "";
}

/* ---------- interactions ---------- */
document.addEventListener("click", (e) => {
  const opener = e.target.closest("[data-open]");
  if (opener) { e.preventDefault(); openModal(opener.dataset.open); return; }
  const card = e.target.closest(".card");
  if (card) return openModal(card.dataset.id);
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if ((e.key === "Enter" || e.key === " ") && document.activeElement && document.activeElement.classList.contains("card")) {
    e.preventDefault();
    openModal(document.activeElement.dataset.id);
  }
});
SEL("#filters").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  renderGrid(chip.dataset.filter);
});

/* ---------- count-up ---------- */
function countUp(el) {
  const target = +el.dataset.count;
  if (!target) { el.textContent = "0"; return; }
  const t0 = performance.now();
  (function tick(now) {
    const k = Math.min(1, (now - t0) / 900);
    el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ---------- reveal on scroll ---------- */
let io;
function observeReveals() {
  io =
    io ||
    new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          if (en.target.classList.contains("stat")) {
            const n = en.target.querySelector("[data-count]");
            if (n) countUp(n);
          }
          io.unobserve(en.target);
        });
      },
      { threshold: 0.12 }
    );
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}

/* ---------- hero parallax ---------- */
const layers = document.querySelectorAll(".hero-layer");
addEventListener("pointermove", (e) => {
  const x = e.clientX / innerWidth - 0.5;
  const y = e.clientY / innerHeight - 0.5;
  layers.forEach((l) => {
    const d = +l.dataset.depth;
    l.style.transform = `translate3d(${-x * d * 100}px, ${-y * d * 40}px, 0)`;
  });
});

/* ---------- konami super mode ---------- */
const CODE = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
let buf = [];
addEventListener("keydown", (e) => {
  buf.push(e.key);
  buf = buf.slice(-10);
  if (buf.join(",") === CODE) document.body.classList.toggle("super");
});

/* ---------- boot ---------- */
document
  .querySelectorAll(".section-head, .spot-text, .spot-art, .ammo, .track li, .about-card, .hero-content, .stat")
  .forEach((el) => el.classList.add("reveal"));
renderGrid();
observeReveals();
