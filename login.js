document.getElementById('loginForm').addEventListener('submit', async function (event) {  
    event.preventDefault();  

    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  

    // Cargar datos de los usuarios desde data.json  
    const response = await fetch('data.json');  
    const data = await response.json();  

    const user = data.usuarios.find(u => u.username === username && u.password === password);  

    if (user) {  
        alert(`Bienvenido, ${user.username}`);  
        if (user.role === 'administrador') {  
            window.location.href = 'admin.html';  
        } else if (user.role === 'cliente' || user.role === 'invitado') {  
            window.location.href = 'user.html'; // Esta página mostrará los datos del usuario  
        }  
    } else {  
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos';  
    }  
});  