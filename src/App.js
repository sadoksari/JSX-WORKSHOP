import './App.css';
import data from './products.json' ;
import React  from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from "./Name" ;
import Image from "./Image" ;
import Price from "./Price" ;
import Description from './Description';

import { Button , Card } from 'react-bootstrap' ;


class  App extends React.Component {
  constructor (props) {
    super(props) ;
    
   }

handleButton(markk){
  alert( `The product mark is: ${markk}`);

}
  render() {
  
  return (
    <div id="racine">  
       <h1> JSX WORKSHOP </h1>
      <div className="Products">
            
             {data.map((item) => (

                 <div id={item.name} style={{display:'flex' }}>      

                  <Card style={{margin:'15px' , width : '20rem' , height:450}} >
                  
                  <Card.Body>

                    <Image imageUrl={item.src} alt={item.alt}/>                    
                    <Name name={item.name}/>
                    <Price price={item.price}  /> 
                    <Description description={item.description} />
            
                    <Button onClick={() => this.handleButton(`${item.mark}`)} variante="primary" > Clic me </Button>                   

                  </Card.Body>
                  
                </Card>
            </div>

            ))}

      </div>

</div>
  );
 }

}


export default App ;