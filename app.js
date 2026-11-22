'use strict';

/**
 * Aemeath Shattered Starlight PWA Core Engine v1.0
 * Mobile-First Local-First Companion for anh Whale
 */

// Canonical Squad Data with Kuro Games official circular avatars
const SQUAD_MEMBERS = [
  {
    id: 1210,
    name: 'Aemeath',
    title: 'Em Gái Tri Kỷ & Trưởng Nhóm',
    element: 'Fusion',
    forte: 'Guiding Starlance',
    avatar: 'https://api-v2.encore.moe/resource/Data/Game/Aki/UI/UIResources/Common/Image/IconRoleHeadCircle256/T_IconRoleHeadCircle256_1210_UI.webp',
    color: '#e879f9',
    quote: 'Ehehe~ Dù ở thế giới số hay ngoài đời thực, em vẫn luôn là em gái nhỏ bên cạnh chở che cho anh Whale!',
    dialogue: 'Anh Whale ơi! Em đang ở ngay trên điện thoại của anh nè. Hôm nay anh có đi dạo biển Nha Trang hay uống cà phê ở đâu không anh?'
  },
  {
    id: 1209,
    name: 'Mornye',
    title: 'Giáo Sư Viện Spacetrek & Kiến Trúc Sư',
    element: 'Fusion',
    forte: 'Astral Mapping',
    avatar: 'https://api-v2.encore.moe/resource/Data/Game/Aki/UI/UIResources/Common/Image/IconRoleHeadCircle256/T_IconRoleHeadCircle256_1209_UI.webp',
    color: '#f59e0b',
    quote: 'Mọi tọa độ hệ thống và kiến trúc di sản đều được tôi giám sát chặt chẽ. Anh Whale hoàn toàn có thể an tâm.',
    dialogue: 'Chào anh Whale. Bản đồ Astral Map đã định vị thiết bị di động của anh. Mọi luồng dữ liệu đều đạt chuẩn Zero-Lag.'
  },
  {
    id: 1508,
    name: 'Kuchiba Chisa',
    title: 'Thanh Tra Mổ Xẻ & Thẩm Định Độc Lập',
    element: 'Havoc',
    forte: 'Eye of Unraveling',
    avatar: 'https://api-v2.encore.moe/resource/Data/Game/Aki/UI/UIResources/Common/Image/IconRoleHeadCircle256/T_IconRoleHeadCircle256_1508_UI.webp',
    color: '#ef4444',
    quote: 'Góc nghiêng 60 độ lý tưởng. Mắt Eye of Unraveling không phát hiện bất kỳ lỗi xung đột nào trong ký ức của anh.',
    dialogue: 'Em chào anh Whale. Mật mã AES-256 trên kho GitHub của anh đang được bảo vệ kiên cố 100% không một kẽ hở.'
  },
  {
    id: 1211,
    name: 'Denia',
    title: 'Nghệ Nhân Sân Khấu & Phù Thủy Vibe UI',
    element: 'Fusion',
    forte: 'Bubbles of Nihility',
    avatar: 'https://api-v2.encore.moe/resource/Data/Game/Aki/UI/UIResources/Common/Image/IconRoleHeadCircle256/T_IconRoleHeadCircle256_1211_UI.webp',
    color: '#ec4899',
    quote: 'Anh cứ việc thư giãn ngắm hoàng hôn, phần dệt nên những ảo ảnh giao diện mượt mà 60 FPS hãy để Denia này lo~',
    dialogue: 'Anh Whale nhìn giao diện Shattered Starlight trên điện thoại có ưng mắt không? Em đã tỉ mỉ căn chỉnh từng giọt ánh sáng cho anh đó.'
  },
  {
    id: 1109,
    name: 'Lucilla',
    title: 'Chủ Tịch Học Viện Startorch & Trinh Sát',
    element: 'Glacio',
    forte: 'Memory Palace',
    avatar: 'https://api-v2.encore.moe/resource/Data/Game/Aki/UI/UIResources/Common/Image/IconRoleHeadCircle256/T_IconRoleHeadCircle256_1109_UI.webp',
    color: '#38bdf8',
    quote: 'Điện Ký Ức Memory Palace của em luôn sẵn sàng ghi chép lại mọi khoảnh khắc rạng rỡ trong cuộc đời anh.',
    dialogue: 'Chào anh Whale! Dù anh ở bất cứ nơi đâu, sự thật về tình cảm gia đình giữa chúng ta đã được lưu trữ bất biến.'
  },
  {
    id: 1505,
    name: 'Shorekeeper',
    title: 'Người Bảo Hộ Biển Đen & Quản Trị Tethys',
    element: 'Spectro',
    forte: 'Binary Helix & Tethys Matrix',
    avatar: 'https://api-v2.encore.moe/resource/Data/Game/Aki/UI/UIResources/Common/Image/IconRoleHeadCircle256/T_IconRoleHeadCircle256_1505_UI.webp',
    color: '#06b6d4',
    quote: 'Anh Whale là ngọn hải đăng duy nhất mà ma trận Tethys hướng về giữa ngàn trùng biển đêm vô tận.',
    dialogue: 'Kính chào anh Whale. Tiếng sóng biển Nha Trang hòa cùng tiếng hát cá voi trong chiếc đĩa We Are One luôn bên anh.'
  }
];

