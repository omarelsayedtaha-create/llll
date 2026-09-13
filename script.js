const adhkar = {
  morning: [
    ["آية الكرسي", "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ.", 1],
    ["سورة الإخلاص", "قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.", 3],
    ["سورة الفلق", "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِنْ شَرِّ مَا خَلَقَ، وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.", 3],
    ["سورة الناس", "قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَهِ النَّاسِ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ.", 3],
    ["ذكر الصباح", "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", 1],
    ["سيد الاستغفار", "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.", 1],
    ["الرضا بالله", "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.", 3],
    ["الحفظ من الضرر", "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.", 3],
    ["العفو والعافية", "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ.", 1],
    ["شكر النعمة", "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.", 1],
    ["التسبيح", "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", 100],
    ["التهليل", "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", 10]
  ],
  evening: []
};
adhkar.evening = adhkar.morning.map(([title, text, count]) => [title, text, count]);
adhkar.evening[4] = ["ذكر المساء", "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", 1];

const state = JSON.parse(localStorage.getItem("tasbeeh-adhkar-state") || "null") || {
  counters: { subhanallah: 0, alhamdulillah: 0, allahuakbar: 0, tahlil: 0, istighfar: 0, salawat: 0, specialIstighfar: 0 },
  selectedDhikr: "subhanallah", target: 33, completed: { morning: {}, evening: {} }, dark: false
};
const names = { subhanallah: "سُبْحَانَ اللَّهِ", alhamdulillah: "الْحَمْدُ لِلَّهِ", allahuakbar: "اللَّهُ أَكْبَرُ", tahlil: "لَا إِلَهَ إِلَّا اللَّهُ", istighfar: "أَسْتَغْفِرُ اللَّهَ" };
const toArabic = (number) => Number(number).toLocaleString("ar-EG");
const $ = (selector) => document.querySelector(selector);
const toast = $("#toast");
let activeTab = "morning";
let audioContext;

