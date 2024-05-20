// Função para alternar entre os temas
function toggleTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        document.body.classList.remove('dark-theme'); // Remove a classe dark-theme do body
        localStorage.setItem('theme', 'light'); // Salva o tema claro no armazenamento local
    } else {
        document.body.classList.add('dark-theme'); // Adiciona a classe dark-theme ao body
        localStorage.setItem('theme', 'dark'); // Salva o tema escuro no armazenamento local
    }
}

// Adiciona um ouvinte de evento para o interruptor de tema
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', toggleTheme);

    // Verifica se há um tema previamente salvo no armazenamento local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme(); // Se o tema escuro estiver salvo, aplica-o
        themeSwitch.checked = true; // Marca o interruptor de tema
    }
});
