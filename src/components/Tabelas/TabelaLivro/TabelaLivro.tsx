import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import LivroRequests from '../../../fetch/LivroRequests';

function TabelaLivro() {
  const [livros, setLivros] = useState([]);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const listaDeLivros = await LivroRequests.listarLivros();
        setLivros(listaDeLivros);
      } catch (error) {
        console.error('Erro ao buscar livros: ${error)')
      };
    }
    fetchLivros();
  }, [livros]);

  return (
    <>
      <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
        <Column field="titulo" header="Título" style={{ width: '25%' }}></Column>
        <Column field="autor" header="Autor" style={{ width: '25%' }}></Column>
        <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
        <Column field="isbn" header="ISBN" style={{ width: '25%' }}></Column>
        <Column field="valorAquisicao" header="Valor de Aquisição" style={{ width: '25%' }}></Column>
      </DataTable>
    </>
  );
}

export default TabelaLivro;