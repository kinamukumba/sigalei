/* ==========================
   CREATEALERT.JS
   ========================== */

function createAlert(sms, type, icon, duration = 5000) {
    // Criar overlay + loader
    const overlay = document.createElement('div');
    overlay.classList.add('alert-overlay');

    const loader = document.createElement('div');
    loader.classList.add('alert-loader');
    overlay.appendChild(loader);

    document.body.appendChild(overlay);

    // Esperar 1s antes de mostrar o alerta
    setTimeout(() => {
        document.body.removeChild(overlay);

        const div = document.createElement('div')
        const i = document.createElement('i')
        const p = document.createElement('p')

        if (type === 'error') {
            div.style.background = 'rgb(250, 62, 62)'
            icon = 'fa-times-circle'
        }
        if (type === 'success') {
            div.style.background = 'rgb(12, 134, 12)'
            icon = 'fa-check'
        }
        if (type === 'warrir') {
            div.style.background = 'rgb(231, 167, 48)'
            icon = 'fa-exclamation-triangle'
        }

        div.classList.add('alert-message')
        i.classList.add('fa');
        i.classList.add(icon)
        div.append(i)
        div.append(p)
        p.innerText = sms

        document.body.appendChild(div);
        div.classList.add('active')

        setTimeout(() => {
            if (document.body.contains(div)) {
                document.body.removeChild(div);
            }
        }, duration) // <-- tempo configurável
    }, 1000); // tempo fixo do loader (1s)
}

/* ==========================
   ESTILOS DO ALERT + LOADER
   ========================== */

const style = document.createElement("style");
style.innerHTML = `
/* ALERT */
.alert-message {
    position: fixed;
    bottom: 6%;
    left: 1%;
    min-width: 150px;
    width: auto;
    padding: 10px 16px;
    min-height: 50px;
    background-color: transparent;
    color: #ffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 300000;
    opacity: .95;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.3);
    display: none;
    backdrop-filter: blur(20px);
}
.alert-message p {
    font-size: 15px;
    color: #fff;
    margin: 0;
}
.alert-message i {
    font-size: 20px;
}
.alert-message.active {
    display: flex;
    animation: active-alert .5s ease-out;
}
/*.alert-message::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color:#ffffff;
    animation: progress-alert var(--duration, 5s) linear;
}*/
@keyframes active-alert {
    0% { transform: translateX(-120%); opacity: 0; }
    100% { transform: translateX(0%); opacity: 1; }
}
@keyframes progress-alert {
    0% { width: 100%; }
    100% { width: 5%; }
}
@media(max-width: 500px) {
    .alert-message {
        width: 80%;
        top: 5%;
        right: 1%;
    }
}

/* LOADER + OVERLAY */
.alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 400000;
}

.alert-loader {
    width: 60px;
    height: 60px;
    border: 6px solid #ddd;
    border-top: 6px solid #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
