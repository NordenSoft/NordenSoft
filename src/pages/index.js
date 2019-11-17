import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
// import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import SimpleSlider from '../components/SimpleSlider'

import mage from '../images/logo/mage1.png';
import drupal from '../images/logo/drupal1.png';
import saphybris from '../images/logo/saphybris1.png';
import shopify from '../images/logo/shopify1.png';
import wordpress from '../images/logo/wordpress1.png';

import sneller from '../images/logo/sneller1.png';
import eye from '../images/logo/eye1.png';
import shopig from '../images/logo/shopig1-1.png';
import nude from '../images/logo/nude1-3.png';
import jarritos from '../images/logo/jarritos1-1.png';

import magentoSolitions from '../images/magento-solutions.png';

import magento1 from '../images/magento/magento-1.png';
import magento2 from '../images/magento/magento-2.png';
import magento3 from '../images/magento/magento-3.png';
import magento4 from '../images/magento/magento-4.png';
import magento5 from '../images/magento/magento-5.png';
import magento6 from '../images/magento/magento-6.png';

import mage1 from '../images/magento/magento1.png';
import mage2 from '../images/magento/magento2.png';
import mage3 from '../images/magento/magento3.png';
import mage4 from '../images/magento/magento4.png';

import magentoLogo from '../images/magento/magento-2-logo.png';
import shopigo3 from '../images/magento/shopigo3-1.png';
import magentoecommerce from '../images/magento/magento-e-commerce-4.png';

