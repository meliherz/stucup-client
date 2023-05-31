import React from 'react';
import SectionTitle from './global/section-title';

const HowItWorks = () => {
    return (
        <div className="how-works section-padding">
                <div className="container">
                    <SectionTitle title="Etkinliklere Nasıl Katılırım ?" />
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 text-center">
                           <div className="how-works__item">
                           <div className="how-works__item--number">
                                01
                            </div>
                            <h3>İlgilendiğin etkinliği seç</h3>
                            <p>Öncelikle, ilgilendiğin veya katılmak istediğin etkinliği bul. Web sitemizde geniş bir etkinlik yelpazesi bulunuyor. Konserlerden konferanslara, spor etkinliklerinden sanat gösterilerine kadar birçok farklı etkinlik seçeneği arasından istediğini seçebilirsin.</p>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 text-center">
                           <div className="how-works__item">
                           <div className="how-works__item--number">
                                02
                            </div>
                            <h3>Kolay ve hızlı kayıt işlemi</h3>
                            <p>Seçtiğin etkinliğe katılmak için kaydol. Kayıt işlemi genellikle basit ve hızlıdır. İlgili etkinlik sayfasında kayıt formunu doldurarak yerini ayırtabilirsin. Bu sayede organizasyon ekibi senin katılacağını biliyor ve gerekli düzenlemeleri yapabiliyor.</p>
                           </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 text-center">
                           <div className="how-works__item">
                           <div className="how-works__item--number">
                                03
                            </div>
                            <h3>Etkinliğe giriş bileti al</h3>
                            <p>Etkinliğe katılmak için giriş bileti al. Kayıt işlemi tamamlandıktan sonra genellikle bir bilet veya katılım kodu alırsın. Bu belgeyi etkinlik günü yanında bulundurman gerekebilir. Biletin, etkinliğe giriş yapman için gereken geçiş belgesidir.</p>
                           </div>
                        </div>
                       
                    </div>
                </div>
            </div>
    );
};

export default HowItWorks;