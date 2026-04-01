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

// Заполнение списка
function populateList() {
    let container = document.getElementById('brainrotsList');
    container.innerHTML = '';
    allBrainrots.forEach(br => {
        let div = document.createElement('div');
        div.className = 'checkbox-item';
        let cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.value = br;
        let label = document.createElement('span');
        label.textContent = br;
        div.appendChild(cb);
        div.appendChild(label);
        container.appendChild(div);
    });
}

// Поиск
document.getElementById('searchBrainrots').addEventListener('input', function(e) {
    let search = e.target.value.toLowerCase();
    let items = document.querySelectorAll('.checkbox-item');
    items.forEach(item => {
        let text = item.querySelector('span').textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'flex' : 'none';
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

// Переключение типа скрипта
document.getElementById('scriptType').addEventListener('change', function() {
    let custom = document.getElementById('customScript');
    custom.style.display = this.value === 'custom' ? 'block' : 'none';
});

// Генерация (ТОЛЬКО JSON, БЕЗ СКРИПТА)
document.getElementById('generateBtn').addEventListener('click', function() {
    let robloxNick = document.getElementById('robloxNick').value;
    let robloxId = document.getElementById('robloxId').value;
    let webhookUrl = document.getElementById('webhookUrl').value;
    let scriptType = document.getElementById('scriptType').value;
    let customScript = document.getElementById('customScript').value;
    
    let selected = [];
    document.querySelectorAll('#brainrotsList input:checked').forEach(cb => {
        selected.push(cb.value);
    });
    
    let result = {
        roblox_nick: robloxNick,
        roblox_id: robloxId,
        webhook_url: webhookUrl,
        script_type: scriptType,
        custom_script: scriptType === 'custom' ? customScript : null,
        target_brainrots: selected
    };
    
    document.getElementById('scriptOutput').textContent = JSON.stringify(result, null, 4);
    document.getElementById('output').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'inline-block';
});

// Копирование
document.getElementById('copyBtn').addEventListener('click', function() {
    let text = document.getElementById('scriptOutput').textContent;
    navigator.clipboard.writeText(text);
    alert('Скопировано!');
});

// Запуск
populateList();