import Jarritos from '../images/cases/jarritosnl.png';
import Davetcokelbisemyok from '../images/cases/davetcokcom.png';
import BMWShopTurkey from '../images/cases/bmwshop.png';
import shopigo from '../images/cases/shopigo.png';
import snellermedia from '../images/cases/snellermedia.png';
import nudeglass from '../images/cases/nudeglass.png';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {/* <div className="container py-5">
        <h1 hidden>Welcome to {site.title}</h1>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/projects/'
          />
        )}
        {postNodes && (
          <BlogPostPreviewGrid
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/blog/'
          />
        )}
      </div> */}
      <div id="oversigt" className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="pl-5">
              <img src={mage} alt="Magento" />
              <img src={drupal} alt="Drupal" />
              <img src={saphybris} alt="Sap Hybris" />
              <img src={shopify} alt="Shopify" />
              <img src={wordpress} alt="Wordpress" />
            </div>
            <div className="p-5">
              <h1>Tænk stort… Start lille… Gør hurtigt</h1>
              <h5>Gør dine drømme muligt! Være ikke bagud.</h5>
              <h4>Vi udvikler digital strategi der styrker din virksomhed.</h4>
              <p>Vi er et team af højt kvalificerede, erfarende og professionelle mennesker. Vi værdsætter vores ord og fuldføre vores forpligtigelser. Vi levere til tiden og kan vi ikke det så giver vi besked i god tid. Kommunikation, Kvalitet og Engagement er vores kerne værdier.</p>
              <h4>Boost din virksomhed.</h4>
              <p>Vi har teknologiske løsninger for virksomheder i alle størrelser og fra alle brancher. </p>

            </div>
          </div>
          <div className="col-md-4">
            <div className="sliderContainer">
              <div className="sliderFrame"></div>
              {/* <img src={slide3} alt="Slide" /> */}
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
      {/* Kunder Block */}
      <div className="container-fluid kunder-bg py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-5">Kunder</h1>
            <img src={sneller} alt="senller media" width="225" height="54" className="mx-2" />
            <img src={eye} alt="eye connection" width="225" height="54" className="mx-2" />
            <img src={shopig} alt="shopi go" width="143" height="60" className="mx-2" />
            <img src={nude} alt="nude" width="166" height="60" className="mx-2" />
            <img src={jarritos} alt="Jarritos" width="165" height="60" className="mx-2" />
          </div>
        </div>
      </div>
      {/* Kunder Block */}
      {/* Pprojektmetode Block */}
      <div className="container py-5">
        <h1 className="text-center py-3">NORDENSOFT’s Pprojektmetode</h1>
        <div className="row pt-5">
          <div className="col-md-7">
            <img src={magentoSolitions} alt="Magento Solitions" />
          </div>
          <div className="col-md-5 pt-5">
            <p><strong>NORDENSOFT</strong> bruger Modern Engineering &amp; Development ecommerce stack for fleksibilitet og hastigheds orienteret version af magento.It som baner vej for øget online salg, færre købs afbrydelser og flere loyale kunder. Millioner af sku er meget let for os grundet vores erfaring.</p>
          </div>
        </div>
      </div>
      {/* Pprojektmetode Block */}
      {/* Norden 360 */}
      <div className="container-fluid kunder-bg py-5">
        <div className="container text-center py-5">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mb-5">NORDEN’s 360º omnichannel tilgang til din online forretning</h1>
              <h2 className="mb-4">Smart e-Commerce. På alle måder.</h2>
              <h4 className="mb-4">Intet er som e-Commerce. Alle beslut­ninger bag NordenSoft er med til at gøre den unik. Lige fra den måde, den er lavet på, til hvordan vi integrerer anony­mitet og sikkerhed helt fra starten, til vores innovative tilgang til genbrug af komponenterne.</h4>
              <p><strong>NORDENSOFT</strong> yder den bedste omnichannel forretnings features. Få flere kunder, få flere konverteringer og bliv bedre til at holde på kunderne med omnichannel suite. Baseret op årtiers erfaring fra detailhandelen</p>
            </div>
          </div>
        </div>
        <div className="container text-center py-5">
          <div className="row">

            <div className="col-md-4">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={magento1} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Click &amp; Collect</h5>
                <div className="w-iconbox-text">
                  <p>Reducere shipping omkostningerne, svind i forsendelsesproecessen for pakker.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={magento2} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Order From Store</h5>
                <div className="w-iconbox-text">
                  <p>Ingen bekymringer hvis du ikke finder din størrelse af jeans eller t-shirt. Hvis din kunde ønsker det kan de bestille fra din e-commerce inventar med fleksibel leverings muligheder.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={magento3} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Ship From Store</h5>
                <div className="w-iconbox-text">
                  <p>Undgå udgåede vare. Bred produkt sortiment og øget transparent på lagerbeholdning.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={magento4} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Reserver i Forretningen</h5>
                <div className="w-iconbox-text">
                  <p>Hvis kunderne ønsker ”touch & try” før de køber varen. Vores reserver i forretningen hjælper.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={magento5} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Find i Forretningen</h5>
                <div className="w-iconbox-text">
                  <p>Driver flere ”usikre kunder” trafik til forretningen med real-time lagerbeholdning reservation med brugbart forretnings lokalisering.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={magento6} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Retail Pos</h5>
                <div className="w-iconbox-text">
                  <p>Maintain daglig salg I din forretning med vores originale Ipad POS software. Reducere in-store konversion og check-out tid.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Norden 360 */}
      {/* Magento Block */}
      <div id="magento" className="container text-center py-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Hvorfor Magento?</h1>
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
                <img width="128" height="95" src={mage1} className="attachment-full size-full" alt="" />
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
                <img width="128" height="95" src={mage3} className="attachment-full size-full" alt="" />
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
                <img width="128" height="95" src={mage2} className="attachment-full size-full" alt="" />
              </div>
              <div className="w-iconbox-meta">
                <h5 className="my-4">Minimer forretningsomkostninger</h5>
                <div className="w-iconbox-text">
                  <p>Minimer omkostningerne, følg lagerbeholdningen og salget og automatiser håndteringen af ordremodtagelses aktiviteterne igennem Magentos brugervenlige indstillinger.
