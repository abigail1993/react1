const data = {
       headerTitulo: 'Getting Started',
       headerDescripcion: 'Descripcion',
       mainSectionTitulo: 'Main Section',
       articles: [
         { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
         { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
         { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
       ],
       asideTitulo: 'Links',
       links: [
         { href: '#', texto: 'Link 1'},
         { href: '#', texto: 'Link 2'},
         { href: '#', texto: 'Link 3'},
         { href: '#', texto: 'Link 4'},
         { href: '#', texto: 'Link 5'}
       ],
     };
////////////////////////////////////////////////////////////////////////////////////
 function Header(props){

   return (
     <header>
       <h1>{props.headerTitulo}</h1>
       <h2>{props.headerDescripcion}</h2><br />
       <div>
         <h3>{props.mainSectionTitulo}</h3>
         <articles>
           <p>{data.articles[0].titulo}</p>
           <p>{data.articles[0].descripcion}</p>

           <p>{data.articles[1].titulo}</p>
           <p>{data.articles[1].descripcion}</p>

           <p>{data.articles[2].titulo}</p>
           <p>{data.articles[2].descripcion}</p>
         </articles>
       </div>
       <div>
         <h3>{props.asideTitulo}</h3>
           <aside>
             <a>{data.links[0].href}</a>
             <a>{data.links[0].texto}</a><br/>
             <a>{data.links[1].href}</a>
             <a>{data.links[1].texto}</a><br/>
             <a>{data.links[2].href}</a>
             <a>{data.links[2].texto}</a><br/>
             <a>{data.links[3].href}</a>
             <a>{data.links[3].texto}</a><br/>
             <a>{data.links[4].href}</a>
             <a>{data.links[4].texto}</a>
           </aside>
       </div>
     </header>
   )
 }

     ReactDOM.render(
       <Header
         headerTitulo={data.headerTitulo}
         headerDescripcion={data.headerDescripcion}
         mainSectionTitulo={data.mainSectionTitulo}
         mainSectionArticles={data.articles}
         asideTitulo={data.asideTitulo}
         asideLinks={data.links}
       />,
       document.getElementById('container')
     );
