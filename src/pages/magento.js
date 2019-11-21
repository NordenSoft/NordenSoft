import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
// import BlockContent from '../components/block-content'


import mage1 from '../images/magento/magento1.png';
import mage2 from '../images/magento/magento2.png';
import mage3 from '../images/magento/magento3.png';
import mage4 from '../images/magento/magento4.png';

import magentoLogo from '../images/magento/magento-2-logo.png';
import shopigo3 from '../images/magento/shopigo3-1.png';

const Magento = () => {

    return (
        <Layout>
            <SEO title="Om Os" />
            <div className="py-5">
                <div className="container py-5">
                    {/* Magento Block */}
                    <div id="magento" className="container text-center py-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Hvorfor Magento?</h2>
                                <img src={magentoLogo} alt="Magento" />
                                <p>Designet til Vækst, Bygget til Fleksibilitet</p>
                                <p>Magento er en moderne cloud-handelsplatform med et open source-økosystem.</p>
                                <p>Fleksibel for B2C, B2B og hybridløsninger, strækker Magento sig ud over indkøbskurven for enhver handlende oplevelse, herunder e-mail, mobil, i butik, fragt og markedspladser. Se, hvordan vi kan hjælpe din virksomhed.</p>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-md-4">
                                <div className="col-md-12">
                                    <div className="w-iconbox-icon">
                                        <img width="128" height="95" src={mage1} className="attachment-full size-full img-fluid" alt="" />
                                    </div>
                                    <div className="w-iconbox-meta">
                                        <h5 className="my-4">Transformer Kunde Oplevelsen</h5>
                                        <div className="w-iconbox-text">
                                            <p>Tilbyd en uimodståelig og fejlfri købsoplevelse hos hver eneste kunde med Magento Commerce.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="w-iconbox-icon">
                                        <img width="128" height="95" src={mage3} className="attachment-full size-full img-fluid" alt="" />
                                    </div>
                                    <div className="w-iconbox-meta">
                                        <h5 className="my-4">Online med din hjemmeside på kort tid</h5>
                                        <div className="w-iconbox-text">
                                            <p>Magento er brugervenlig og agil. Med Magento kan din hjemmeside tilpasses dine ønsker. Du bliver Online på kort tid og dermed får skabt ROI hurtigere end nogensinde. Vores erfarne samarbejdspartnere tilbyder skræddersyede grafiske løsninger og har særlige implementerings løsninger for start-up’s og små virksomheder.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={shopigo3} alt="shopigo" width="320" height="557" />
                            </div>
                            <div className="col-md-4">
                                <div className="col-md-12">
                                    <div className="w-iconbox-icon">
                                        <img width="128" height="95" src={mage2} className="attachment-full size-full img-fluid" alt="" />
                                    </div>
                                    <div className="w-iconbox-meta">
                                        <h5 className="my-4">Minimer forretningsomkostninger</h5>
                                        <div className="w-iconbox-text">
                                            <p>Minimer omkostningerne,
                                                følg lagerbeholdningen og salget og automatiser håndteringen af ordremodtagelses aktiviteterne igennem Magentos brugervenlige indstillinger.
                                                De mange timer du sparer ved at automatisere kan du bruge på at optimere din hjemmeside og forretning.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="w-iconbox-icon">
                                        <img width="128" height="95" src={mage4} className="attachment-full size-full img-fluid" alt="" />
                                    </div>
                                    <div className="w-iconbox-meta">
                                        <h5 className="my-4">Vækst igennem nye kunder</h5>
                                        <div className="w-iconbox-text">
                                            <p>Integrer mange shopping oplevelser ved blandt andet at inkludere Amazon og eBay. Du kan styre alt dit lager og salg gennem én enkelt produkt kontrol og distributions system for din hjemmeside.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Magento Block */}
                </div>
            </div>
        </Layout>
    )
}

export default Magento