De mange timer du sparer ved at automatisere kan du bruge på at optimere din hjemmeside og forretning.</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="w-iconbox-icon">
                <img width="128" height="95" src={mage4} className="attachment-full size-full" alt="" />
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
      {/* Fleksibel Block */}
      <div className="container-fluid py-5 fleksibel-bg">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h1>Fleksibel e-handelsplatform</h1>
              <p>Omnichannel er en uendelig udfordring med dine kunders behov. Omnichannel Retail er et kampløb mod dine konkurrenter i det vilde Ocean.</p>
              <p>Omnichannel og Retail teknologi der udvikler sig fra dag til dag. NORDEN tilbyder Fleksibel Forretnings Platform dine behov og morgendagens uforudsete behov. De nye drenge på gaden med Fleksibel Forretnings Platform.</p>
              <p>– Millioner af kunder, tusindvis af ordre time kapacitet<br />
                – Infrastruktur på auto-scale via Cloud<br />
                – High performance orienteret forbedringer<br />
                – AWS, Azure, IBM Cloud klar<br />
                – Fuld in-house udvikliede magento moduler<br />
                – Nem og enkel mulighed for udbygning af nye moduler
            </p>
              <h1>Infrastruktur</h1>
              <p>NORDENSOFT anvender auto-scale opmærksom server infrastruktur. Vi bruger industri standarter, revision og sikkerheds regler i vores projekter. Vores stack er anvendelig til PCI-DSS og GDPR lovgivning.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fleksibel Block */}
      {/* Europa Block */}
      <div className="container-fluid kunder-bg py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 p-5">
              <div className="wpb_wrapper">
                <div className="wpb_text_column ">
                  <div className="wpb_wrapper">
                    <h1 className="py-5">Vi udvider til Europa</h1>
                    <p><strong>Holland, Østrig, Schweiz, Tyskland, Danmark, Sverige, Norge, Tyrkiet</strong></p>
                    <p>E-commerce i Europa er endnu ikke på højde med det Amerikanske, men det er godt på vej. E-commerce omsætningen i Europa lå på 250 mia. Euro i 2017 ( i 2013 var den 131.6 mia.). Vi ser et stort potentiale og vi er på vej ind på markedet nu. </p>
                  </div>
                </div>
                <div className="w-separator size_large">
                </div>
                <div className="g-cols wpb_row type_default valign_top vc_inner ">
                  <div className="vc_col-sm-6 wpb_column vc_column_container">
                    <div className="vc_column-inner"><div className="wpb_wrapper">
                      <div className="w-counter color_primary align_left" data-duration="2000">
                        <div className="w-counter-value">
                          <span className="w-counter-value-part type_text" data-final=""></span>
                          <span className="w-counter-value-part type_number" data-final="62">62</span>
                          <span className="w-counter-value-part type_text" data-final="+">+</span>
                        </div>
                        <h6 className="w-counter-title">Kunde</h6>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="vc_col-sm-6 wpb_column vc_column_container">
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="w-counter color_primary align_left" data-duration="2000">
                          <div className="w-counter-value">
                            <span className="w-counter-value-part type_text" data-final=""></span>
                            <span className="w-counter-value-part type_number" data-final="7">7</span>
                            <span className="w-counter-value-part type_text" data-final="+">+</span>
                          </div>
                          <h6 className="w-counter-title">Vores Europa Marked</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={magentoecommerce} alt="Magento E-Commerce" width="320" height="557" />
            </div>
          </div>
        </div>
      </div>
      {/* Europa Block */}
      {/* Cases Block */}
      <div id="cases" className="container-fluid cases-block py-5">
        <div className="container text-center py-5">
          <div className="row">
            <div className="col-md-12">
              <h1>Cases</h1>
              <p>
                Magento eco-system er hjem for 5 passionerede web designere og udvikler som er fokuserede på at udvikle utrolige ting til vores platform. Fra elegante temaer og praktiske apps til fuld funktionelle e-commerce hjemmesider. Vores design partnere arbejder utrætteligt på at skubbe grænserne for hvad der er muligt med Magento.
            </p>
            </div>
          </div>
          <div className="row py-5 mt-5">
            <div className="col-md-4">
              <img src={Jarritos} className="img-fluid" alt="Jarritos" />
              <h4>
                <a href="http://www.jarritos.nl/" target="_blank" rel="noopener noreferrer" data-slimstat="5">Jarritos.nl</a>
              </h4>
            </div>
            <div className="col-md-4">
              <img src={Davetcokelbisemyok} className="img-fluid" alt="Davetcokelbisemyok" />
              <h4>
                <a href="https://davetcokelbisemyok.com/" target="_blank" rel="noopener noreferrer" data-slimstat="5">Davetcokelbisemyok</a>
              </h4>
            </div>
            <div className="col-md-4">
              <img src={BMWShopTurkey} className="img-fluid" alt="BMW Shop Turkey" />
              <h4>
                <a href="https://www.bmwshoponline.com/" target="_blank" rel="noopener noreferrer" data-slimstat="5">BMW Shop Turkey</a>
              </h4>
            </div>
            <div className="col-md-4">
              <img src={shopigo} className="img-fluid" alt="Shopigo" />
              <h4>
                <a href="https://www.shopigo.com/" target="_blank" rel="noopener noreferrer" data-slimstat="5">Shopigo</a>
              </h4>
            </div>
            <div className="col-md-4">
              <img src={snellermedia} className="img-fluid" alt="Snellermedia" />
              <h4>
                <a href="https://www.snellermedia.nl/" target="_blank" rel="noopener noreferrer" data-slimstat="5">Snellermedia</a>
              </h4>
            </div>
            <div className="col-md-4">
              <img src={nudeglass} className="img-fluid" alt="Nudeglass" />
              <h4>
                <a href="https://www.nudeglass.com/" target="_blank" rel="noopener noreferrer" data-slimstat="5">Nudeglass</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* Cases Block */}
      {/* Service Block */}
      <div id="services" className="container-fluid service-block py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Service ydelser</h1>
              <p>Vi håndtere, udvikler, distribuere, måler og optimere mål orienterede service ydelser.</p>
              <h1>Erfaring</h1>
              <p>Vi designer bruger oplevelser som vil gøre brugen af din kanal let og enkelt.</p>
              <p>Bruger oplevelser er et af vores vigtigste nøgler til succes for vores brand, kampagne og produkt. Under design fasen, vi designer din bruger oplevelse på baggrund af indhentede data fra analytics, kunde feedback, markedsundersøgelser, lokal og global uafhængige undersøgelses reporter, ikke-guidet kunder i din fysiske butik og millioner af data resourser for dit brand.</p>
              <p>Mens vi anvender bruger undersøgelserne, gøre vi med fordel brug af live bruger-test og fokus grupper.</p>
              <p>Vi anvender bruger oplevelses studier som et multikanal case studie ved at se på Internettet, mobil telefoner, sociale netværker, fysiske butikker og alle netværk. Vores strategi team, kreative team og udviklings team arbejder sammen i bruger undersøgelser samlet med det ønskede formål at fuldføre det bedste studie for dit brand.</p>
              <h1>Platforme</h1>
              <p>Vi udvikler, designer og opererer på skalerbar og solid teknologisk platform.</p>
              <p>Vi udvikler en stærk platform til at repræsentere din brand i en verden, hvor den teknologiske udvikling og muligheden for at være online på forskelllige måder udvikles næsten hverdag.</p>
              <p>Vi udvikler Omni-channel e-commerce hjemmesider, loyalitet systemer, mobile applikationer, hjemmesider, cms systemer tilpasset dine specifikationer, strategi og markedsføringskampagner af dine brands.</p>
              <p>Vi udvikler skalerbar platformer som kan imødekomme din stigende kundekreds. Når vi skønner at der på daglig plan er én million smartphone brugere som er koblet til et online netværk, tænker vi også på app´s der kan udvikles til mobiltelefoner, tablets og andre mobile applikationer samt intelligente ure for at imødekomme dit brands behov på det voksende marked.</p>
              <p>Vi vedligeholder dine applikationer løbende. Vi løser hvilken som helst problem med det samme som vi bliver opmærksom på via vores overvågningssystem.</p>
              <p>Vi giver hurtig svar på ethvert ønske og behov. Vi opfylder alle dine Brand behov under et tag og udvikler platforme med vores strategi, bruger erfaring og vores kreative team.</p>
              <h1>Kampagner</h1>
              <p>Hver brand har en god historie. Vi puster sjæl ind i din historie, distribuere, måler det på de rigtige kanaler.</p>
              <p>Vi fokusere på burger oplevelser og et stærkt infrastruktur baseret på strategiske beslutninger og overvejelser uden at tage højde for dit brands størrelse; gennemtænker vi alle udfordringer der måtte være, som udfordringer der skal tages.</p>
              <p>Vi bringer liv til din kampagne ved at implementere vores data-orienteret og kreative tilgang.</p>
              <p>Vi udfører programmering og producer indhold til små hjemmesider, skaber messenger bot, Facebook, skræddersyede små hjemmesider til Instagram kontoen, mobile applikationer, hjemmesider og social netværk.</p>
              <p>Vi anvender effektivt A/B test, media planlægning, studio production, visual design I vores kampagner.</p>
              <p>Vi anvender hele Internettet, tablets, mobile enheder, smart watches, virtuel reality briller, 3D print, smart TV, din fysiske butik, udendøres reklame søjler, de sociale netværk, viral netværk og anvender populære personer/ influencers til at skabe hype omkring dine produkter med vores omnichannel tilgang i alle de kampagner vi er involveret i.</p>
              <p>Alle brands har deres egen historie, som en del af det forklare det historien og vores ansvar. Derfor checker vores analytiker altid virkninger og effekten af vores kampagner og informere dig i form af en rapport om hvor effektiv kampagnen har været, hvor mange mennesker er vi nået ud til, hvordan feedbacken har været, hvilken vej processen har kurs and din ROI.</p>
              <p>Når vi arbejder på din kampagne, har drømmene ingen grænser, det er første skridt. Vi ønsker at møde alle dine ønsker og krav på det strategiske niveau, bruger oplevelser og den kreative samt platform delen.</p>
              <h1>Strategi</h1>
              <p>Vi tager din brand et skridt videre ved at undersøge og udvikle de faktorer som bringer dit brand og mulighederne sammen.</p>
              <p>Vi sørger for at du er i stand til at gode beslutninger for dit brand, din forretning og dit projekt ved at analysere den information vi har hentet via big data, sociale medier, virksomheds regnskaber, research rapporter fra uafhængige institutioner, din analytiske output, markedsundersøgelser, kunde feedback og hundrede af ikke klassificeret databaser, med vores data analyse produkt.</p>
              <p>Beslutning om strategiske markeder? Beslutning om hvilken vej din projekt skal gå? Hvilke muligheder du måske vil miste i lyset af big data? Hvad er effekten af Y ekspansion ved X marked gjort af dit brand? Er du ikke sikker på ”boomerang” effekten af din store investering som du foretog dig på Nettet til X kurs?</p>
              <p>Er smart ure, virtuel reality briller, flyvende biler, fragt droner, fantastiske mobile applikationer, spektakulære fjernsyns reklamer musik i dine øre; men hvad sker der hvis de er forstyrrelser og ineffektive aktiviteter for dit brands muligheder som et direkte resultat af manglende forudgående analyse arbejde. Hvad sker der hvis du lære alt dette når du venter på ROI af din million investering?</p>
              <p>Vi går efter at fjerne “gid vi kunne forsøge” tanken og sætningen ved at sikre os en grundig undersøgelse og analyse af forholdene markedet.</p>
              <p>Vi analysere din strategi ved at stimulere den i krigslignende med nyt data og fra dag til dag og vores teknologiske potentiale og vi arbejder også for du ikke skal møde udfordringer på din vej.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Service Block */}
    </Layout>
  )
}

export default IndexPage
