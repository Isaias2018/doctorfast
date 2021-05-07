import { Medicamento } from "./Medicamento";

export class MedicalPrescription {
    public idPrescripcionMedica: number;
    public codigoPrescripcion: string;
    public fechaInicio: string;
    public fechaFin: string;
    public cantidad: number;
    public frecuencia: string;
    public descripcion: string;
    public medicamento: Medicamento;

    public constructor() {
        this.idPrescripcionMedica = 0;
        this.codigoPrescripcion = '';
        this.fechaInicio = '';
        this.fechaFin = '';
        this.cantidad = 0;
        this.frecuencia = '';
        this.descripcion = '';
        this.medicamento = new Medicamento();
    }
}
