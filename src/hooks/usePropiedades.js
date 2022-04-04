import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades{
        nodes{
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categoria{
            nombre
          }
          agentes{
            nombre
            telefono
            email
          }
          imagen{
            localFile{
              childImageSharp{
                gatsbyImageData(width: 600, height: 400, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  //console.log(datos);
  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agentes: propiedad.agentes,
    precio: propiedad.precio,
    categoria: propiedad.categoria,
  }));

}

export default usePropiedades;