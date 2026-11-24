document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    if (!loginBtn) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'loginModal';
    modal.innerHTML = `
        <div class="modal__content">
            <form class="login__form" id="loginForm" action="#" method="post">
                <h1 class="login__title">Вход</h1>
                <input class="login__input" type="text" name="login" placeholder="Логин">
                <input class="login__input" type="password" name="password" placeholder="Пароль">
                <label class="login__remember">
                    <input class="login__remember__checkbox" type="checkbox" name="remember">
                    <p class="login__remember__checkbox__text">Запомнить</p>
                </label>
                <button class="login__button" type="submit"><p class="login__button__text">Войти</p></button>
            </form>
        </div>`;
    document.body.appendChild(modal);

    const loginForm = modal.querySelector('#loginForm');

    const open  = () => { modal.classList.add('active'); loginForm.login.focus(); };
    const close = () => modal.classList.remove('active');

    loginBtn.addEventListener('click', open);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const login = loginForm.login.value.trim();
        const password = loginForm.password.value.trim();
        if (!login || !password) { alert('Заполните логин и пароль'); return; }
        console.log('Логин:', login);
        close();
    });
});
