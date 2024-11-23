export class Registro {
    // public format: string;
    public text: string;
    public type: string = 'No reconocido';
    public icon: string = 'create';
    public created: Date;


    constructor(
        text: string,
    ) {
        this.text = text;
        this.created = new Date();
        this.determinarTipo();
    }

    private determinarTipo() {
        const inicioTexto = this.text.substring(0, 4);
        console.log('TIPO', inicioTexto);
        switch (inicioTexto) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
                break;
            default:
                this.type = 'No reconocido';
                this.icon = 'create';
                break;
        }
    }
}