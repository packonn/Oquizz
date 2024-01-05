class Notification {
    message;
    constructor(message) {
        this.message = message;
        const notif = this.createHtml();
        this.show(notif);
    }
    createHtml() {
        const div = document.createElement('div');
        div.classList.add('notification');
        div.innerText = this.message;
        return div;
    }

    show(notification) {
        document.body.appendChild(notification);
        this.hide();
    }

    hide() {
        setTimeout(() => {
            document.querySelector('.notification').remove();
        }, 3000);
    }
}

new Notification('Compte créé');
