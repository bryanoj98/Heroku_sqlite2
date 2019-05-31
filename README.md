# El gran supermercado TSK

El cliente de su equipo es El gran supermercado TSK, esta famosa cadena maneja 4 categorías de productos: Lácteos, Embutidos, Granos y Bebidas Alcohólicas. 
El cliente está cansado de llevar todo el registro y control de sus operaciones a mano, es por eso que contrató a su equipo para desarrollar un sistema que le permita registrar y reportar las actividades que tienen que ver con:

* Compras de productos a proveedores
* Ventas de productos a usuarios

# Requerimientos funcionales:

El cliente no tiene preferencia en las tecnologías que su equipo use para solventar sus necesidades, siempre y cuando el sistema cumpla con los siguientes requerimientos:

* El cliente necesita por seguridad que todos sus empleados estén registrados dentro de la solución tecnológica que se proponga.
* El cliente necesita crear nuevas cuentas con los empleados que contrate para sus operaciones.
*  El cliente necesita por seguridad suspender las cuentas de los empleados que dejen de laborar en TSK.
* La solución tecnológica que se plantee debe verificar las credenciales de cada usuario antes de realizar cambios en el inventario.
* El cliente necesita registrar la compra de productos a los proveedores, relacionando por lo menos el código del producto y el número de orden.
* Opcionalmente, es posible que los proveedores también tengan acceso a la plataforma para controlar los pedidos que se les soliciten, esto implica:
    * Una forma de acceder a la plataforma
    * Obtener las órdenes de producto entregadas al supermercado
    * Obtener las órdenes de producto pendientes al supermercado
* El cliente requiere saber qué productos tiene en su almacén, para así poder saber cuando necesita realizar un nuevo pedido a sus proveedores.
* El cliente necesita saber qué órdenes de pedido a proveedores tiene pendientes.
* Opcionalmente, el cliente requiere que en caso de ser necesario modificar una venta, un administrador autorice este cambio.
* El cliente necesita registrar las ventas de los productos, relacionando por lo menos el código del producto y el código de vendedor.
* El cliente requiere generar al final del día un reporte de cierre que le permita saber la cantidad de productos vendidos, su valor, el valor de venta bruta y su utilidad neta.
* El cliente necesita conocer las ventas por empleado para el plan de comisión mensual, la cual se calcula de la siguiente manera:
    * Se le pagará el 1% del total de ventas mensuales  registradas por el empleado. 
* El cliente necesitar manejar la información de los productos vencidos, para así realizar la respectiva solicitud de cambio a sus proveedores.
* Se necesita un informe mensual en el que se muestre:
  * Cantidad de ingresos totales durante el mes en total y por vendedor
  * Cantidad pagada a los proveedores en total y por proveedor
  * Cantidad de productos vendidos en total y por categoría
  * Cantidad de productos vencidos en total y por categoría
  * Utilidades del mes.


# Requerimientos técnicos:

Todo el código creado debe ser subido a la herramienta GitLab.
Las instrucciones para desplegar el proyecto deben estar tambien en el archivo Readme.md en la raiz del repositorio.
La explicación de la solución propuesta debe estar dentro de la carpeta Documentacion del repositorio.
TODO el código fuente (Backend y Frontend) debe estar dentro de la carpeta src del repositorio.
Los archivos de base de datos deben estar dentro de la carpeta Database del repositorio

# Reglas del concurso:

La hora límite de entrega es **1:00 pm del día 31.05.19**
NO está permitido realizar copia o plagio de código.
La solución planteada, ÚNICAMENTE debe hacer uso de tecnologías, herramientas y demás componentes, con licencia **Open Source**.
SOLAMENTE se evaluará la solución entregada a través del repositorio, por lo que sólo se tendrán en cuenta los cambios realizados antes de la hora límite.
