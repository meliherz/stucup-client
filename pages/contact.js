import React from "react";
import Layout from "../components/global/layout";
import { Accordion } from "react-bootstrap";
import SectionTitle from "../components/global/section-title";
import { IoIosArrowDown } from "react-icons/io";
import { CONTACT_FORM } from "../config";



const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="contact section-padding-b">
        <div
          className="contact-image"
          style={{ backgroundImage: "url(/images/contact.jpg)" }}
        >
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto text-center">
              <h2 className="title">Bize Ulaşın</h2>
              <p className="description">
                Eğer bir öğrenci kulübü temsilcisiyseniz ve etkinliklerinizi
                yayınlamak veya paylaşmak istiyorsanız,
                lütfen bize aşağıdaki formu kullanarak ulaşın.Ekibimiz size
                gereken desteği sağlamaktan mutluluk duyacaktır.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <form action={CONTACT_FORM} method="post" className="contact-form">
                <h3>Mesajınızı İletin</h3>
                <p>
                  Görüş ve önerileriniz bizler için değerlidir.
                </p>
                <div className="row my-3">
                  <div className="col-md-6 mb-3">
                    <input name="name" type="text" placeholder="Adınız" />
                  </div>
                  <div className="col-md-6 mb-3">
                    {" "}
                    <input name="phone" type="text" placeholder="Telefon" />
                  </div>
                  <div className="col-12 mb-3">
                    {" "}
                    <input name="email" type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id=""
                      rows="5"
                      placeholder="Mesajınız"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="button">Gönder</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <SectionTitle title="Sık Sorulan Sorular" />
              <Accordion
                className="accordion-flush faq-accordion"
                defaultActiveKey="0"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <span>Stucup'ı kullanmak ücretsiz mi?</span> <IoIosArrowDown />{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                  Evet, web sitemizi kullanmak tamamen ücretsizdir.
                  Öğrenci kulüpleri etkinliklerini yayınlamak için üyelik veya herhangi bir ücret ödemek zorunda değillerdir.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <span>Etkinliklerimi nasıl yayınlayabilirim?</span> <IoIosArrowDown />
                  </Accordion.Header>
                  <Accordion.Body>
                  Etkinliklerinizi yayınlamak için öğrenci kulübü temsilcisi olarak web sitemize üye olmanız gerekmektedir. Üye olduktan sonra, hesabınıza giriş yaparak etkinlikleri kolayca yayınlayabilirsiniz. Detaylı adımları "Kullanım Kılavuzu" bölümünde bulabilirsiniz.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    <span>Yayınladığım etkinlikleri nasıl düzenleyebilirim?</span> <IoIosArrowDown />
                  </Accordion.Header>
                  <Accordion.Body>
                  Yayınladığınız etkinlikleri hesabınıza giriş yaparak düzenleyebilirsiniz. Etkinlik detaylarını güncellemek veya etkinliği iptal etmek gibi değişiklikleri kolaylıkla yapabilirsiniz.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <span>Etkinliklerimi sadece kendi kulübümün öğrencilerine mi gösterebilirim?</span> <IoIosArrowDown />
                  </Accordion.Header>
                  <Accordion.Body>
                  Hayır, etkinlikleriniz tüm web sitemizin kullanıcılarına açık olarak yayınlanır. Diğer öğrenciler web sitemizi ziyaret ederek etkinliklerinizi görebilir ve katılabilirler.                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    {" "}
                    <span>Bir etkinlik düzenlemek için kulüp üyesi olmam gerekiyor mu?</span> <IoIosArrowDown />
                  </Accordion.Header>
                  <Accordion.Body>
                  Hayır, etkinliklere katılmak için kulüp üyesi olmanız gerekmez. Web sitemizde yer alan etkinliklere herhangi bir öğrenci olarak katılabilirsiniz.                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