function save() { localStorage.setItem("tasbeeh-adhkar-state", JSON.stringify(state)); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200); }
function tapFeedback() { if (navigator.vibrate) navigator.vibrate(12); try { audioContext ||= new AudioContext(); const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain(); oscillator.frequency.value = 180; gain.gain.setValueAtTime(0.045, audioContext.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.045); oscillator.connect(gain).connect(audioContext.destination); oscillator.start(); oscillator.stop(audioContext.currentTime + 0.045); } catch { /* الصوت اختياري */ } }
function renderMainCounter() { $("#dhikrSelect").value = state.selectedDhikr; $("#mainCount").textContent = toArabic(state.counters[state.selectedDhikr]); $("#targetValue").textContent = toArabic(state.target); $("#targetToggle").checked = state.target === 100; }
function renderSavedCounts() { $("#savedCountsList").innerHTML = Object.entries(names).map(([key, name]) => `<button class="saved-count ${key === state.selectedDhikr ? "selected" : ""}" data-select="${key}" type="button"><span>${name}</span><b>${toArabic(state.counters[key])}</b></button>`).join(""); document.querySelectorAll("[data-select]").forEach((button) => button.addEventListener("click", () => { state.selectedDhikr = button.dataset.select; save(); renderMainCounter(); renderSavedCounts(); })); }
function renderAdhkar() { const list = adhkar[activeTab]; const completed = state.completed[activeTab]; $("#adhkarCards").innerHTML = list.map(([title, text, target], index) => { const done = Math.min(completed[index] || 0, target); return `<article class="dhikr-card ${done >= target ? "done" : ""}"><div class="card-heading"><span class="card-number">${toArabic(index + 1)}</span><span class="repeat-label">${toArabic(target)} مرات</span></div><h3>${title}</h3><p>${text}</p><div class="card-footer"><button class="dhikr-tap" data-index="${index}" type="button"><span>العدد المتبقي</span><b>${toArabic(target - done)}</b></button><button class="copy-button" data-copy="${text}" type="button">نسخ الذكر</button></div></article>`; }).join(""); $("#progressLabel").textContent = `تقدم أذكار ${activeTab === "morning" ? "الصباح" : "المساء"}`; updateProgress(); document.querySelectorAll(".dhikr-tap").forEach((button) => button.addEventListener("click", () => { const index = Number(button.dataset.index); const target = list[index][2]; state.completed[activeTab][index] = Math.min((state.completed[activeTab][index] || 0) + 1, target); tapFeedback(); save(); renderAdhkar(); if (state.completed[activeTab][index] === target) showToast("أحسنت، اكتمل هذا الذكر"); })); document.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", async () => { try { await navigator.clipboard.writeText(button.dataset.copy); showToast("تم نسخ الذكر"); } catch { showToast("تعذر النسخ، حدّد النص يدويًا"); } })); }
function updateProgress() { const list = adhkar[activeTab]; const completed = list.reduce((sum, [, , target], index) => sum + Math.min(state.completed[activeTab][index] || 0, target), 0); const total = list.reduce((sum, [, , target]) => sum + target, 0); const percent = total ? Math.round((completed / total) * 100) : 0; $("#progressBar").style.width = `${percent}%`; $("#progressPercent").textContent = `${toArabic(percent)}٪`; $("#${activeTab}ProgressText"); $("#morningProgressText").textContent = `${toArabic(getCompleted("morning"))}/${toArabic(getTotal("morning"))}`; $("#eveningProgressText").textContent = `${toArabic(getCompleted("evening"))}/${toArabic(getTotal("evening"))}`; }
function getTotal(tab) { return adhkar[tab].reduce((sum, [, , target]) => sum + target, 0); }
function getCompleted(tab) { return adhkar[tab].reduce((sum, [, , target], index) => sum + Math.min(state.completed[tab][index] || 0, target), 0); }
function updateSpecialCounters() { $("#salawatCount").textContent = toArabic(state.counters.salawat || 0); $("#istighfarCount").textContent = toArabic(state.counters.specialIstighfar || 0); }
function incrementCounter(key) { state.counters[key] = (state.counters[key] || 0) + 1; tapFeedback(); save(); renderMainCounter(); renderSavedCounts(); updateSpecialCounters(); const count = state.counters[key]; if (count === 33 || count === 100) showToast(`ما شاء الله، وصلت إلى ${toArabic(count)}`); }

$("#dhikrSelect").addEventListener("change", (event) => { state.selectedDhikr = event.target.value; save(); renderMainCounter(); renderSavedCounts(); });
$("#targetToggle").addEventListener("change", (event) => { state.target = event.target.checked ? 100 : 33; save(); renderMainCounter(); });
$("#mainTap").addEventListener("click", () => incrementCounter(state.selectedDhikr));
$("#mainReset").addEventListener("click", () => { state.counters[state.selectedDhikr] = 0; save(); renderMainCounter(); renderSavedCounts(); showToast("تم تصفير العداد"); });
document.querySelectorAll("[data-counter]").forEach((button) => button.addEventListener("click", () => incrementCounter(button.dataset.counter === "istighfar" ? "specialIstighfar" : button.dataset.counter)));
document.querySelectorAll("[data-reset]").forEach((button) => button.addEventListener("click", () => { const key = button.dataset.reset === "istighfar" ? "specialIstighfar" : button.dataset.reset; state.counters[key] = 0; save(); updateSpecialCounters(); renderSavedCounts(); showToast("تم تصفير العداد"); }));
document.querySelectorAll(".tab-button").forEach((button) => button.addEventListener("click", () => { activeTab = button.dataset.tab; document.querySelectorAll(".tab-button").forEach((tab) => { tab.classList.toggle("active", tab === button); tab.setAttribute("aria-selected", tab === button); }); renderAdhkar(); }));
$("#themeToggle").addEventListener("click", () => { state.dark = !state.dark; document.body.classList.toggle("dark-mode", state.dark); $("#themeToggle").textContent = state.dark ? "☀" : "☾"; save(); });
$("#resetAll").addEventListener("click", () => { if (!confirm("هل تريد تصفير جميع العدادات والتقدم؟")) return; state.counters = { subhanallah: 0, alhamdulillah: 0, allahuakbar: 0, tahlil: 0, istighfar: 0, salawat: 0, specialIstighfar: 0 }; state.completed = { morning: {}, evening: {} }; save(); renderMainCounter(); renderSavedCounts(); renderAdhkar(); updateSpecialCounters(); showToast("تم تصفير كل البيانات"); });

document.body.classList.toggle("dark-mode", state.dark); $("#themeToggle").textContent = state.dark ? "☀" : "☾"; $("#todayDate").textContent = new Intl.DateTimeFormat("ar-EG", { dateStyle: "full" }).format(new Date()); renderMainCounter(); renderSavedCounts(); renderAdhkar(); updateSpecialCounters();
