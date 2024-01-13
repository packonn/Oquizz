class Notification {
    message;
    level = 'success';
    timeout = 3000;

    // Exo BONUS : passer un objet litéral de config plutôt que 3 strings
    /**
     *
     * @param {object} config
     */
    constructor(config) {
        this.message = config.message;

        if (config.level) {
            this.level = config.level;
        }
        if (config.timeout) {
            this.timeout = config.timeout;
        }

        const notif = this.createHtml();

        this.show(notif);
    }

    createHtml() {
        const div = document.createElement('div');
        div.classList.add('notification', this.level);
        div.innerText = this.message;

        return div;
    }

    show(notification) {
        document.querySelector('.notifications').appendChild(notification);

        this.hide();
    }

    hide() {
        setTimeout(() => {
            document.querySelector('.notification').remove();
        }, this.timeout);
    }
}

// * Le but : faire apparaitre une notification qui dure x ms
// new Notification('Votre compte a été créé');
const config = {
    message: 'Votre compte a été créé',
    level: 'warning',
    timeout: 5000,
};

new Notification(config);

delete config.level;
config.timeout = 3000;

new Notification(config);

setTimeout(() => {
    config.level = 'danger';

    new Notification(config);
}, 3000);
