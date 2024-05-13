import image1 from "./../Images/burger1.png";
import image2 from "./../Images/burger2.png";
import image3 from "./../Images/burger3.png";
import image4 from "./../Images/pizza1.png";
import image5 from "./../Images/pizza2.png";
import image6 from "./../Images/pizza3.png";
import image7 from "./../Images/pasta1.png";
import image8 from "./../Images/pasta2.png";
import image9 from "./../Images/fries1.png";
import GridCard from "./GridCard";




const Bodycontent = () => {
    return ( 
        <>
        <div className='container-fluid bg-dark py-5'>
                <h1 className="text-white">OUR MENU:</h1>
                <div className='container'>
                    <h2 className='text-white'>Pizza:</h2>
                    <div className='row g-5'>
                        <GridCard img={image4} title='Pizza1' price='559'></GridCard>
                        <GridCard img={image5} title='Pizza2' price='569'></GridCard>
                        <GridCard img={image6} title='Pizza3' price='579'></GridCard>
                    </div>
               </div>        
               <div className='container'>
                    <h2 className='text-white'>Burger:</h2>
                    <div className='row g-5'>
                        <GridCard img={image1} title='Delicious Burgeer' price='59'></GridCard>
                        <GridCard img={image2} title='Tasty Burger' price='69'></GridCard>
                        <GridCard img={image3} title='Tasty Burger2' price='79'></GridCard>
                    </div>
               </div>        
               <div className='container'>
                    <h2 className='text-white'>Pasta:</h2>
                    <div className='row g-5'>
                        <GridCard img={image7} title='Pasta1' price='159'></GridCard>
                        <GridCard img={image8} title='Pasta2' price='169'></GridCard>
                    </div>
               </div> 
               <div className='container'>
                    <h2 className='text-white'>Fries:</h2>
                    <div className='row g-5'>
                        <GridCard img={image9} title='Fries' price='49'></GridCard>
                    </div>
               </div>                
       </div>
       </>
     );
}
 
export default Bodycontent;

