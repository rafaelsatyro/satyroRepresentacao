import React from 'react';
import '../styles/Product.css';
import etanol from '../img/etanol.gif';
import gasolinac from '../img/gasolinacomum.gif';
import gasolinaAditivada from '../img/gasolinaaditivada.gif';
import dieselS10 from '../img/dieselS10.gif';
import dieselS500 from '../img/dieselS500.gif';
import dieselMaritimo from '../img/dieselMaritimo.gif';
import arla from '../img/arla.png';


const Product: React.FC = () => {

    {/* Const's para donwload de PDF's */}
    const etanolPdfPath = '../docs/etanol_pdf';
    const etanolPdfDonwloadName = 'Taurus_Etanol.pdf';

    const gasolinaPdfPath = '../docs/gasolinac.pdf';
    const gasolinaPdfDonwloadName = 'Taurus_Gasolina.pdf';
    
    const gasolinaAditivadaPdfPath = '../docs/gasolinaAditivada.pdf';
    const gasolinaAditivadaPdfDonwloadName = 'Taurus_GasolinaAditivada.pdf';

    const dieselS10PdfPath = '../docs/diesels10.pdf';
    const dieselS10PdfDonwloadName = 'Taurus_DieselS10.pdf';

    const dieselS10AditivadoPdfPath = '../docs/diesels10Aditivado.pdf';
    const dieselS10AditivadoDonwloadName = 'Taurus_DieselS10Aditivado.pdf';

    const dieselS500PdfPath = '../docs/diesels500.pdf';
    const dieselS500DonwloadName = 'Taurus_DieselS500.pdf';

    const dieselS500AditivadoPath = '../docs/diesels500Aditivado.pdf';
    const dieselS500AditivadoDonwloadName = 'Taurus_DieselS500Aditivado.pdf';

    const dieselMaritimoPdfPath = '../docs/dieselMaritimo.pdf';
    const dieselMaritimoDonwloadName = 'Taurus_DieselMaritimo.pdf';

    

  return (
    <div className='main-container-products'>
        <h2 className='products-title'>PRODUTOS E SERVIÇOS</h2>
        
        {/* Container Etanol*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>ETANOL</h2>
                    <p className='left-container-etanol-content'>É mais uma opção de eficiência e confiança dos produtos da marca. Assim como a gasolina e o diesel da linha Taurus, o etanol  garante mais desempenho e proteção para os motores.</p>
                    <div className='fispqs-container'>
                        <p className='fispqs-title'>FISPQS -</p>
                        <a href={etanolPdfPath} download={etanolPdfDonwloadName}> <p className='fisqps-title-2'>Álcool Hidratado</p></a>
                    </div>
                </div>
                <div className='right-product-container'>
                    <img src={etanol} alt="Etanol" className='etanol'/>
                </div>
            </div>
        </div>

        {/* Container Gasolina*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='right-product-container'>
                    <img src={gasolinac} alt="Gasolina Comum" className='etanol'/>
                </div>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>GASOLINA</h2>
                    <p className='left-container-etanol-content'>A gasolina Taurus tem em sua composição 27% de etanol anidro, para aumentar a octanagem da gasolina comum e dispensar a utilização de chumbo que é altamente nocivo ao homem e ao meio ambiente.</p>
                    <div className='fispqs-container'>
                        <p className='fispqs-title'>FISPQS -</p>
                        <a href={gasolinaPdfPath} download={gasolinaPdfDonwloadName}> <p className='fisqps-title-2'>Gasolina C</p></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Container Gasolina Aditivada*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>GASOLINA ADITIVADA</h2>
                    <p className='left-container-etanol-content'>A versão da gasolina aditivada Taurus proporciona um motor livre de resíduos, pois é composta por aditivos lubrificantes e detergentes dispersantes. Isto melhora o sistema de injeção e a queima do combustível.</p>
                    <div className='fispqs-container'>
                        <p className='fispqs-title'>FISPQS -</p>
                        <a href={gasolinaAditivadaPdfPath} download={gasolinaAditivadaPdfDonwloadName}> <p className='fisqps-title-2'>Gasolina Aditivada</p></a>
                    </div>
                </div>
                <div className='right-product-container'>
                    <img src={gasolinaAditivada} alt="Gasolina Aditivada" className='etanol'/>
                </div>
            </div>
        </div>

        {/* Container Diesel S-10*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='right-product-container'>
                    <img src={dieselS10} alt="Diesel S10" className='etanol'/>
                </div>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>DIESEL S-10</h2>
                    <p className='left-container-etanol-content'>Possui um teor muito menor de enxofre, reduz drasticamente as emissões de gases causadores de graves problemas respiratórios. Sua versão aditivada oferece maior rendimento, e vida útil do sistema injetor.</p>
                    <div className='fispqs-container'>
                        <p className='fispqs-title'>FISPQS -</p>
                        <a href={dieselS10PdfPath} download={dieselS10PdfDonwloadName}> <p className='fisqps-title-2'>DIESEL S-10</p></a>
                        <a href={dieselS10AditivadoPdfPath} download={dieselS10AditivadoDonwloadName}><p className='fisqps-title-2'>Diesel S-10 Aditivado</p></a>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Container Diesel S-500*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>DIESEL S-500</h2>
                    <p className='left-container-etanol-content'>Contém maior teor de enxofre. É destinado a veículos mais antigos. Sua versão aditivada garante um maior rendimento do motor, evitando o desperdício.</p>
                    <div className='fispqs-container'>
                        <p className='fispqs-title'>FISPQS -</p>
                        <a href={dieselS500PdfPath} download={dieselS500DonwloadName}><p className='fisqps-title-2'>Diesel S-500/</p></a>
                        <a href={dieselS500AditivadoPath} download={dieselS500AditivadoDonwloadName}><p className='fisqps-title-2'>Diesel S-500 Aditivado</p></a>
                    </div>
                </div>
                <div className='right-product-container'>
                    <img src={dieselS500} alt="Diesel S-500" className='etanol'/>
                </div>
            </div>
        </div>

        {/* Container Diesel Marítimo*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='right-product-container'>
                    <img src={dieselMaritimo} alt="Diesel Marítimo" className='etanol'/>
                </div>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>DIESEL MARÍTIMO</h2>
                    <p className='left-container-etanol-content'>Possui uma fórmula otimizada para embarcações, desenvolvido para quem quer performance, sem deixar de lado o conforto a bordo.</p>
                    <div className='fispqs-container'>
                        <p className='fispqs-title'>FISPQS -</p>
                        <a href={dieselMaritimoPdfPath} download={dieselMaritimoDonwloadName}> <p className='fisqps-title-2'>Diesel Marítimo</p></a>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Container Arla*/}
        <div className='container-etanol'>
            <div className='content-product'>
                <div className='left-product-container'>
                    <h2 className='left-product-title'>ARLA 32</h2>
                    <p className='left-container-etanol-content'>ARLA é um reagente composto por 32,5% de ureia de alta pureza em água desmineralizada, transparente, não inflamável e não tóxico, utilizado juntamente com o sistema de Redução Catalítica Seletiva para reduzir quimicamente a emissão de óxido de nitrogênio nos gases de escape dos veículos movidos a diesel.</p>
                </div>
                <div className='right-product-container'>
                    <img src={arla} alt="Arla" className='arla'/>
                </div>
            </div>
        </div>
        
      
    </div>
  );
};

export default Product;
