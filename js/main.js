
document.addEventListener('DOMContentLoaded', () => {
    // Открытие модального окна
    const popupBackground = document.querySelector('.modal__window');
    const popup = document.querySelector('.modal__window__content');
    const registrationButton = document.querySelector('.registration-btn');
    const formInput = document.querySelectorAll('.form__item__input');
    const lookPasswordBtn = document.querySelector('.btn-look-password');

    // Открытие модального окна
    document.querySelector('.open-btn-popup').addEventListener('click', () => {
        popupBackground.classList.add('open');
        popup.classList.add('open');
    });

    // Закрытие модального окна
    document.querySelector('.modal__window__close').addEventListener("click", () => {
        popupBackground.classList.remove('open');
        popup.classList.remove('open');
        formInput.forEach((element) => {
            element.classList.remove('_error');
            element.value = '';
        })
    });

    // Кнопка "Скрыть/показать пароль" 
    lookPasswordBtn.addEventListener('click', () => {
        const passwordInput = document.querySelector('._password');
        if (passwordInput.getAttribute('type') === 'password') {
            lookPasswordBtn.classList.add('view');
            passwordInput.setAttribute('type', 'text');
        } else {
            lookPasswordBtn.classList.remove('view');
            passwordInput.setAttribute('type', 'password');
        }
    })


    // Валидация формы
    registrationButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Проверка на пустое поле
        for (let i = 0; i < formInput.length; ++i) {
            formInput[i].classList.remove('_error');
            if (formInput[i].value === '') {
                formInput[i].classList.add('_error');
            } else if (formInput[i].classList.contains('_email')) {
                const regularEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                let strEmail = String(formInput[i].value)
                if (regularEmail.test(strEmail) === false) {
                    formInput[i].classList.add('_error');
                }
            } else if (formInput[i].classList.contains('_password')) {
                const regularPassword = /^[a-z\d.,:;*+-/]*$/i;
                let strPassword = String(formInput[i].value)
                if (regularPassword.test(strPassword) === false) {
                    formInput[i].classList.add('_error');
                }
            }
        }
    })
});