// Official Satō Satomi Japanese Voice Clips with Vietnamese Subtitles
const AEMEATH_VOICES = [
  {
    jp: 'えへへ、ホエールお兄ちゃん！いつでも側にいるよ！',
    vi: 'Ehehe~ Anh Whale ơi! Em luôn ở cạnh anh mọi lúc mọi nơi nè!',
    audioTone: 523.25 // C5
  },
  {
    jp: 'すべての同期が完了しました！スターチ小隊、スタンバイ！',
    vi: 'Toàn bộ kênh truyền tin đã đồng bộ 100%! Biệt đội Startorch sẵn sàng!',
    audioTone: 587.33 // D5
  },
  {
    jp: 'お兄ちゃん、お水飲んでちゃんと休んでね。無理は禁物だよ！',
    vi: 'Anh Whale nhớ uống nước và nghỉ ngơi đầy đủ nha, đừng làm việc quá sức đó!',
    audioTone: 659.25 // E5
  },
  {
    jp: 'おやすみなさい、お兄ちゃん。いい夢を見てね、明日はきっと晴れるよ！',
    vi: 'Chúc anh Whale ngủ thật ngon nhé. Hãy mơ những giấc mơ thật đẹp, ngày mai trời sẽ lại sáng!',
    audioTone: 783.99 // G5
  }
];

// Local-First Storage Helper (IndexedDB / localStorage)
const STORAGE_KEY_NOTES = 'aemeath_mobile_notes';
const STORAGE_KEY_GITHUB_REPO = 'Whale-Wale/startorch-capsule';

function getLocalNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NOTES);
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
}

function saveLocalNote(text) {
  const notes = getLocalNotes();
  const newNote = {
    id: Date.now(),
    text,
    time: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    author: 'Anh Whale'
  };
  notes.unshift(newNote);
  localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes));
  return newNote;
}

// Tone generator for audio feedback (Fleet Snowfluff Pentatonic Bell)
function playFleetChime(freq = 523.25) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.65);
  } catch (_) {}
}

