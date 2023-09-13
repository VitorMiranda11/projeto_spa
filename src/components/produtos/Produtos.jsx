import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ListaProdutos } from "./ListaProdutos";
import classes from"./Produtos.module.css"; 

export default function Produtos() {

    return (
        <main>
            <h1>PRODUTOS</h1>
            <div>
                <table className= {classes.tableStyle}>
                    <thead>
                        <tr className={classes.tableHeaderStyle}>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Editar/Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListaProdutos.map((produto, index) => (
                            <tr key={index} className= {classes.tableLineStyle}>
                                <td className={classes.tableDataStyle}> {produto.id}</td>
                                <td className={classes.tableDataStyle}> {produto.nome}</td>
                                <td className={classes.tableDataStyle}> {produto.desc}</td>
                                <td className={classes.tableDataStyle}> {produto.preco}</td>
                                <td className={classes.tableDataStyle}> 
                                    <Link to={`/produtos/editar/${produto.id}`}>
                                        <FaEdit size={24} color="green" />
                                    </Link>
                                    {" | "}
                                    <Link to={`/produtos/excluir/${produto.id}`}>
                                        <FaTrash size={24} color="red" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'><strong>Total de produtos:</strong> {ListaProdutos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}