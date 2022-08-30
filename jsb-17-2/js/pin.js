class Pin {
    constructor (element, identify) {
        const parent = element.parentElement;

        this.element = new PincodeInput(".replaceable_pin", {
            count: 4,
            secure: true,
            previewDuration: 600,
            onInput: (value) => {
              this.code = value;
            }
        });
        this.identify = identify;
        this.code = null;
        this.loadCode()

        // this.element.addEventListener("keydown", this.onKeyDownBubbling.bind(this), true);
        // this.element.addEventListener("drop", this.onPasteBubbling.bind(this), true);

        // parent.replaceChild(this.element, element);

        this.fillPinsIfCodeExist();
    }

    loadCode() {
        console.log(this.element);
        const codeString = localStorage.getItem(`code_${this.identify}`); 
        this.code = codeString ? codeString : null;
    }

    saveCode() {
        if (this.code !== null) {
            localStorage.setItem(`code_${this.identify}`, this.code);
        }
    }

    isCodeExist() {
        return Boolean(this.code);
    }

    fillPinsIfCodeExist() {
        if (!this.isCodeExist()) {
            return;
        }
        this.element.value = this.code;
    }

    checkPin() {
        if (!this.isCodeExist()) return false;
        if (this.code.length !== 4) return false;
        return true;
    }
}