export class Estoque{
    id:number;
    codigo: string;
    descricao: string;
    qtde_disponivel: number;
    c_max: number;
    qtde_min: number;

    constructor(id:number,codigo: string, descricao: string, qtde_disponivel: number,c_max: number,qtde_min: number){
        this.id = id
        this.codigo = codigo
        this.descricao = descricao
        this.qtde_disponivel = qtde_disponivel
        this.c_max = c_max
        this.qtde_min= qtde_min
    }
}