Iniciar o projeto:

- npm i
- npm start

obs: rode o backend e o frontend ao mesmo tempo

configure seu workbench local, criando um database chamado "atividadeab", e então execute o seguinte comando:
```
SELECT
  	COUNT(*) as quantidade_compra,
	SUM(CASE WHEN paginaVersion = 'v1' THEN 1 ELSE 0 END) as quantidade_v1,
	SUM(CASE WHEN paginaVersion = 'v2' THEN 1 ELSE 0 END) as quantidade_v2,
	COUNT(*) as acesso_compra,
	SUM(CASE WHEN variante = 'v1' THEN 1 ELSE 0 END) as acesso_v1,
	SUM(CASE WHEN variante = 'v2' THEN 1 ELSE 0 END) as acesso_v2
FROM atividadeab.compra, atividadeab.acessos;
```