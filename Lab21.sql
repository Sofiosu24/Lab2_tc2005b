#Materiales(Clave, Descripción, Costo)
#Proveedores(RFC, RazonSocial)
#Proyectos(Numero,Denominacion)
#Entregan(Clave, RFC, Numero, Fecha, Cantidad)

select sum(e.cantidad) as 'Total Cantidad', sum(m.precio) as 'Total costo'  
from entregan e join materiales m on e.clave = m.clave 
where year(fecha) = 1997;

select razonsocial, count(e.clave) as 'Número de entregas', sum(m.precio) as 'Importe Total'  
from proveedores p join entregan e on p.rfc = e.rfc 
				   join materiales m on e.clave = m.clave 
group by p.rfc 

select m.clave, m.descripcion, sum(e.cantidad), min(e.cantidad), max(e.cantidad), sum(m.precio)  
from materiales m natural join entregan e 
group by m.clave 
having avg(e.cantidad) > 400 

select p.razonsocial,avg(e.cantidad), m.clave, m.descripcion  
from proveedores p natural join entregan e natural join materiales m 
group by m.clave  
having avg(cantidad) < 500

select p.razonsocial,avg(e.cantidad), m.clave, m.descripcion  
from proveedores p natural join entregan e natural join materiales m 
group by m.clave  
having avg(cantidad) < 370 or avg(cantidad) > 450

insert into materiales values
(2010, 'Cemento', 210, 12.5, null),
(2020, 'Grava', 110, 12.5, null),
(2030, 'Piedra', 100, 8, null),
(2040, 'Pintura 100', 250, 14, null),
(2050, 'Pintura XD', 300, 12, null);

select m.clave, m.descripcion 
from materiales m 
where m.clave not in(select e2.clave 
					 from entregan e2)
					 
select p.razonsocial  
from proveedores p natural join proyectos p2 natural join entregan e 
where denominacion = 'Vamos Mexico' and e.clave in(select e2.clave 
											  from proyectos p3 natural join entregan e2 
											  where denominacion = 'Querétaro Limpio')

select m.clave, m.descripcion 
from materiales m 
where m.clave not in(select e2.clave 
					 from entregan e2 natural join proyectos p
					 where denominacion = 'CIT Yucatan')

SELECT RazonSocial, AVG(Cantidad) AS PromedioCantidadEntregada
FROM Proveedores JOIN Entregan USING(RFC)
GROUP BY RFC
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad) 
						FROM Entregan 
						WHERE RFC = 'FFFF800101')

SELECT p.RFC, p.RazonSocial
FROM Proveedores p
JOIN Entregan e ON p.RFC = e.RFC
JOIN Proyectos pr ON e.Numero = pr.Numero
WHERE pr.Denominacion = 'Infonavit Durango'
GROUP BY p.RFC, p.RazonSocial
HAVING SUM(IF(YEAR(e.Fecha) = 2000, e.Cantidad, 0)) > SUM(IF(YEAR(e.Fecha) = 2001, e.Cantidad, 0));