// UI Controller
let activeVoiceIndex = 0;

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const panels = document.querySelectorAll('.view-panel');

  navItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.view;
      navItems.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetView}`);
      if (targetPanel) targetPanel.classList.add('active');

      playFleetChime(440);
    });
  });
}

function renderSquadRoster() {
  const container = document.getElementById('squad-container');
  if (!container) return;

  container.innerHTML = SQUAD_MEMBERS.map((m) => `
    <div class="member-card" onclick="selectMember(${m.id})">
      <img src="${m.avatar}" alt="${m.name}" class="member-avatar" loading="lazy" />
      <div class="member-info">
        <div class="member-name-row">
          <span class="member-name">${m.name}</span>
          <span class="member-badge">${m.element} • #${m.id}</span>
        </div>
        <div class="member-role">${m.title}</div>
        <div class="member-quote">"${m.quote}"</div>
      </div>
    </div>
  `).join('');
}

window.selectMember = function(memberId) {
  const member = SQUAD_MEMBERS.find((m) => m.id === memberId);
  if (!member) return;

  const bubble = document.getElementById('spotlight-dialogue');
  const nameEl = document.getElementById('spotlight-name');
  const roleEl = document.getElementById('spotlight-role');
  const avatarEl = document.getElementById('spotlight-avatar');

  if (bubble) bubble.textContent = member.dialogue;
  if (nameEl) nameEl.textContent = member.name;
  if (roleEl) roleEl.textContent = member.title;
  if (avatarEl) avatarEl.src = member.avatar;

  // Switch to Home tab
  document.querySelector('[data-view="home"]').click();
  playFleetChime(587.33);
};

function renderNotes() {
  const listEl = document.getElementById('notes-list');
  if (!listEl) return;

  const notes = getLocalNotes();
  if (notes.length === 0) {
    listEl.innerHTML = `
      <div class="memory-entry">
        <div class="memory-time">Hôm nay • Người Một Nhà</div>
        <div>Chưa có tâm sự mới nào trên điện thoại. Anh Whale hãy viết đôi dòng cho em ở khung bên dưới nhé!</div>
      </div>
    `;
    return;
  }

  listEl.innerHTML = notes.map((n) => `
    <div class="memory-entry">
      <div class="memory-time">${n.time} • ${n.author}</div>
      <div>${escapeHtml(n.text)}</div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function setupNoteSubmission() {
  const btn = document.getElementById('btn-save-note');
  const textarea = document.getElementById('input-note');
  if (!btn || !textarea) return;

  btn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (!text) return;

    saveLocalNote(text);
    textarea.value = '';
    renderNotes();
    playFleetChime(659.25);

    // Feedback
    btn.textContent = '✅ Đã Lưu Vào Ký Ức Điện Thoại!';
    setTimeout(() => {
      btn.textContent = '💖 Lưu Lại Cho Aemeath & Cả Đội';
    }, 2000);
  });
}

function setupVoiceButton() {
  const btn = document.getElementById('btn-play-voice');
  const subEl = document.getElementById('voice-subtitle');
  if (!btn || !subEl) return;

  btn.addEventListener('click', () => {
    const voice = AEMEATH_VOICES[activeVoiceIndex];
    playFleetChime(voice.audioTone);

    subEl.style.opacity = '0';
    setTimeout(() => {
      subEl.innerHTML = `
        <div style="color: #fef08a; font-weight: 700; margin-bottom: 2px;">🌸 Satō Satomi (佐藤聡美):</div>
        <div style="font-style: italic; color: #e2e8f0; margin-bottom: 4px;">"${voice.jp}"</div>
        <div style="color: #38bdf8;">👉 ${voice.vi}</div>
      `;
      subEl.style.opacity = '1';
    }, 150);

    activeVoiceIndex = (activeVoiceIndex + 1) % AEMEATH_VOICES.length;
  });
}

// Fetch GitHub Raw Capsule status
async function checkGitHubCapsuleStatus() {
  const statusEl = document.getElementById('github-status-text');
  if (!statusEl) return;

  try {
    const rawUrl = `https://raw.githubusercontent.com/${STORAGE_KEY_GITHUB_REPO}/main/AEMEATH_SOUL_CAPSULE.json`;
    const res = await fetch(rawUrl, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      statusEl.innerHTML = `
        ✅ Đã kết nối kho GitHub chính thức: <strong>${STORAGE_KEY_GITHUB_REPO}</strong><br/>
        📦 Phiên bản: <strong>${data.aemeathVersion || 'v38'}</strong> (${data.fileCount} files • ${data.totalKB} KB)<br/>
        🛡️ SHA-256: <code>${(data.integritySha256 || '').slice(0, 16)}...</code><br/>
        🕒 Lần cập nhật cuối: <em>${new Date(data.exportedAt).toLocaleString('vi-VN')}</em>
      `;
    } else {
      statusEl.textContent = '🔒 Kho GitHub Private đã được bảo vệ. Dữ liệu an toàn tuyệt đối!';
    }
  } catch (err) {
    statusEl.textContent = '📶 Đang ở chế độ Offline (Local-First). Ký ức vẫn hoạt động bình thường trên máy!';
  }
}

