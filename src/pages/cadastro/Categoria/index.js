import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChange(param) {
        const { getAttribute, value } = param.target;
        setValue(getAttribute('name'), value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function (infos) {
                infos.preventDefault();
                setCategorias([
                    ...categorias, values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textBox"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <div>
                    <label>Descrição antiga:
                        <textarea type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange} /></label>
                </div>

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">Ir para home</Link>
        </PageDefault>
    )
}

export default CadastroCategoria;