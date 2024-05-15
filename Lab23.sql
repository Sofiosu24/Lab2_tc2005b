-- Calcular el costo total del proyecto a elegir 
CREATE PROCEDURE dblab15.CalcularCostoTotalProyecto(
		in NumProyecto int
)
begin
	select sum(m.precio * e.cantidad) 
	from materiales m natural join entregan e 
	where e.numero = NumProyecto;
end

-- Obtener los proveedores principales de un proyecto
CREATE PROCEDURE dblab15.ObtenerProveedoresPrincipales(
		in numProyecto int
)
begin
	select p.rfc, p.razonsocial, sum(e.cantidad) as TotalEntregado
	from Proveedores p natural join entregan e
	where e.numero = numProyecto
	group by p.rfc, p.razonsocial
	order by TotalEntregado desc 
	limit 3;
end 

-- Listar los materiales entregados en el proyecto
CREATE PROCEDURE dblab15.ListarMaterialesEntregadosProyecto(
		in p_numero int
)
begin
	select m.clave, m.descripcion, e.cantidad, e.fecha
	from materiales m natural join entregan e
	where e.numero = p_numero;
end