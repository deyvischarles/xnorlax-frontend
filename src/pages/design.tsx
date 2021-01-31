import Head from 'next/head'

import GitHub from '../components/Icons/GitHub'
import Linkedin from '../components/Icons/Linkedin'
import YouTube from '../components/Icons/YouTube'
import Instagram from '../components/Icons/Instagram'
import Facebook from '../components/Icons/Facebook'
import Whatsapp from '../components/Icons/Whatsapp'
import Telegram from '../components/Icons/Telegram'
import PlayStore from '../components/Icons/PlayStore'
import AccountCircle from '../components/Icons/AccountCircle'
import Api from '../components/Icons/Api'
import ArrowRightAlt from '../components/Icons/ArrowRightAlt'
import BugReport from '../components/Icons/BugReport'
import Code from '../components/Icons/Code'
import ContactSupport from '../components/Icons/ContactSupport'
import CreditCard from '../components/Icons/CreditCard'
import Dashboard from '../components/Icons/Dashboard'
import Delete from '../components/Icons/Delete'
import Description from '../components/Icons/Description'
import Done from '../components/Icons/Done'
import DoneAll from '../components/Icons/DoneAll'
import Event from '../components/Icons/Event'
import Extension from '../components/Icons/Extencion'
import Favorite from '../components/Icons/Favorite'
import FavoriteBorder from '../components/Icons/FavoriteBorder'
import FeedBack from '../components/Icons/FeedBack'
import Help from '../components/Icons/Help'

const Design = () => {
  return (
    <>
        <Head>
            <meta name="description" content="Nosso sistema de design"/>
            <meta name="keywords" content="supermachine, design"/>
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APP_URL}/design`}/>
            <title>Supermachine - Design</title>
        </Head>

        <main>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col sm12">
                            <h4 className="light">Grades</h4>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col sm1 flex-box outlined pad-8">1</div>
                        <div className="col sm1 flex-box outlined pad-8">2</div>
                        <div className="col sm1 flex-box outlined pad-8">3</div>
                        <div className="col sm1 flex-box outlined pad-8">4</div>
                        <div className="col sm1 flex-box outlined pad-8">5</div>
                        <div className="col sm1 flex-box outlined pad-8">6</div>
                        <div className="col sm1 flex-box outlined pad-8">7</div>
                        <div className="col sm1 flex-box outlined pad-8">8</div>
                        <div className="col sm1 flex-box outlined pad-8">9</div>
                        <div className="col sm1 flex-box outlined pad-8">10</div>
                        <div className="col sm1 flex-box outlined pad-8">11</div>
                        <div className="col sm1 flex-box outlined pad-8">12</div>
                    </div>

                    <div className="row">
                        <div className="col sm12">
                            <h5 className="light">Grades Responsivos</h5>
                            <p className="space-botton">No exemplo abaixo, nós tornamos o layout responsivo definindo quantas colunas a div 
                            deve ocupar em cada tamanho de tela. Tente redimensionar seu navegador e veja o 
                            layout abaixo se auto-ajustando.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col sm12 flex-box outlined pad-8">SM12</div>
                    </div>

                    <div className="row">
                        <div className="col sm12 md4 lg2 flex-box outlined pad-8">SM12 - MD4 - LG2</div>
                        <div className="col sm12 md4 lg8 flex-box outlined pad-8">SM12 - MD4 - LG8</div>
                        <div className="col sm12 md4 lg2 flex-box outlined pad-8">SM12 - MD4 - LG2</div>
                    </div>

                    <div className="row">
                        <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                        <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                        <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                        <div className="col sm12 md6 lg3 flex-box outlined pad-8">SM12 - MD6 - LG3</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col sm12">
                            <h4>SvgIcon</h4>
                            <p>Nós padronizamos mais de 26 ícones de uso comun (veja abaixo). Para cada ícone SVG, exportamos o respectivo componente React do nosso caminho components/icons. Você pode pesquisar na lista completa destes ícones.</p>
                        </div>
                    </div>

                    <div className="divider"/>

                    <div className="row">
                        <div className="col sm12">
                            <h5>Action</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <AccountCircle width="32" height="32" className="space-botton"/>
                                <p>AccountCircle</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Api width="32" height="32" className="space-botton"/>
                                <p>Api</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <ArrowRightAlt width="32" height="32" className="space-botton"/>
                                <p>ArrowRightAlt</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <BugReport width="32" height="32" className="space-botton"/>
                                <p>BugReport</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Code width="32" height="32" className="space-botton"/>
                                <p>Code</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <ContactSupport width="32" height="32" className="space-botton"/>
                                <p>ContactSupport</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <CreditCard width="32" height="32" className="space-botton"/>
                                <p>CreditCard</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Dashboard width="32" height="32" className="space-botton"/>
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Delete width="32" height="32" className="space-botton"/>
                                <p>Delete</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Description width="32" height="32" className="space-botton"/>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Done width="32" height="32" className="space-botton"/>
                                <p>Done</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <DoneAll width="32" height="32" className="space-botton"/>
                                <p>DoneAll</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Event width="32" height="32" className="space-botton"/>
                                <p>Event</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Extension width="32" height="32" className="space-botton"/>
                                <p>Extension</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Favorite width="32" height="32" className="space-botton"/>
                                <p>Favorite</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <FavoriteBorder width="32" height="32" className="space-botton"/>
                                <p>FavoriteBorder</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <FeedBack width="32" height="32" className="space-botton"/>
                                <p>FeedBack</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Help width="32" height="32" className="space-botton"/>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>

                    <div className="divider"/>

                    <div className="row">
                        <div className="col sm12">
                            <h5>Logos</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <GitHub className="space-botton"/>
                                <p>GitHub</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Linkedin className="space-botton"/>
                                <p>Linkedin</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <YouTube className="space-botton"/>
                                <p>YouTube</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Instagram className="space-botton"/>
                                <p>Instagram</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Facebook className="space-botton"/>
                                <p>Facebook</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Whatsapp className="space-botton"/>
                                <p>Whatsapp</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <Telegram className="space-botton"/>
                                <p>Telegram</p>
                            </div>
                        </div>
                        <div className="col sm4 md2 pad-16">
                            <div className="flex-box flex-col pad-16 nowrap outlined transparent">
                                <PlayStore className="space-botton"/>
                                <p>PlayStore</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col sm12">
                            <p>Se você precisa customizar o ícone SVG (não disponível no conjunto padrão de ícones Material) você pode encapsular em um SvgIcon. Este componente estende o elemento nativo "svg":</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Design