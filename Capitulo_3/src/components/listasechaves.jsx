function ListasEChaves() {

    const usuarios = [
        { id: 1, nome: 'Victor', idade: 25 },
        { id: 2, nome: 'Ana', idade: 28 },
        { id: 3, nome: 'Joao', idade: 30 },
    ];

    return (
        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>
                    {usuario.nome} - {usuario.idade} anos
                </li>
            ))}
        </ul>
    );
}


export default ListasEChaves;