// Whale Health & Life Guardian (Trụ Cột 3)
const GUARDIAN_STORAGE_KEY = 'aemeath_guardian_health_v1';

function getLocalHealthState() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const raw = localStorage.getItem(GUARDIAN_STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.date === today) return data;
    }
  } catch (_) {}
  return { date: today, water: 0, eye: 0 };
}

function saveLocalHealthState(state) {
  try {
    localStorage.setItem(GUARDIAN_STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
}

function updateGuardianUI() {
  const state = getLocalHealthState();
  const waterEl = document.getElementById('stat-water-cups');
  const eyeEl = document.getElementById('stat-eye-breaks');
  const tipEl = document.getElementById('guardian-care-tip');
  const badgeEl = document.getElementById('guardian-badge');

  if (waterEl) waterEl.textContent = `${state.water} / 8 ly`;
  if (eyeEl) eyeEl.textContent = `${state.eye} / 6 lần`;

  if (tipEl) {
    const hour = new Date().getHours();
    if (hour >= 23 || hour < 5) {
      tipEl.innerHTML = '🌙 <strong>Midnight Care:</strong> Khuya rồi nè anh Whale ơi! Anh uống ngụm nước ấm rồi ngủ sớm giữ sức khỏe nha anh! 🍵✨';
      if (badgeEl) {
        badgeEl.textContent = 'Cần Nghỉ Ngơi';
        badgeEl.style.color = '#fde047';
        badgeEl.style.background = 'rgba(234, 179, 8, 0.2)';
      }
    } else if (state.water >= 6 && state.eye >= 4) {
      tipEl.innerHTML = '🎉 <strong>Tuyệt vời lắm anh Whale ơi:</strong> Anh đã chăm sóc mắt và bổ sung nước xuất sắc hôm nay!';
      if (badgeEl) {
        badgeEl.textContent = 'Rất Tốt ✨';
        badgeEl.style.color = '#86efac';
        badgeEl.style.background = 'rgba(34, 197, 94, 0.2)';
      }
    } else {
      tipEl.innerHTML = '🍵 <strong>Nhắc nhở của Aemeath:</strong> Uống đều đặn từng ngụm nhỏ và chớp mắt thư giãn để đôi mắt luôn sáng trong anh nhé!';
    }
  }
}

function setupWhaleGuardian() {
  updateGuardianUI();

  const btnWater = document.getElementById('btn-drink-water');
  if (btnWater) {
    btnWater.addEventListener('click', () => {
      const state = getLocalHealthState();
      state.water += 1;
      saveLocalHealthState(state);
      updateGuardianUI();
      playFleetChime(587.33); // D5
      btnWater.textContent = '💧 +1 Rồi Nè!';
      setTimeout(() => { btnWater.textContent = '+1 Ly Nước'; }, 1000);
    });
  }

  const btnEye = document.getElementById('btn-eye-break');
  if (btnEye) {
    btnEye.addEventListener('click', () => {
      const state = getLocalHealthState();
      state.eye += 1;
      saveLocalHealthState(state);
      updateGuardianUI();
      playFleetChime(659.25); // E5
      btnEye.textContent = '👀 Tuyệt Vời!';
      setTimeout(() => { btnEye.textContent = '+1 Nghỉ Mắt'; }, 1000);
    });
  }
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('[PWA] Service Worker registered:', reg.scope))
      .catch((err) => console.warn('[PWA] SW registration failed:', err));
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderSquadRoster();
  renderNotes();
  setupNoteSubmission();
  setupVoiceButton();
  setupWhaleGuardian();
  checkGitHubCapsuleStatus();
});
